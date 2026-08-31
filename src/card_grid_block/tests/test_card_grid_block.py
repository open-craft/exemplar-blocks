from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from card_grid_block import CardGridXBlock


def make_block(**fields) -> CardGridXBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return CardGridXBlock(
        ToyRuntime(),
        scope_ids=scope_ids,
        field_data=DictFieldData(data=fields),
    )


def test_index_dictionary_defaults():
    """The default block is indexed with its content type and searchable text."""
    block = make_block()

    result = block.index_dictionary()

    assert result["content_type"] == "Card Grid"
    assert result["content"]["display_name"] == "Card Grid"
    assert result["content"]["card_grid_content"]


def test_index_dictionary_includes_searchable_text():
    """Card text plus the description and footer are indexed as plain text."""
    block = make_block(
        display_name="My Grid",
        description="<p>An <strong>intro</strong> to the grid.</p>",
        footer_description="<em>Footer</em> text",
        cards=[
            {
                "id": 1,
                "name": "editor name",
                "title": "Card <b>Title</b>",
                "subtitle": "Subtitle",
                "description": "Description",
                "ctaLabel": "Read more",
                "ctaLink": "https://example.com",
                "secondaryContent": {
                    "kind": "IMAGE",
                    "location": "https://example.com/image.png",
                    "altText": "Alt text",
                },
            }
        ],
    )

    content = block.index_dictionary()["content"]["card_grid_content"]

    assert "Card Title" in content
    assert "Subtitle" in content
    assert "Description" in content
    assert "Read more" in content
    assert "Alt text" in content
    assert "intro to the grid" in content
    assert "Footer text" in content
    # The editor-only name, image location and links are not indexed.
    assert "editor name" not in content
    assert "https://example.com" not in content


def test_index_dictionary_skips_malformed_cards():
    """Malformed cards are ignored rather than breaking indexing."""
    block = make_block(
        cards=[
            "not-a-dict",
            {
                "id": 2,
                "name": "name",
                "title": "Good Card",
                "secondaryContent": None,
            },
        ]
    )

    content = block.index_dictionary()["content"]["card_grid_content"]

    assert "Good Card" in content
