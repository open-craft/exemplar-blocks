"""
Type definitions for MyPy.
"""

from enum import StrEnum
from typing import Annotated

from pydantic import AfterValidator, BaseModel

from exemplar_common.utils import is_color

WorkbenchScenario = tuple[str, str]


class Variant(StrEnum):
    SECTION_COVER = "section"
    COURSE_COVER = "course"
    SEPARATOR = "separator"


class ImagePosition(StrEnum):
    LEFT = "left"
    RIGHT = "right"


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
    image_position: ImagePosition = ImagePosition.RIGHT
