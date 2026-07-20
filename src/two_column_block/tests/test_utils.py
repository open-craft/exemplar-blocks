from two_column_block.utils import generate_attrs


def test_generate_attrs():
    """Basic test for the xml attrs generation function."""
    assert (
        generate_attrs({"name": "test>", "data": {"nested": "value's"}})
        == '''name="test&gt;" data="{&quot;nested&quot;: &quot;value's&quot;}"'''
    )
