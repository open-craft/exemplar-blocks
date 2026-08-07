"""
Card data models shared by the card-based XBlocks (Card Carousel, Card Grid).

Developer Note [IMPORTATNT]
---------------------------
These need to be in sync with the frontend types. Update the corresponding
types in the `frontend/src/card/common/types.ts` file, when making changes here.
"""

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


class ContentHighlightData(BaseModel):
    """
    The secondary content used to showcase a specific content like a section,
    or unit using just text hightlights.
    """

    kind: Literal[CardType.CONTENT_HIGHLIGHT] = CardType.CONTENT_HIGHLIGHT
    title: str
    subtitle: str
    description: str

    def searchable_text(self) -> list[str]:
        """Learner-visible text fragments for search indexing."""
        return [self.title, self.subtitle, self.description]


class RichListItem(BaseModel):
    """
    Defines each item in a RICH_LIST card.
    """

    icon: str
    title: str
    description: str

    def searchable_text(self) -> list[str]:
        """Learner-visible text fragments; the icon name is not indexed."""
        return [self.title, self.description]


class RichListData(BaseModel):
    """
    The secondary content that renders into a "rich list" with icon, title and
    description.
    """

    kind: Literal[CardType.RICH_LIST] = CardType.RICH_LIST
    items: list[RichListItem]

    def searchable_text(self) -> list[str]:
        """Learner-visible text fragments for search indexing."""
        return [text for item in self.items for text in item.searchable_text()]


class HoverListItem(BaseModel):
    """
    Defines each item in a HOVER_LIST card.
    """

    description: str
    hoverContent: str = ""
    icon: str = ""

    def searchable_text(self) -> list[str]:
        """Learner-visible text fragments; the icon name is not indexed."""
        return [self.description, self.hoverContent]


class HoverListData(BaseModel):
    """
    The secondary content that renders into an interactive list of items
    which show different content when "hovered" (or tapped) with the mouse.
    """

    kind: Literal[CardType.HOVER_LIST] = CardType.HOVER_LIST
    items: list[HoverListItem]

    def searchable_text(self) -> list[str]:
        """Learner-visible text fragments for search indexing."""
        return [text for item in self.items for text in item.searchable_text()]


class ImageData(BaseModel):
    """
    The secondary content that just shows an image for half the card.
    """

    kind: Literal[CardType.IMAGE] = CardType.IMAGE
    location: str
    altText: str

    def searchable_text(self) -> list[str]:
        """Learner-visible text fragments; the image URL is not indexed."""
        return [self.altText]


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

    # Optional - Call-to-action Link
    ctaLink: str = ""

    # Secondary content that's presented in the card.
    secondaryContent: Optional[
        HoverListData | ImageData | RichListData | ContentHighlightData
    ]

    def searchable_text(self) -> list[str]:
        """
        Learner-visible text fragments for search indexing.

        The editor-only ``name``, the ``ctaLink`` URL and the ``id`` are
        deliberately excluded — only text a learner can read is returned.
        """
        parts = [self.title, self.subtitle, self.description, self.ctaLabel]
        if self.secondaryContent:
            parts.extend(self.secondaryContent.searchable_text())
        return [part for part in parts if part]
