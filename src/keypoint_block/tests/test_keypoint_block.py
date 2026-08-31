from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from keypoint_block import KeypointXBlock


def make_block(**fields) -> KeypointXBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return KeypointXBlock(
        ToyRuntime(),
        scope_ids=scope_ids,
        field_data=DictFieldData(data=fields),
    )


def test_index_dictionary():
    """Header, keypoints, summary and button text are indexed as plain text."""
    block = make_block(
        display_name="Key Points",
        header="<b>Key Concepts</b>",
        keypoints=[
            {
                "keypoint": "Fluid balance",
                "description": "The <i>regulation</i> of fluids.",
            },
            {
                "keypoint": "Neural signaling",
                "description": "How neurons signal.",
            },
        ],
        summary="A summary of concepts.",
        button_text="Glossary",
        button_link="https://example.com/glossary",
    )

    result = block.index_dictionary()

    assert result["content_type"] == "Key Points"
    assert result["content"]["display_name"] == "Key Points"
    content = result["content"]["keypoint_block_content"]
    assert "Key Concepts" in content
    assert "Fluid balance" in content
    assert "The regulation of fluids" in content
    assert "Neural signaling" in content
    assert "How neurons signal" in content
    assert "A summary of concepts" in content
    assert "Glossary" in content
    # The button link is not learner-visible text.
    assert "https://example.com/glossary" not in content


def test_index_dictionary_defaults():
    """A block with no data still indexes without error."""
    block = make_block()

    result = block.index_dictionary()

    assert result["content_type"] == "Key Points"
    assert result["content"]["display_name"] == "Key Points"
