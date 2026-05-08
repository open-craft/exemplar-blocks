import json
from typing import Literal

import pytest
from webob import Request
from xblock.exceptions import JsonHandlerError
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from two_column_block import TwoColumnBlock


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


def make_block(**fields: str) -> TwoColumnBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return TwoColumnBlock(
        ToyRuntime(),
        scope_ids=scope_ids,
        field_data=DictFieldData(data=fields),
    )


def get_student_content(block: TwoColumnBlock) -> str:
    """Get the contents of a student render for a block."""
    frag = block.student_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def get_studio_content(block: TwoColumnBlock) -> str:
    """Get the contents of a studio render for a block."""
    frag = block.studio_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def test_block_html():
    """Test that the block with defaults render as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_student_content(block)
    assert "two-column-block" in content


def test_block_html_studio():
    """Test that the block with defaults render as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_studio_content(block)
    assert "two-column-block" in content


def test_block_html_studio_broken_data():
    """Test that the block raises an error if broken data is provided."""
    block = make_block(display_name="hello", column_data={"invalid": "column data"})
    with pytest.raises(JsonHandlerError):
        get_studio_content(block)


def test_block_update_data():
    """Test that we can update data via the studio_save handler"""
    block = make_block(
        display_name="test",
        column_data={
            "left": {
                "kind": "text",
                "content": "<h1>Test</h1>",
                "verticalAlignment": "center",
            },
            "right": {
                "kind": "text",
                "content": "<h1>Test 2</h1>",
                "verticalAlignment": "start",
            },
            "ratio": "4:8",
            "order": "leftAboveRight",
        },
    )

    assert block.column_data["ratio"] == "4:8"
    # check the default is set
    assert block.background_color == "#FFFFFF"

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "displayName": "test",
                "columns": {
                    "left": {
                        "kind": "text",
                        "content": "<h1>Test</h1>",
                        "verticalAlignment": "end",
                    },
                    "right": {
                        "kind": "text",
                        "content": "<h1>Test 2</h1>",
                        "verticalAlignment": "start",
                    },
                    "ratio": "7:5",
                    "order": "leftAboveRight",
                },
                "backgroundColor": "#AABBCC",
            },
        ),
    )

    assert response.status == "200 OK"
    assert b"success" in response.body

    assert block.column_data["ratio"] == "7:5"
    assert block.column_data["left"]["verticalAlignment"] == "end"
    assert block.background_color == "#AABBCC"


def test_block_update_data_reject_invalid():
    """Test that updating invalid data via the studio_save handler fails and does not update data."""
    block = make_block(
        display_name="test",
        column_data={
            "left": {
                "kind": "text",
                "content": "<h1>Test</h1>",
                "verticalAlignment": "center",
            },
            "right": {
                "kind": "text",
                "content": "<h1>Test 2</h1>",
                "verticalAlignment": "start",
            },
            "ratio": "4:8",
            "order": "leftAboveRight",
        },
    )

    assert block.column_data["order"] == "leftAboveRight"

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "displayName": "test",
                "columns": {
                    "left": {
                        "kind": "text",
                        "content": "<h1>Test</h1>",
                        "verticalAlignment": "end",
                    },
                    "right": {
                        "kind": "text",
                        "content": "<h1>Test 2</h1>",
                        "verticalAlignment": "start",
                    },
                    "ratio": "7:5",
                    "order": "WRONGORDER",
                },
                "backgroundColor": "#AABBCC",
            },
        ),
    )

    assert response.status == "400 Bad Request"
    assert b"WRONGORDER" in response.body

    # assert the changes haven't been persisted
    assert block.column_data["order"] == "leftAboveRight"
    assert block.column_data["ratio"] == "4:8"


def test_workbench_scenarios():
    """Basic test to verify workbench scenario loading doesn't raise an error."""
    scenarios = TwoColumnBlock.workbench_scenarios()
    assert isinstance(scenarios, list)
    assert len(scenarios) > 0
