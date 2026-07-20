"""
Types for the Card Grid XBlock.

Developer Note [IMPORTATNT]
---------------------------
These need to be in sync with the frontend types. Update the corresponding
types in the `frontend/src/card/card-grid/types.ts` file, when making changes here.
"""

from typing import Annotated
from pydantic import AfterValidator, BaseModel

from exemplar_common.card_types import CardData, Orientation
from exemplar_common.utils import sanitise_text_layout_html


class InitData(BaseModel):
    """
    Model defining the XBlock's data.
    """

    # List of the cards in the grid
    cards: list[CardData]

    # Title displayed on top of the cards
    displayName: str

    # Description above the cards. Stored as a HTML string.
    description: Annotated[str, AfterValidator(sanitise_text_layout_html)]

    # Alignment of the content in the cards.
    orientation: Orientation

    # Background color of the block
    backgroundColor: str = "#FFFFFF"

    # Description below the cards. Stored as a HTML string.
    footerDescription: Annotated[str, AfterValidator(sanitise_text_layout_html)]
