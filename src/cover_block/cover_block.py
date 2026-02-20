"""
Main Cover Block code module. Provides the XBlock for import by the studio.
"""

from django.conf import settings
from django.template import Template, Context
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import String, Scope
from xblock.utils.resources import ResourceLoader
from xblock.utils.studio_editable import StudioEditableXBlockMixin

from cover_block.types import WorkbenchScenario

resource_loader = ResourceLoader(__name__)


def default_media_url() -> str:
    """
    Get the default media URL if set in the Django settings. Otherwise, use
    picsum photo.
    """
    return getattr(
        settings,
        "COVERBLOCK_DEFAULT_MEDIA_URL",
        "https://picsum.photos/2000/2000",
    )


class CoverBlock(StudioEditableXBlockMixin, XBlock):
    """
    Provides an aesthetically pleasing cover block for the top of a section.
    """

    display_name = String(
        display_name="Display Name",
        default="Cover",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    top_header = String(
        display_name="Top header",
        default="Section N",
        scope=Scope.content,
        help="Top header, for annotating the section number.",
    )
    main_header = String(
        display_name="Main header",
        default="My Course Section",
        scope=Scope.content,
        help="Main header for the section name.",
    )
    subheader = String(
        display_name="Subheader",
        default="A section about sectional things.",
        scope=Scope.content,
        help="Sub-header, shown under the section name.",
    )
    description = String(
        display_name="Description",
        default="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        "Etiam elementum massa a ligula aliquam suscipit. Maecenas bibendum "
        "ultrices fermentum. Nam justo orci, dapibus vitae ex commodo, "
        "efficitur commodo diam.",
        scope=Scope.content,
        help="A descriptive paragraph for this section's content.",
    )
    media_url = String(
        display_name="Cover image URL",
        default=default_media_url,
        scope=Scope.content,
        help="Cover image URL for the block.",
    )
    media_alt_text = String(
        display_name="Cover image alt text",
        default="",
        scope=Scope.content,
        help=(
            "Alt text for the cover image. Include if the image is not merely "
            "decorative to meet accessibility standards."
        ),
    )
    editable_fields: tuple[str, ...] = (  # type: ignore
        "display_name",
        "top_header",
        "main_header",
        "subheader",
        "description",
        "media_url",
        "media_alt_text",
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
        The primary view of the CoverBlock, shown to students
        when viewing courses.
        """
        html = resource_loader.load_unicode("static/html/cover_block.html")
        frag = Fragment(Template(html).render(Context({"self": self})))
        if self.dev_mode:
            frag.add_css(resource_loader.load_unicode("static/css/workbench.css"))
        frag.add_css(resource_loader.load_unicode("static/css/cover_block.css"))
        frag.add_javascript(
            resource_loader.load_unicode("static/js/src/cover_block.js")
        )
        frag.initialize_js("CoverBlock")
        return frag

    # TO-DO: change this to create the scenarios you'd like to see in the
    # workbench while developing your XBlock.
    @staticmethod
    def workbench_scenarios() -> list[WorkbenchScenario]:
        """A canned scenario for display in the workbench."""
        return [
            (
                "CoverBlock with example data",
                # This scenario matches the design.
                """
                <cover
                    top_header="Section 3"
                    main_header="Neural Function"
                    subheader="How neurons communicate, and the early signs when
                               that communication starts to fail."
                    description="Every thought, movement, and sensation depends on
                                 precise neural signaling. In this Section, you’ll
                                 learn the core mechanisms of neural communication
                                 and the early dysfunction patterns that lead to
                                 clinical symptoms."
                    media_url="https://picsum.photos/2200/2200"
                    media_alt_text="Decorative image"
                />
                """,
            ),
            (
                "CoverBlock with default data",
                "<cover />",
            ),
        ]
