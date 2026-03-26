from django.test import override_settings
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from exemplar_blocks.cover_block import CoverBlock


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


def test_defaults_render():
    """
    Test that the defaults render as expected.
    """
    block = make_block()
    content = get_student_content(block)
    assert "Section N" in content
    assert "My Course Section" in content
    assert "Lorem ipsum" in content
    assert "picsum.photos" in content


def test_overrides():
    """
    Test that the values override properly.
    """
    block = make_block(
        top_header="Section 4",
        main_header="Beep boop",
        subheader="Foo bar",
        description="Bla bla",
        media_url="https://example.com/stuff.png",
        media_alt_text="Indescribable",
    )
    content = get_student_content(block)
    assert "Section 4" in content
    assert "Beep boop" in content
    assert "Foo bar" in content
    assert "stuff.png" in content
    assert "Indescribable" in content


@override_settings(COVERBLOCK_DEFAULT_MEDIA_URL="https://openedx.org/logo.png")
def test_override_default_image():
    """
    Test that the Django setting to override images works.
    """
    block = make_block()
    content = get_student_content(block)
    assert "openedx.org/logo.png" in content
