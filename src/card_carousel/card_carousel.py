"""
Main module of the "Card Carousel" XBlock.
"""

import json
from html import escape
from importlib.resources import files

from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Scope, String, List, Boolean


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

    display_name = String(default="Card Carousel")
    orientation = String(
        display_name="Orientation of the Card Content",
        help="Horizontal for side-by-side content, Vertical for top and bottom content.",
        default="HORIZONTAL",
        values=[
            {"display_name": "Horizontal", "value": "HORIZONTAL"},
            {"display_name": "Vertical", "value": "VERTICAL"},
        ],
    )
    cards = List(help="List of Cards", default=[], scope=Scope.content)
    disable_numbering = Boolean(
        help="Disable position labels (eg., 1/3) on the cards",
        default=False,
        scope=Scope.content,
    )

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        return files(__package__).joinpath(path).read_text(encoding="utf-8")

    def student_view(self, context=None):
        """
        The primary view of the CardCarouselXBlock, shown to students
        when viewing courses.
        """
        html = self.resource_string("static/html/card_carousel.html")
        frag = Fragment(html.format(self=self))
        frag.add_css(self.resource_string("public/frontend.css"))
        frag.add_resource_url(
            "https://fonts.googleapis.com/icon?family=Material+Icons",
            "text/css",
            "head",
        )
        frag.add_javascript(self.resource_string("static/student.js"))
        frag.initialize_js(
            "CardCarouselXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/cardCarouselStudent.js"
                ),
                "orientation": self.orientation,
                "cards": self.cards,
                "displayName": self.display_name,
                "disableNumbering": self.disable_numbering,
            },
        )
        return frag

    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        rich_list_card = {
            "cardType": "RICH_LIST",
            "title": "Build Employability Skills",
            "description": escape(
                "When assessing a patient's condition, providers must identify and apply their knowledge based on assessment findings. To perform their role, providers must develop specific skills. This section helps you begin building the skills that employers seek when hiring or promoting healthcare professionals."
            ),
            "secondaryContent": {
                "items": [
                    {
                        "icon": "local_library",
                        "title": "Acute care",
                        "description": escape(
                            "Apply knowledge of patient's pathophysiology when analyzing patient data and assessments."
                        ),
                    },
                    {
                        "icon": "timer",
                        "title": "Early intervention",
                        "description": "Identify risks and potential or existing health problems and acts according to scope of licensure to prevent complications.",
                    },
                    {
                        "icon": "favorite_border",
                        "title": "Physiology",
                        "description": "Identify normal physiological functions of living organisms and their parts.",
                    },
                ]
            },
        }
        content_highlight_card = {
            "cardType": "CONTENT_HIGHLIGHT",
            "title": "Develop Competence",
            "description": "In this course, you can demonstrate these skills by passing a final assessment that measures whether you have mastered the following competency.",
            "secondaryContent": {
                "title": "Cardiovascular and Lymphatic Systems",
                "subtitle": "Competency 738.11.4",
                "description": "The learner describes pathogenesis, manifestations, complications, and variations of the cardiovascular and lymphatic systems.",
            },
        }
        hover_list_card = {
            "cardType": "HOVER_LIST",
            "title": "Prepare for the Assessment",
            "subtitle": "There are six evidence statements for this competency, hover over each to turn them into questions.",
            "secondaryContent": {
                "items": [
                    {
                        "description": "The learner identifies characteristics of given blood vessel disorders (i.e., aneurysm, thrombus, and embolus).",
                        "hoverContent": "What if this turns out to be really long text? The learner identifies characteristics of given blood vessel disorders (i.e., aneurysm, thrombus, and embolus). The learner identifies characteristics of given blood vessel disorders (i.e., aneurysm, thrombus, and embolus). The learner identifies characteristics of given blood vessel disorders (i.e., aneurysm, thrombus, and embolus).",
                        "icon": "",
                    },
                    {
                        "description": "The learner identifies the differences among atherosclerosis, angina pectoris, myocardial infarction, and heart dysrhythmias.",
                        "hoverContent": "",
                        "icon": "",
                    },
                    {
                        "description": "The learner identifies differences between congestive heart failure, valvular heart diseases, endocarditis, and pericarditis.",
                        "hoverContent": "",
                        "icon": "",
                    },
                    {
                        "description": "The learner identifies differences between benign and malignant hypertension.",
                        "hoverContent": "Can you identify the differences between benign and malignant hypertension?",
                        "icon": "psychology_alt",
                    },
                    {
                        "description": "Given a description of anemia, the learner identifies the type described (i.e., folic acid anemia, pernicious anemia, iron-deficiency anemia, and aplastic anemia).",
                        "hoverContent": "",
                        "icon": "",
                    },
                    {
                        "description": "The learner identifies differences between diseases that are infectious and diseases that are communicable.",
                        "hoverContent": "",
                        "icon": "",
                    },
                ]
            },
        }
        image_card = {
            "cardType": "IMAGE",
            "title": "Up Next",
            "subtitle": "4.1 Cardiovascular Systems Pathophysiology",
            "description": "Examines how normal cardiac and vascular functions are disrupted by disease, highlighting key mechanisms that affect blood flow, oxygen delivery, and systemic regulation.",
            "ctaLabel": "Start 4.1",
            "ctaLink": "/",
            "secondaryContent": {
                "location": "https://picsum.photos/512/512/",
                "altText": "Random Image from picsum.photos",
            },
        }
        section_card_1 = {
            "cardType": "IMAGE",
            "title": "4.1",
            "subtitle": "Cardiovascular System Pathophysiology",
            "description": "Examines how normal cardiac and vascular functions are disrupted by disease, highlighting key mechanisms that affect blood flow, oxygen delivery, and systemic regulation.",
            "secondaryContent": {
                "location": "https://picsum.photos/500/500/",
                "altText": "Random Image from picsum.photos",
            },
        }
        section_card_2 = {
            "cardType": "IMAGE",
            "title": "4.2",
            "subtitle": "Lymphatic System Pathophysiology",
            "description": "Explores how the lymphatic network supports fluid balance and immune defense, and how dysfunction can lead to edema, impaired immunity, and disease.",
            "secondaryContent": {
                "location": "https://picsum.photos/512/512/",
                "altText": "Random Image from picsum.photos",
            },
        }
        demo_cards = json.dumps(
            [rich_list_card, content_highlight_card, hover_list_card, image_card]
        )
        vertical_cards = json.dumps([section_card_1, section_card_2])

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
