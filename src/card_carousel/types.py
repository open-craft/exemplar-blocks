from pydantic import BaseModel
from enum import StrEnum
from typing import Literal, Optional


class Orientation(StrEnum):
    """
    Layout of the card's primary and secondary contents.
    """

    HORIZONTAL = "HORIZONTAL"
    VERTICAL = "VERTICAL"


class CardType(StrEnum):
    """
    The different variants of the content the cards support.
    """

    IMAGE = "IMAGE"
    CONTENT_HIGHLIGHT = "CONTENT_HIGHLIGHT"
    RICH_LIST = "RICH_LIST"
    HOVER_LIST = "HOVER_LIST"


class UnknownData(BaseModel):
    """
    This models is neither required nor used anywhere. But this helps in preserving
    the CardType enum when pydantic2ts generates the frontend types.
    """

    kind: CardType


class ContentHighlightData(BaseModel):
    """
    The secondary content used to showcase a specific content like a section,
    or unit using just text hightlights.
    """

    kind: Literal[CardType.CONTENT_HIGHLIGHT] = CardType.CONTENT_HIGHLIGHT
    title: str
    subtitle: str
    description: str


class RichListItem(BaseModel):
    """
    Defines each item in a RICH_LIST card.
    """

    icon: str
    title: str
    description: str


class RichListData(BaseModel):
    """
    The secondary content that renders into a "rich list" with icon, title and
    description.
    """

    kind: Literal[CardType.RICH_LIST] = CardType.RICH_LIST
    items: list[RichListItem]


class HoverListItem(BaseModel):
    """
    Defines each item in a HOVER_LIST card.
    """

    description: str
    hoverContent: str = ""
    icon: str = ""


class HoverListData(BaseModel):
    """
    The secondary content that renders into an interactive list of items
    which show different content when "hovered" (or tapped) with the mouse.
    """

    kind: Literal[CardType.HOVER_LIST] = CardType.HOVER_LIST
    items: list[HoverListItem]


class ImageData(BaseModel):
    """
    The secondary content that just shows an image for half the card.
    """

    kind: Literal[CardType.IMAGE] = CardType.IMAGE
    location: str
    altText: str


class CardData(BaseModel):
    """
    Model that defines the primary and secondary content of a card.
    """

    # Unique ID for the card in the list. Helps with preserving order of
    # presentation.
    id: int

    # A user friendly name of the card. Used only on the sidebar of the editor.
    name: str

    # Title for the card's contents
    title: str

    # Optional - subtitle
    subtitle: str = ""

    # Optional - description. Not available for card type HOVER_LIST
    description: str = ""

    # Optional - A call-to-action text. Together with ctaLink, it renders
    # a button that users can click to navigate. Not available for HOVER_LIST.
    ctaLabel: str = ""

    # Optianl - Call-to-action Link
    ctaLink: str = ""

    # Secondary content that's presented in the card.
    secondaryContent: Optional[
        HoverListData | ImageData | RichListData | ContentHighlightData
    ]


class InitData(BaseModel):
    """
    Model that defines the complete data that's passed to the frontend.
    """

    # List of cards in the carousel
    cards: list[CardData]

    # Title shown on top of the carousel
    displayName: str

    # The direction of how each card's primary and secondary content are
    # rendered.
    orientation: Orientation

    # Flag to disable the pagination numbers on the cards
    disableNumbering: bool = False
