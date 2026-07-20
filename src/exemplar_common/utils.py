import nh3


def sanitise_text_layout_html(value: str) -> str:
    # Specific rules for the body of the text layout.
    # The html here should be restricted to only a small number of tags to preserve neat typography,
    # and of course to avoid scripting or other unwanted things.
    # docs for nh3: https://nh3.readthedocs.io/en/latest/#nh3.clean
    cleaner = nh3.Cleaner(
        tags={"h1", "h2", "h3", "h4", "h5", "p", "strong", "em", "span"},
        attributes={"*": {"style"}},
        filter_style_properties={"color"},
    )
    return cleaner.clean(value)
