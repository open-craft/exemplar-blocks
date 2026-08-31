"""Type definitions and Pydantic models"""
# The types in this file are synced to frontend/src/ideas-overview-block/apiTypes.ts using pydantic2ts.

from typing import Annotated

from pydantic import AfterValidator, BaseModel, ConfigDict

from exemplar_common.utils import sanitise_simple_html

WorkbenchScenario = tuple[str, str]


class Idea(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    title: str  # plain text, single line
    points: list[Annotated[str, AfterValidator(sanitise_simple_html)]]

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return " ".join([self.title, *self.points])


class Content(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    header: Annotated[str, AfterValidator(sanitise_simple_html)]
    footer: Annotated[str, AfterValidator(sanitise_simple_html)]
    ideas: list[Idea]

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return " ".join(
            [
                self.header,
                self.footer,
                *(idea.searchable_text() for idea in self.ideas),
            ]
        )


class Data(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    displayName: str
    content: Content
    backgroundColor: str
