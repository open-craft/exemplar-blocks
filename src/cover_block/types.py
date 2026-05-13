"""
Type definitions for MyPy.
"""

import re
from enum import StrEnum
from typing import Annotated

from pydantic import BaseModel, AfterValidator

WorkbenchScenario = tuple[str, str]


class Variant(StrEnum):
    SECTION_COVER = "section"
    COURSE_COVER = "course"
    SEPARATOR = "separator"


COLOR_REGEX = re.compile("^#[a-fA-F0-9]{6}$")


def is_color(value: str) -> str:
    """
    Validates that a string is a valid color per HTML color picker specifications.
    """
    if not value:
        return value
    if COLOR_REGEX.match(value):
        return value
    raise ValueError(f"{repr(value)} is not a valid HTML hex color.")


Color = Annotated[str, AfterValidator(is_color)]


class CoverBlockFields(BaseModel, extra="forbid", use_enum_values=True):
    """
    Fields for the Cover block.
    """

    display_name: str
    variant: Variant
    top_header: str
    top_header_color: Color
    main_header: str
    main_header_color: Color
    subheader: str
    subheader_color: Color
    description: str
    description_color: Color
    media_url: str
    media_alt_text: str
