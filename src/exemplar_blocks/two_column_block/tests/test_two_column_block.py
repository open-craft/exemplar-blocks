from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from exemplar_blocks.two_column_block import TwoColumnBlock


def make_block(**fields: str) -> TwoColumnBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return TwoColumnBlock(
        ToyRuntime(), scope_ids=scope_ids, field_data=DictFieldData(data=fields)
    )


def get_student_content(block: TwoColumnBlock) -> str:
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
    # TODO: update placeholders when we have real content
    assert "Column One" in content
    assert "Column Two" in content


def test_overrides():
    """
    Test that the values override properly.
    """
    block = make_block(
        # TODO: content fields
    )
    content = get_student_content(block)
    # TODO: update placeholders when we have real content
    assert "Column One" in content
    assert "Column Two" in content
