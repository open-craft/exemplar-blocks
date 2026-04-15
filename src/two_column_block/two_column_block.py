"""
Main Two Column Block code module. Provides the XBlock for import by the studio.
"""

import json
import logging
from xml.sax.saxutils import quoteattr
from typing import Any

from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import String, Scope, Dict
from xblock.utils.resources import ResourceLoader
from xblock.utils.studio_editable import StudioEditableXBlockMixin

from .types import WorkbenchScenario, Data, ColumnData

log = logging.getLogger(__name__)

resource_loader = ResourceLoader(__name__)

DEFAULT_COLUMN_DATA = ColumnData(
    **{
        "left": {
            "kind": "text",
            "content": '<h1>Paths through nature</h1>\n<p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span style="color: #169179;">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id <em>est laborum</em>.</p>',
            "verticalAlignment": "center",
        },
        "right": {
            "kind": "imageGrid",
            "featuredImage": {
                "url": "https://picsum.photos/id/993/800/400",
                "decorative": True,
                "alt": "",
                "onClickUrl": "",
            },
            "bottomImage": {
                "url": "https://picsum.photos/id/767/400",
                "decorative": False,
                "alt": "A road extending into the distance, lined by tall trees.",
                "onClickUrl": "https://example.com/",
            },
            "text": {
                "content": "Which path will you take?",
                "alignment": "center",
                "fontSize": "large",
                "backgroundColor": "#FFFAF0",
                "color": "#045e2e",
            },
            "bottomRowOrder": "textImage",
        },
        "ratio": "6:6",
        "order": "rightAboveLeft",
    }
)


class TwoColumnBlock(StudioEditableXBlockMixin, XBlock):
    """
    Provides an aesthetically pleasing two column block for displaying content.
    """

    display_name = String(
        display_name="Display name",
        default="Two-column Block",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    column_data = Dict(
        display_name="Column data",
        default=DEFAULT_COLUMN_DATA.model_dump(),
        scope=Scope.settings,
        help="",
    )
    editable_fields: tuple[str, ...] = (  # type: ignore
        "display_name",
        "column_data",
    )

    @property
    def dev_mode(self) -> bool:
        """
        Return a boolean indicating whether we're in the workbench. Needed for some
        CSS to look right when developing the block.
        """
        return "Workbench" in self.runtime.__class__.__name__

    def student_view(self, context=None):
        """
        The primary view of this block, shown to students
        when viewing courses.
        """
        html = resource_loader.load_unicode("static/html/two_column_block.html")
        frag = Fragment(html)

        if self.dev_mode:
            frag.add_css(resource_loader.load_unicode("static/css/workbench.css"))

        frag.add_css(resource_loader.load_unicode("public/frontend.css"))
        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))
        frag.initialize_js(
            "TwoColumnXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/twoColumnBlockStudent.js"
                ),
                "displayName": self.display_name,
                "columns": self.column_data,
            },
        )

        return frag

    def studio_view(self, context=None):
        """
        Studio edit view.
        """
        html = resource_loader.load_unicode("static/html/two_column_block.html")
        frag = Fragment(html)

        if self.dev_mode:
            frag.add_css(resource_loader.load_unicode("static/css/workbench.css"))

        frag.add_css(resource_loader.load_unicode("public/frontend.css"))
        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))

        try:
            validated_data = Data(
                displayName=self.display_name, columns=self.column_data
            )
        except ValidationError as e:
            log.error(
                "Error validating data for %s: %s",
                self.display_name,
                json.dumps(e.errors()),
            )
            raise JsonHandlerError(500, json.dumps(e.errors()))

        frag.initialize_js(
            "TwoColumnXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/twoColumnBlockStudio.js"
                ),
                "displayName": validated_data.displayName,
                "columns": validated_data.columns.model_dump(),
            },
        )

        return frag

    @XBlock.json_handler
    def studio_save(self, data, suffix=""):
        """Save data from the studio editor."""

        try:
            validated_data = Data(**data)
        except ValidationError as e:
            raise JsonHandlerError(400, json.dumps(e.errors()))

        self.display_name = validated_data.displayName
        self.column_data = validated_data.columns.model_dump()
        # TODO: clean/delete empty values - eg. empty lessons in a lesson list
        return {"result": "success"}

    @staticmethod
    def workbench_scenarios() -> list[WorkbenchScenario]:
        """Static scenarios for display in the workbench."""
        # To add/edit scenarios, edit the ./static/workbench_scenarios.json file
        data = json.loads(
            resource_loader.load_unicode("static/workbench_scenarios.json")
        )

        return [
            (
                block_data["scenario_name"],
                f"<two_column {generate_attrs(block_data['attributes'])} />",
            )
            for block_data in data
        ]


def generate_attrs(attrs: dict[str, Any]) -> str:
    """
    Generate xml name=value attributes given a dictionary of name:values.
    """
    return " ".join(
        f"{name}={quoteattr(value if isinstance(value, str) else json.dumps(value))}"
        for (name, value) in attrs.items()
    )
