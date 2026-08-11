"""
Types for the Card Carousel XBlock.

Developer Note [IMPORTATNT]
---------------------------
These need to be in sync with the frontend types. Update the corresponding
types in the `frontend/src/card/card-crousel/types.ts` file, when making changes here.
"""

from pydantic import BaseModel
from exemplar_common.card_types import CardData, Orientation


class CarouselCardData(CardData):
    """
    Card data for carousel cards, including each card's layout orientation.
    """

    orientation: Orientation


class InitData(BaseModel):
    """
    Model that defines the complete data that's passed to the frontend.
    """

    # List of cards in the carousel
    cards: list[CarouselCardData]

    # Title shown on top of the carousel
    displayName: str

    # Flag to disable the pagination numbers on the cards
    disableNumbering: bool = False

    # Background color for the block
    backgroundColor: str = "#FFFFFF"
