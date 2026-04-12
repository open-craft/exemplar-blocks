from django.test import override_settings
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from cover_block import CoverBlock


def make_block(**fields: str) -> CoverBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return CoverBlock(
        ToyRuntime(), scope_ids=scope_ids, field_data=DictFieldData(data=fields)
    )


def get_student_content(block: CoverBlock) -> str:
    """Get the contents of a student render for a block."""
    frag = block.student_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def test_contents_output():
    """
    Test that the render cycle works.
    """
    block = make_block()
    content = get_student_content(block)
    assert content


@override_settings(COVERBLOCK_DEFAULT_MEDIA_URL="https://openedx.org/logo.png")
def test_override_default_image():
    """
    Test that the Django setting to override images works.
    """
    block = make_block()
    assert "openedx.org/logo.png" in block.field_data()["media_url"]
