import json
from typing import Any
from xml.sax.saxutils import quoteattr

import nh3


def sanitise_simple_html(value: str) -> str:
    """
    Sanitise html for text content where we want to allow some simple styling (eg. colours, headings, bold/italics),
    but nothing that would mess up the designs or layouts.
    docs for nh3: https://nh3.readthedocs.io/en/latest/#nh3.clean
    """
    cleaner = nh3.Cleaner(
        tags={"h1", "h2", "h3", "h4", "h5", "p", "strong", "em", "span"},
        attributes={"*": {"style"}},
        filter_style_properties={"color"},
    )
    return cleaner.clean(value)


def generate_attrs(attrs: dict[str, Any]) -> str:
    """Generate xml name=value attributes given a dictionary of name:values."""
    return " ".join(
        f"{name}={quoteattr(value if isinstance(value, str) else json.dumps(value))}"
        for (name, value) in attrs.items()
    )
