from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from two_column_block import TwoColumnBlock


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


def test_block_html():
    """
    Test that the block with defaults render as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_student_content(block)
    assert "two-column-block" in content
