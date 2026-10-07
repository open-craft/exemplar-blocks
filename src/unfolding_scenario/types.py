"""Types for the Unfolding Scenario Block"""

from pydantic import BaseModel, ConfigDict


class Outcome(BaseModel):
    """
    An optional "outcomes" slide at the end of scenarios.
    """

    model_config = ConfigDict(extra="forbid")

    # TODO: there is also an outcome variant option that we need to record here (still under discussion)
    heading: str
    description: str  # TODO: this should be treated as html and sanitised
    # TODO: add a new outcome type field (or equivalent) once discussion around type of outcomes is finalised

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return f"{self.heading} {self.description}"


class Option(BaseModel):
    """
    Options presented in a scenario.
    """

    model_config = ConfigDict(extra="forbid")

    value: str
    feedback: str
    icon: str  # TODO: the format of this is still under discussion

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return f"{self.value} {self.feedback}"


class Scenario(BaseModel):
    """
    Scenario presented as an interactive slide.
    """

    model_config = ConfigDict(extra="forbid")

    heading: str
    description: str  # TODO: this should be treated as html and sanitised
    instructionTitle: str
    instructionDescription: str  # TODO: this should be treated as html and sanitised
    prompt: str
    options: list[Option]

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return " ".join(
            [
                self.heading,
                self.description,
                self.instructionTitle,
                self.instructionDescription,
                self.prompt,
                *[option.searchable_text() for option in self.options],
            ]
        )


class Introduction(BaseModel):
    """
    Introduction content that's presented by default by the XBlock.
    """

    model_config = ConfigDict(extra="forbid")

    heading: str
    description: str
    imageURL: str

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return " ".join([self.heading, self.description])


class ScenarioData(BaseModel):
    """
    All the learner-facing content of the Unfolding Scenario block.
    """

    model_config = ConfigDict(extra="forbid")

    name: str
    introduction: Introduction
    scenarios: list[Scenario]
    outcome: Outcome | None

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


class Data(BaseModel):
    """
    Full payload sent by the studio editor when saving the block.
    """

    model_config = ConfigDict(extra="forbid")

    displayName: str
    scenarioData: ScenarioData
