"""
An XBlock for key point glossary.
"""

from importlib.resources import files

from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import List, Scope, String

from .types import WorkbenchScenario


class KeypointXBlock(XBlock):
    display_name = String(
        display_name="Display Name",
        default="Key Points",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    header = String(
        display_name="Main header",
        default="My Course Section",
        scope=Scope.content,
        help="Main header for the section name.",
    )
    # This is a list of dictionary which is of the shape:
    # [{
    #   "keypoint": "John Doe",
    #   "description": "A simple person"
    # }]
    keypoints = List(
        display_name="Key Points",
        scope=Scope.content,
        help="Key Points is a list of dictionary",
    )
    button_text = String(
        display_name="Text for the action button",
        scope=Scope.content,
        help="Text on the action button at the bottom of the page",
    )
    button_link = String(
        display_name="Button Link",
        scope=Scope.content,
        help="The link that bottom button points to.",
    )

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        return files(__package__).joinpath(path).read_text(encoding="utf-8")

    def student_view(self, context=None):
        """
        Create primary view of the KeypointXBlock, shown to students when viewing courses.
        """
        html = self.resource_string("static/html/keypoint.html")
        frag = Fragment(html)
        frag.add_javascript(self.resource_string("static/js/student.js"))
        frag.add_css(self.resource_string("public/frontend.css"))
        frag.initialize_js(
            "KeyPointXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/keypointBlockStudent.js"
                ),
                "header": self.header,
                "keypoints": self.keypoints,
                "button_text": self.button_text,
                "button_link": self.button_link,
            },
        )
        return frag

    @XBlock.json_handler
    def studio_save(self, data, suffix=""):
        """Save configuration data from the studio editor."""
        header = data.get("header", None)
        keypoints = data.get("keypoints", None)
        button_text = data.get("button_text", None)
        button_link = data.get("button_link", None)
        if header is not None:
            self.header = header
        if keypoints is not None:
            self.keypoints = keypoints
        if button_text is not None:
            self.button_text = button_text
        if button_link is not None:
            self.button_link = button_link
        return {"result": "success"}

    def studio_view(self, context=None):
        """
        The studio view for the XBlock, which loads a component to edit and generate the data.
        """

        html = self.resource_string("static/html/keypoint_edit.html")
        frag = Fragment(html)
        frag.add_javascript(self.resource_string("static/js/studio.js"))
        frag.add_css(self.resource_string("public/frontend.css"))
        frag.initialize_js(
            "KeyPointEditor",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/keypointBlockStudio.js"
                ),
                "header": self.header,
                "keypoints": self.keypoints,
                "button_text": self.button_text,
                "button_link": self.button_link,
            },
        )
        return frag

    @staticmethod
    def workbench_scenarios() -> list[WorkbenchScenario]:
        """A canned scenario for display in the workbench."""
        return [
            (
                "KeypointBlock with example data",
                """
                <keypoints
                    header="Key Concepts to Explore"
                    keypoints='[
                        {"keypoint": "Fluid balance", "description": "The regulation of fluids within the body to maintain homeostasis and support cellular function."},
                        {"keypoint": "Neural signaling", "description": "The process by which neurons transmit electrical and chemical signals across synapses."},
                        {"keypoint": "Membrane potential", "description": "The difference in electrical charge between the interior and exterior of a cell."}
                    ]'
                    button_text="Glossary"
                    button_link="https://example.com/glossary"
                />
                """,
            ),
            (
                "KeypointBlock with default data",
                "<keypoints />",
            ),
        ]
