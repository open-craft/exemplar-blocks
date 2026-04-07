"""
Main Two Column Block code module. Provides the XBlock for import by the studio.
"""

from django.template import Template, Context
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import String, Scope
from xblock.utils.resources import ResourceLoader
from xblock.utils.studio_editable import StudioEditableXBlockMixin

from .types import WorkbenchScenario

resource_loader = ResourceLoader(__name__)


class TwoColumnBlock(StudioEditableXBlockMixin, XBlock):
    """
    Provides an aesthetically pleasing two column block for displaying content.
    """

    display_name = String(
        display_name="Display Name",
        default="Two Column HTML",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    editable_fields: tuple[str, ...] = (  # type: ignore
        "display_name",
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
        frag = Fragment(Template(html).render(Context({"self": self})))
        if self.dev_mode:
            frag.add_css(resource_loader.load_unicode("static/css/workbench.css"))
        frag.add_css(resource_loader.load_unicode("static/css/two_column_block.css"))
        frag.add_javascript(
            resource_loader.load_unicode("static/js/src/two_column_block.js")
        )
        frag.initialize_js("TwoColumnBlock")
        return frag

    # TODO: change this to create the scenarios you'd like to see in the
    # workbench while developing your XBlock.
    @staticmethod
    def workbench_scenarios() -> list[WorkbenchScenario]:
        """A canned scenario for display in the workbench."""
        return [
            (
                "TwoColumnBlock with example data",
                # This scenario matches the design.
                """
                <two_column
                />
                """,
            ),
            (
                "TwoColumnBlock with default data",
                "<two_column />",
            ),
        ]
