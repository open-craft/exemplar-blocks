import re

import pytest
from pydantic import ValidationError

from unfolding_scenario.types import Data, UnfoldingScenarioFields

VALID_DATA = {
    "introduction": {
        "heading": "Introduction",
        "description": "An introduction to the scenario.",
        "button_text": "Start",
    },
    "scenarios": [
        {
            "heading": "Scenario 1",
            "description": "The first scenario.",
            "instruction_title": "Make a decision",
            "instruction_description": "Choose one of the options below.",
            "question": "What would you do next?",
            "answers": [
                {"value": "Do this", "feedback": "Not quite.", "is_correct": False},
                {"value": "Do that", "feedback": "That's right!", "is_correct": True},
            ],
        },
    ],
    "outcome": {
        "heading": "Outcome",
        "description": "You have completed all the scenarios.",
    },
}


def test_data_validation():
    """Basic test for data validation for the root pydantic model."""
    validated_data = Data(**VALID_DATA)

    # test the round trip from dictionary -> model -> dictionary
    assert validated_data.model_dump() == VALID_DATA


def test_data_validation_outcome_is_optional():
    """The outcome slide is optional."""
    validated_data = Data(**{**VALID_DATA, "outcome": None})

    assert validated_data.outcome is None
    assert validated_data.model_dump()["outcome"] is None


def test_data_validation_fail():
    """Extra inputs are rejected."""
    with pytest.raises(
        ValidationError,
        match=re.compile(
            r"^1 validation error for Data.*Extra inputs are not permitted .*'baz'.*$",
            re.DOTALL,
        ),
    ):
        Data(**VALID_DATA, foobar="baz")


def test_data_validation_fail_missing_answer_field():
    """Answers missing required fields are rejected."""
    with pytest.raises(ValidationError):
        Data(
            **{
                **VALID_DATA,
                "scenarios": [
                    {
                        **VALID_DATA["scenarios"][0],
                        "answers": [{"value": "Do this", "is_correct": False}],
                    }
                ],
            }
        )


def test_unfolding_scenario_fields_validation():
    """The full studio payload validates, including the background colour."""
    input_data = {
        "display_name": "test",
        "background_color": "#AABBCC",
        "data": VALID_DATA,
    }

    validated_data = UnfoldingScenarioFields(**input_data)

    assert validated_data.display_name == "test"
    assert validated_data.background_color == "#AABBCC"
    assert validated_data.data.model_dump() == VALID_DATA


def test_unfolding_scenario_fields_validation_fail_bad_color():
    """An invalid background colour is rejected."""
    with pytest.raises(ValidationError):
        UnfoldingScenarioFields(
            display_name="test",
            background_color="not-a-color",
            data=VALID_DATA,
        )


def test_searchable_text():
    """All the learner-visible text is included in the search index text."""
    validated_data = Data(**VALID_DATA)

    text = validated_data.searchable_text()

    for expected in (
        "Introduction",
        "An introduction to the scenario.",
        "Scenario 1",
        "What would you do next?",
        "Do that",
        "That's right!",
        "Outcome",
        "You have completed all the scenarios.",
    ):
        assert expected in text
