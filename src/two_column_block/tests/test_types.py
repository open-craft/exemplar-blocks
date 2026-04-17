import re

import pytest
from pydantic import ValidationError

from two_column_block.types import Data


def test_data_validation():
    """Basic test for data validation for the root pydantic model."""
    input_data = {
        "displayName": "test",
        "columns": {
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
    }

    # If this succeeds, then validation succeeded.
    validated_data = Data(**input_data)

    # test the round trip from dictionary -> model -> dictionary
    assert input_data == validated_data.model_dump()


def test_data_validation_fail():
    """Basic test for data validation for the root pydantic model."""
    with pytest.raises(
        ValidationError,
        match=re.compile(
            r"^1 validation error for Data.*Extra inputs are not permitted .*'baz'.*$",
            re.DOTALL,
        ),
    ):
        Data(
            foobar="baz",
            displayName="test",
            columns={
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


def test_data_validation_fail_enum_value():
    """Basic test for data validation for the root pydantic model."""
    with pytest.raises(
        ValidationError,
        match=re.compile(
            r"^1 validation error for Data.*verticalAlignment.*Input should be.*'left'.*$",
            re.DOTALL,
        ),
    ):
        Data(
            displayName="test",
            columns={
                "left": {
                    "kind": "text",
                    "content": "<h1>Test</h1>",
                    "verticalAlignment": "left",
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


def test_data_validation_and_html_sanitation():
    """Test that input html is sanitised when it goes through the data validation."""
    input_data = {
        "displayName": "test",
        "columns": {
            "left": {
                "kind": "text",
                "content": "<h1>Test</h1><script>evil();</script>",
                "verticalAlignment": "center",
            },
            "right": {
                "kind": "text",
                "content": '<h1 onclick="gotcha();" style="font-size:1px;color:green;">Test 2</h1>',
                "verticalAlignment": "start",
            },
            "ratio": "4:8",
            "order": "leftAboveRight",
        },
    }

    # If this succeeds, then validation succeeded.
    validated_data = Data(**input_data)

    assert validated_data.columns.left.content == "<h1>Test</h1>"
    assert validated_data.columns.right.content == '<h1 style="color:green">Test 2</h1>'

    # Test the round trip from dictionary -> model -> dictionary.
    # This must sanitise the html too
    assert validated_data.model_dump() == {
        "displayName": "test",
        "columns": {
            "left": {
                "kind": "text",
                "content": "<h1>Test</h1>",
                "verticalAlignment": "center",
            },
            "right": {
                "kind": "text",
                "content": '<h1 style="color:green">Test 2</h1>',
                "verticalAlignment": "start",
            },
            "ratio": "4:8",
            "order": "leftAboveRight",
        },
    }
