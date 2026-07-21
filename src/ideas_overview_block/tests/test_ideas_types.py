from ideas_overview_block.types import Data


def test_data_validation():
    """Basic test for data validation for the root pydantic model."""
    input_data = {
        "displayName": "test",
        "content": {
            "header": "<em>the header</em>",
            "footer": "<strong>the footer</strong>",
            "ideas": [
                {
                    "title": "idea 1",
                    "points": ["<em>point 1</em>", "point 2"],
                },
                {
                    "title": "idea 2",
                    "points": ["<em>point 1</em>", "point 2"],
                },
            ],
        },
        "backgroundColor": "#AABBCC",
    }

    # If this succeeds, then validation succeeded.
    validated_data = Data(**input_data)

    # test the round trip from dictionary -> model -> dictionary
    assert input_data == validated_data.model_dump()
