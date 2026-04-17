from pydantic import BaseModel
from enum import StrEnum
from typing import Optional


class Orientation(StrEnum):
    HORIZONTAL = "HORIZONTAL"
    VERTICAL = "VERTICAL"


class CardType(StrEnum):
    UNKNOWN = "UNKNOWN"
    IMAGE = "IMAGE"
    CONTENT_HIGHLIGHT = "CONTENT_HIGHLIGHT"
    RICH_LIST = "RICH_LIST"
    HOVER_LIST = "HOVER_LIST"


class ContentHighlightData(BaseModel):
    title: str
    subtitle: str
    description: str


class RichListItem(BaseModel):
    icon: str
    title: str
    description: str


class RichListData(BaseModel):
    items: list[RichListItem]


class HoverListItem(BaseModel):
    description: str
    hoverContent: str = ""
    icon: str = ""


class HoverListData(BaseModel):
    items: list[HoverListItem]


class ImageData(BaseModel):
    location: str
    altText: str


class CardData(BaseModel):
    id: int
    name: str = ""
    title: str
    subtitle: str = ""
    description: str = ""
    ctaLink: str = ""
    ctaLabel: str = ""
    cardType: CardType
    secondaryContent: Optional[
        HoverListData | ImageData | RichListData | ContentHighlightData
    ]


class InitData(BaseModel):
    cards: list[CardData]
    displayName: str
    orientation: Orientation
    disableNumbering: bool = False
