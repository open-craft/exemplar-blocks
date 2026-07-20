from exemplar_common.utils import sanitise_text_layout_html


def test_html_sanitiser():
    """Basic test for the html sanitiser"""
    user_html = "<h1>hello</h1><script>evil();</script><p>this is safe text</p>"
    expected_safe_html = "<h1>hello</h1><p>this is safe text</p>"
    assert sanitise_text_layout_html(user_html) == expected_safe_html


def test_html_sanitiser_attributes_and_styles():
    """Test for removing unwanted attributes and styles (only color style should be allowed)"""
    user_html = '<h1 onclick="evil();" style="color:red; background-color:brown; font-size:1px;">hello</h1>'
    expected_safe_html = '<h1 style="color:red">hello</h1>'
    assert sanitise_text_layout_html(user_html) == expected_safe_html
