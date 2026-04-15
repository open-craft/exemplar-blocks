"""
Type definitions and Pydantic models
"""

from typing import Literal, List, Annotated
from enum import Enum

import nh3
from pydantic import BaseModel, Field, ConfigDict, AfterValidator

WorkbenchScenario = tuple[str, str]

# The types in this file are synced to frontend/src/two-column-block/apiTypes.ts using pydantic2ts.

# NOTE: we're using camelCase rather than snake_case here to match up with the frontend types.
# We could use Pydantic alias generators ( https://stackoverflow.com/a/77424889 ), but it's not that important (yet).


def sanitise_text_layout_html(value: str) -> str:
    # Specific rules for the body of the text layout.
    # The html here should be restricted to only a small number of tags to preserve neat typography,
    # and of course to avoid scripting or other unwanted things.
    # docs for nh3: https://nh3.readthedocs.io/en/latest/#nh3.clean
    cleaner = nh3.Cleaner(
        tags={"h1", "h2", "h3", "h4", "h5", "p", "strong", "em", "span"},
        attributes={"*": {"style"}},
        filter_style_properties={"color"},
    )
    return cleaner.clean(value)


# ratios are designed to work well with the Bootstrap 12 column grid.
class Ratio(Enum):
    NineThree = "9:3"
    EightFour = "8:4"
    SevenFive = "7:5"
    SixSix = "6:6"
    FiveSeven = "5:7"
    FourEight = "4:8"
    ThreeNine = "3:9"


class ColumnOrder(Enum):
    leftAboveRight = "leftAboveRight"
    rightAboveLeft = "rightAboveLeft"


class BottomRowOrder(Enum):
    ImageText = "imageText"
    TextImage = "textImage"


# https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items
# https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-align
# https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-content
class Alignment(Enum):
    Start = "start"
    Center = "center"
    End = "end"


class FontSize(Enum):
    Small = "small"
    Large = "large"


class LessonInfo(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    id: str  # a lesson id or number - eg. 4.1.1
    title: str


class ExtendedLessonInfo(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    id: str  # a lesson id or number - eg. 4.1.1
    title: str
    url: str


class ImageInfo(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    url: str
    decorative: bool  # if decorative, doesn't need alt text
    alt: str
    onClickUrl: str


class ImageGridText(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    content: str
    alignment: Alignment
    fontSize: FontSize
    backgroundColor: str
    color: str


class TextLayoutData(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    kind: Literal["text"]
    content: Annotated[str, AfterValidator(sanitise_text_layout_html)]
    verticalAlignment: Alignment


class LessonListLayoutData(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    kind: Literal["lessonList"]
    title: str
    text: str
    lessons: List[LessonInfo]


class LessonIntroLayoutData(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    kind: Literal["lessonIntro"]
    title: str
    summary: str
    lesson: ExtendedLessonInfo
    showStartLessonButton: bool
    previousLesson: (
        ExtendedLessonInfo | None
    )  # presence of a value here implies the 'previous lesson' button is to be shown


class ImageGridLayoutData(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    kind: Literal["imageGrid"]
    featuredImage: ImageInfo
    bottomImage: ImageInfo
    text: ImageGridText
    bottomRowOrder: BottomRowOrder


class ColumnData(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    left: (
        TextLayoutData
        | LessonListLayoutData
        | LessonIntroLayoutData
        | ImageGridLayoutData
    ) = Field(discriminator="kind")
    right: (
        TextLayoutData
        | LessonListLayoutData
        | LessonIntroLayoutData
        | ImageGridLayoutData
    ) = Field(discriminator="kind")
    ratio: Ratio
    order: ColumnOrder


class Data(BaseModel):
    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    displayName: str
    columns: ColumnData
