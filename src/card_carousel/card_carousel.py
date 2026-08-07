"""
Main module of the "Card Carousel" XBlock.
"""

import logging
import json

from pathlib import Path

from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import Scope, String, List, Boolean
from xblock.utils.resources import ResourceLoader

from exemplar_common.xblock_config import get_xblock_config, XBlockView
from exemplar_common.card_types import (
    CardData,
    CardType,
    ContentHighlightData,
    Orientation,
)
from exemplar_common.utils import strip_html_for_search
from .types import InitData


logger = logging.getLogger(__name__)
resource_loader = ResourceLoader(__name__)


DEFAULT_CARD = CardData(
    id=1,
    name="Placeholder Card",
    title="Carousel Card",
    subtitle=(
        "Use the 'Edit' button to change the contents of this card and add more "
        "cards to the carousel."
    ),
    description=(
        "P.S: Cards have a 'Call to action' button that can link to any content "
        "on the course or anywhere else on the web."
    ),
    secondaryContent=ContentHighlightData(
        kind=CardType.CONTENT_HIGHLIGHT,
        title="Layouts",
        subtitle="💡",
        description="The card carousel supports multiple layouts.",
    ),
)


class CardCarouselXBlock(XBlock):
    """
    The CardCarouselXblock presents content as a list of "cards" in a carousel.

    Each card content is defined by a set of primary content attributes and a
    "secondaryContent" object. The cards support the following templates:
        1. IMAGE - Secondary content is an image covering half the card.
        2. RICH_LIST - Secondary content is a list of items with an icon, title & description.
        3. HOVER_LIST - Secondary content is a list of items that have 2 text blocks. The
                        blocks are flipped on hover or click.
        4. CONTENT_HIGHLIGHT - Secondary content is just some content with title and description.
    """

    has_author_view = True

    display_name = String(default="Card Carousel")
    orientation = String(
        display_name="Orientation of the Card Content",
        help="Horizontal for side-by-side content, Vertical for top and bottom content.",
        default=Orientation.HORIZONTAL,
        values=[
            {"display_name": "Horizontal", "value": "HORIZONTAL"},
            {"display_name": "Vertical", "value": "VERTICAL"},
        ],
    )
    cards = List(
        help="List of Cards", default=[DEFAULT_CARD.model_dump()], scope=Scope.content
    )
    disable_numbering = Boolean(
        display_name="Disable Numbering",
        help="Disable position labels (eg., 1/3) on the cards",
        default=False,
        scope=Scope.content,
    )
    background_color = String(
        display_name="Background Color",
        help="HTML hex-code to be used as the background color.",
        default="#FFFFFF",
        scope=Scope.content,
    )

    def resource_string(self, path: str | Path) -> str:
        """Handy helper for getting resources from our kit."""
        return resource_loader.load_unicode(path)

    def _render_student_view(self, is_author_view: bool = False):
        frag = Fragment()
        frag.add_resource_url(
            "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
            "text/css",
            "head",
        )
        frag.add_javascript(self.resource_string("static/student.js"))
        if is_author_view:
            frag.add_css(self.resource_string("static/css/studio.css"))
        frag.initialize_js(
            "CardCarouselXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/cardCarouselStudent.js"
                ),
                "data": {
                    "orientation": self.orientation,
                    # Data model was changed between versions 0.6 and 0.7.
                    # The parsing and dumping of card data here ensures any old data
                    # is migrated to the new format.
                    "cards": [CardData(**c).model_dump() for c in self.cards],
                    "displayName": self.display_name,
                    "disableNumbering": self.disable_numbering,
                    "backgroundColor": self.background_color,
                },
                "config": get_xblock_config(self.context_key, XBlockView.STUDENT),
            },
        )
        return frag

    def student_view(self, context=None):
        """
        The primary view of the CardCarouselXBlock, shown to students
        when viewing courses.
        """
        return self._render_student_view()

    def author_view(self, context=None):
        """
        Renders the student view in the Studio for Authors to preview the content.
        """
        return self._render_student_view(is_author_view=True)

    def studio_view(self, context=None):
        """
        Editor View for the CardCarouselXBlock, show to content authors.
        """
        html = self.resource_string("static/html/card_carousel_editor.html")
        frag = Fragment(html)
        frag.add_resource_url(
            "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
            "text/css",
            "head",
        )

        frag.add_javascript(self.resource_string("static/studio.js"))
        frag.add_css(self.resource_string("static/css/studio.css"))
        frag.initialize_js(
            "CardCarouselEditor",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/cardCarouselStudio.js"
                ),
                "data": {
                    "orientation": self.orientation,
                    # Data model was changed between versions 0.6 and 0.7.
                    # The parsing and dumping of card data here ensures any old data
                    # is migrated to the new format.
                    "cards": [CardData(**c).model_dump() for c in self.cards],
                    "displayName": self.display_name,
                    "disableNumbering": self.disable_numbering,
                    "backgroundColor": self.background_color,
                },
                "config": get_xblock_config(self.context_key, XBlockView.STUDIO),
            },
        )
        return frag

    @XBlock.json_handler
    def studio_save(self, data: dict, suffix=""):
        """
        Get the data from the Studio Editor and save it on the XBlock.
        """
        try:
            carousel = InitData.model_validate(data)
        except ValidationError as e:
            logger.exception("Invalid data received from studio.")
            message = "\n".join(
                f"Field: {err['loc']}. Error: {err['msg']}" for err in e.errors()
            )
            raise JsonHandlerError(400, message)

        self.display_name = carousel.displayName
        self.orientation = carousel.orientation
        self.cards = [c.model_dump() for c in carousel.cards]
        self.disable_numbering = carousel.disableNumbering
        self.background_color = carousel.backgroundColor
        logger.info("Successfully saved Card Carousel data.")
        return {"result": "success"}

    def index_dictionary(self):
        """
        Return dictionary prepared with block content and type for indexing.
        """
        xblock_body = super().index_dictionary()
        parts = []
        for card in self.cards or []:
            # Parsing through CardData applies the same normalisation and
            # data migration as the render paths, so the index can never
            # disagree with what learners see on the page.
            try:
                card_data = CardData(**card)
            except (ValidationError, TypeError):
                logger.warning(
                    "Skipping malformed card while indexing block %s",
                    self.scope_ids.usage_id,
                )
                continue
            # Strip each fragment separately so stray markup in one field
            # cannot affect the fields that follow it.
            parts.extend(
                text
                for text in map(strip_html_for_search, card_data.searchable_text())
                if text
            )
        index_body = {
            "display_name": self.display_name,
            "card_carousel_content": " ".join(parts),
        }
        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body
        xblock_body["content_type"] = "Card Carousel"
        return xblock_body

    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        demo_data = json.loads(resource_loader.load_unicode("static/demo.json"))
        demo_cards = json.dumps(demo_data["horizontal"])
        vertical_cards = json.dumps(demo_data["vertical"])

        return [
            (
                "CardCarouselXBlock (Horizontal Cards)",
                f"""<card_carousel display_name="CardCarousel (Horizontal)" cards='{demo_cards}' />
                """,
            ),
            (
                "CardCarouselXblock (Vertical Cards - Content Highlight only)",
                f"""<card_carousel display_name="CardCarousel (Vertical)" cards='{vertical_cards}' orientation="VERTICAL" disable_numbering="true" />
                """,
            ),
            (
                "CardCarouselXblock (Vertical - All cards)",
                f"""<card_carousel display_name="CardCarousel (Vertical)" cards='{demo_cards}' orientation="VERTICAL" />
                """,
            ),
            (
                "Multiple CardCarouselXBlock",
                f"""<vertical_demo>
                <card_carousel display_name="CardCarousel (Default)" cards='{demo_cards}' />
                <card_carousel display_name="CardCarousel (Vertical)" cards='{vertical_cards}' orientation="VERTICAL" />
                <card_carousel display_name="CardCarousel (Horizontal)" cards='{demo_cards}' orientation="HORIZONTAL" />
                </vertical_demo>
                """,
            ),
        ]
