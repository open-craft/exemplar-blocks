"""
Unfolding Scenario XBlock's main module.
"""

import logging

from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import Scope, String, Dict
from xblock.utils.resources import ResourceLoader

from unfolding_scenario.types import Data, UnfoldingScenarioFields
from exemplar_common.utils import strip_html_for_search

logger = logging.getLogger(__name__)
resource_loader = ResourceLoader(__name__)

DEFAULT_DATA = Data(
    introduction={
        "heading": "Unfolding Scenario",
        "description": (
            "Work through the scenarios one by one, making a decision at each "
            "step, to see how the situation unfolds."
        ),
        "button_text": "Start",
    },
    scenarios=[
        {
            "heading": "Scenario 1",
            "description": "The first scenario in the sequence.",
            "instruction_title": "Make a decision",
            "instruction_description": "Choose one of the options below.",
            "question": "What would you do next?",
            "answers": [
                {"value": "Do this", "feedback": "Not quite.", "is_correct": False},
                {"value": "Do that", "feedback": "That's right!", "is_correct": True},
            ],
        }
    ],
    outcome={
        "heading": "Outcome",
        "description": "You have completed all the scenarios.",
    },
)


class UnfoldingScenarioXBlock(XBlock):
    """
    Unfolding Scenario XBlock is an interactive XBlock providing a multi-step
    decision-based practice activities.
    """

    display_name = String(
        display_name="Display Name",
        default="Unfolding Scenario",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    background_color = String(
        display_name="Background Color",
        default="#FFFFFF",
        scope=Scope.settings,
        help="Background color for the block",
    )
    data = Dict(
        display_name="Data",
        default=DEFAULT_DATA.model_dump(),
        scope=Scope.content,
        help="All the content of the block: the introduction, scenarios and outcome",
    )

    def student_view(self, context=None) -> Fragment:
        """
        Student view for the Unfolding Scenario XBlock.
        """
        html = resource_loader.load_unicode("static/html/unfolding_scenario.html")
        frag = Fragment(html)
        frag.add_javascript(resource_loader.load_unicode("static/js/student.js"))
        frag.initialize_js(
            "UnfoldingScenarioXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/unfoldingScenarioStudent.js"
                ),
                "data": self.data,
                "backgroundColor": self.background_color,
            },
        )
        return frag

    def studio_view(self, context=None):
        """
        Authoring editor view for the Unfolding Scenario XBlock.
        """
        html = resource_loader.load_unicode(
            "static/html/unfolding_scenario_editor.html"
        )
        frag = Fragment(html)
        frag.add_javascript(resource_loader.load_unicode("static/js/studio.js"))
        frag.initialize_js(
            "UnfoldingScenarioEditor",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/unfoldingScenarioStudio.js"
                ),
                "data": self.data,
                "backgroundColor": self.background_color,
            },
        )
        return frag

    @XBlock.json_handler
    def studio_save(self, data: dict, suffix=""):
        """
        JSON handler that saves the studio editor data.
        """
        try:
            block_data = UnfoldingScenarioFields.model_validate(data)
        except ValidationError as e:
            logger.exception("Invalid data received from studio.")
            message = "\n".join(
                f"Field: {err['loc']}. Error: {err['msg']}" for err in e.errors()
            )
            raise JsonHandlerError(400, message)

        self.display_name = block_data.display_name
        self.background_color = block_data.background_color
        self.data = block_data.data.model_dump()

        logger.info("Successfully saved Unfolding Scenario data.")
        return {"result": "success"}

    def index_dictionary(self):
        """
        Return a dictionary prepared with block content for indexing
        learner facing content used in search.
        """
        xblock_body = super().index_dictionary()
        searchable_text = ""
        try:
            searchable_text = Data.model_validate(self.data).searchable_text()
        except (ValidationError, TypeError):
            logger.warning(
                "Skipping malformed content while indexing block %s",
                self.scope_ids.usage_id,
            )

        index_body = {
            "display_name": self.display_name,
            "unfolding_scenario_content": strip_html_for_search(searchable_text),
        }

        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body

        xblock_body["content_type"] = "Unfolding Scenario"
        return xblock_body

    @staticmethod
    def workbench_scenarios():
        """A set of workbench scenarios."""

        return [
            (
                "UnfoldingScenarioXBlock",
                """
                <unfolding_scenario
                    display_name="Unfolding Scenario Demo"
                    background_color="#CCCCCC"
                />
                """,
            ),
        ]
