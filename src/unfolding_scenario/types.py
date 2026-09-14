"""Types for the Unfolding Scenario Block"""

from typing import Annotated

from pydantic import AfterValidator, BaseModel, ConfigDict

from exemplar_common.utils import is_color


class Outcome(BaseModel):
    """
    An optional "outcomes" slide at the end of scenarios.
    """

    model_config = ConfigDict(extra="forbid")

    heading: str
    description: str

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return f"{self.heading} {self.description}"


class Answer(BaseModel):
    """
    Options presented in a scenario.
    """

    model_config = ConfigDict(extra="forbid")

    value: str
    feedback: str
    is_correct: bool

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return f"{self.value} {self.feedback}"


class Scenario(BaseModel):
    """
    Scenario presented as an interactive slide.
    """

    model_config = ConfigDict(extra="forbid")

    heading: str
    description: str
    instruction_title: str
    instruction_description: str
    question: str
    answers: list[Answer]

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing.

        TODO: verify all the answers should be added
        """
        return " ".join(
            [
                self.heading,
                self.description,
                self.instruction_title,
                self.instruction_description,
                self.question,
                *[ans.searchable_text() for ans in self.answers],
            ]
        )


class Introduction(BaseModel):
    """
    Introduction content that's presented by default by the XBlock.
    """

    model_config = ConfigDict(extra="forbid")

    heading: str
    description: str
    button_text: str

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return " ".join([self.heading, self.description])


class Data(BaseModel):
    """
    All the learner-facing content of the Unfolding Scenario block.
    """

    model_config = ConfigDict(extra="forbid")

    introduction: Introduction
    scenarios: list[Scenario]
    outcome: Outcome | None = None

    def searchable_text(self) -> str:
        """
        Learner visible text for the search index.
        """
        parts = [
            self.introduction.searchable_text(),
            self.outcome.searchable_text() if self.outcome else "",
        ]
        for scenario in self.scenarios:
            parts.append(scenario.searchable_text())
        return " ".join(parts)


class UnfoldingScenarioFields(BaseModel):
    """
    Full payload sent by the studio editor when saving the block.
    """

    model_config = ConfigDict(extra="forbid")

    display_name: str
    background_color: Annotated[str, AfterValidator(is_color)]
    data: Data
