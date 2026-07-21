import json
from typing import Literal

import pytest
from webob import Request
from xblock.exceptions import JsonHandlerError
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from ideas_overview_block import IdeasOverviewBlock


def make_request(
    method: Literal[
        "GET",
        "HEAD",
        "POST",
        "PUT",
        "DELETE",
        "CONNECT",
        "OPTIONS",
        "TRACE",
        "PATCH",
    ],
    data,
) -> Request:
    """Make a webob JSON Request"""
    request = Request.blank("/")
    request.method = method
    data = json.dumps(data).encode("utf-8") if data is not None else b""
    request.body = data
    return request


def make_block(**fields: str) -> IdeasOverviewBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return IdeasOverviewBlock(
        ToyRuntime(),
        scope_ids=scope_ids,
        field_data=DictFieldData(data=fields),
    )


def get_student_content(block: IdeasOverviewBlock) -> str:
    """Get the contents of a student render for a block."""
    frag = block.student_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def get_studio_content(block: IdeasOverviewBlock) -> str:
    """Get the contents of a studio render for a block."""
    frag = block.studio_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def get_author_content(block: IdeasOverviewBlock) -> str:
    """Get the contents of a author render (student view preview in studio) for a block."""
    frag = block.author_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def test_block_html():
    """Test that the block with defaults render as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_student_content(block)
    assert content == ""


def test_block_html_studio():
    """Test that the block with defaults render as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_studio_content(block)
    assert "editor-with-buttons" in content


def test_block_html_author():
    """Test that the block with defaults render as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_author_content(block)
    assert content == ""


def test_block_html_studio_broken_data():
    """Test that the block raises an error if broken data is provided."""
    block = make_block(display_name="hello", content={"invalid": "random data data"})
    with pytest.raises(JsonHandlerError):
        get_studio_content(block)


def test_block_update_data():
    """Test that we can update data via the studio_save handler"""
    block = make_block(
        display_name="test",
        content={
            "header": "<p>The original header</p>",
            "footer": "<b>The footer</b>",
            "ideas": [
                {
                    "title": "the title",
                    "points": [
                        "point 1",
                        "<i>point 2</i>",
                    ],
                }
            ],
        },
    )

    assert block.content["header"] == "<p>The original header</p>"

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "displayName": "test",
                "content": {
                    "header": "<p>The new header</p><script src='evil();' />",
                    "footer": "<b>The footer</b>",
                    "ideas": [
                        {
                            "title": "the title",
                            "points": [
                                "point 1",
                                "<em>point 2<marquee>text</marquee></em>",
                            ],
                        }
                    ],
                },
                "backgroundColor": "#AABBCC",
            },
        ),
    )

    assert response.status == "200 OK"
    assert b"success" in response.body

    # verify html is sanitised
    assert block.content["header"] == "<p>The new header</p>"
    assert block.content["ideas"][0]["title"] == "the title"
    assert block.content["ideas"][0]["points"][1] == "<em>point 2text</em>"
    assert block.background_color == "#AABBCC"


def test_block_update_data_reject_invalid():
    """Test that updating invalid data via the studio_save handler fails and does not update data."""
    block = make_block()

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "displayName": "test",
                "content": {
                    "header": "foo",
                    "footer": "bar",
                    "ideas": "a random string",
                },
                "backgroundColor": "#AABBCC",
            },
        ),
    )

    assert response.status == "400 Bad Request"
    assert b"should be a valid list" in response.body

    # assert the changes haven't been persisted
    assert block.background_color == "#FFFFFF"


def test_workbench_scenarios():
    """Basic test to verify workbench scenario loading doesn't raise an error."""
    scenarios = IdeasOverviewBlock.workbench_scenarios()
    assert isinstance(scenarios, list)
    assert len(scenarios) > 0
