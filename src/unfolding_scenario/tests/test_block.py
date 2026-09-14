import json
from typing import Literal

from webob import Request
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from unfolding_scenario import UnfoldingScenarioXBlock

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


def make_request(method: Literal["GET", "POST", "PUT", "DELETE"], data) -> Request:
    """Make a webob JSON Request"""
    request = Request.blank("/")
    request.method = method
    data = json.dumps(data).encode("utf-8") if data is not None else b""
    request.body = data
    return request


def make_block(**fields: str) -> UnfoldingScenarioXBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return UnfoldingScenarioXBlock(
        ToyRuntime(),
        scope_ids=scope_ids,
        field_data=DictFieldData(data=fields),
    )


def get_student_content(block: UnfoldingScenarioXBlock) -> str:
    """Get the contents of a student render for a block."""
    frag = block.student_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def get_studio_content(block: UnfoldingScenarioXBlock) -> str:
    """Get the contents of a studio render for a block."""
    frag = block.studio_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def test_block_html():
    """Test that the block with defaults renders as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_student_content(block)
    assert "unfolding_scenario_block" in content


def test_block_html_studio():
    """Test that the studio view with defaults renders as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_studio_content(block)
    assert "editor-with-buttons" in content


def test_block_default_data():
    """The block has valid default data."""
    block = make_block()

    assert block.data["introduction"]["heading"] == "Unfolding Scenario"
    assert block.background_color == "#FFFFFF"
    assert block.display_name == "Unfolding Scenario"


def test_block_update_data():
    """Test that we can update data via the studio_save handler"""
    block = make_block()

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "display_name": "test",
                "background_color": "#AABBCC",
                "data": {
                    **VALID_DATA,
                    "outcome": None,
                },
            },
        ),
    )

    assert response.status == "200 OK"
    assert b"success" in response.body

    assert block.display_name == "test"
    assert block.background_color == "#AABBCC"
    assert block.data["introduction"]["heading"] == "Introduction"
    assert block.data["outcome"] is None


def test_block_update_data_reject_invalid():
    """Test that updating invalid data via the studio_save handler fails and does not update data."""
    block = make_block()

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "display_name": "test",
                "background_color": "#AABBCC",
                "data": {
                    "introduction": VALID_DATA["introduction"],
                    "scenarios": [
                        {
                            **VALID_DATA["scenarios"][0],
                            "answers": "not-a-list",
                        }
                    ],
                    "outcome": VALID_DATA["outcome"],
                },
            },
        ),
    )

    assert response.status == "400 Bad Request"

    # assert the changes haven't been persisted
    assert block.display_name == "Unfolding Scenario"
    assert block.data["introduction"]["heading"] == "Unfolding Scenario"


def test_block_update_data_reject_invalid_color():
    """Test that an invalid background colour is rejected."""
    block = make_block()

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "display_name": "test",
                "background_color": "not-a-color",
                "data": VALID_DATA,
            },
        ),
    )

    assert response.status == "400 Bad Request"
    assert block.background_color == "#FFFFFF"


def test_workbench_scenarios():
    """Basic test to verify workbench scenario loading doesn't raise an error."""
    scenarios = UnfoldingScenarioXBlock.workbench_scenarios()
    assert isinstance(scenarios, list)
    assert len(scenarios) > 0


def test_index_dictionary():
    """Learner-visible text from the block content is indexed as plain text."""
    block = make_block(data=VALID_DATA)

    result = block.index_dictionary()

    assert result["content_type"] == "Unfolding Scenario"
    assert result["content"]["display_name"] == "Unfolding Scenario"
    content = result["content"]["unfolding_scenario_content"]
    assert "Introduction" in content
    assert "What would you do next?" in content
    assert "That's right!" in content
    assert "Outcome" in content


def test_index_dictionary_malformed_content():
    """Malformed data is ignored rather than breaking indexing."""
    block = make_block(data={"invalid": "data"})

    result = block.index_dictionary()

    assert result["content"]["unfolding_scenario_content"] == ""
