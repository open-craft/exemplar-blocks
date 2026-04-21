import json

from django.test import override_settings
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime
from webob import Request

from cover_block import CoverBlock


def make_block(**fields: str) -> CoverBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return CoverBlock(
        ToyRuntime(), scope_ids=scope_ids, field_data=DictFieldData(data=fields)
    )


def make_post_request(
    data,
) -> Request:
    """Make a webob JSON Request"""
    request = Request.blank("/")
    request.method = "POST"
    data = json.dumps(data).encode("utf-8") if data is not None else b""
    request.body = data
    return request


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


def test_save_block_invalid():
    """
    Test that we reject invalid updates.
    """
    block = make_block()
    result = block.handle(
        "studio_save",
        make_post_request(
            {
                "beep": "boop",
            }
        ),
    )
    assert result.status_code == 400
    assert "error" in json.loads(result.body)


def test_save_block_valid():
    """
    Test that we can update the block's fields.
    """
    block = make_block()
    revised = block.field_data()
    revised["display_name"] = "Beep"
    result = block.handle("studio_save", make_post_request(revised))
    assert result.status_code == 200
    assert block.display_name == "Beep"


@override_settings(COVERBLOCK_DEFAULT_MEDIA_URL="https://openedx.org/logo.png")
def test_override_default_image():
    """
    Test that the Django setting to override images works.
    """
    block = make_block()
    assert "openedx.org/logo.png" in block.field_data()["media_url"]
