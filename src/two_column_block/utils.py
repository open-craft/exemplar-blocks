import json
from typing import Any
from xml.sax.saxutils import quoteattr


def generate_attrs(attrs: dict[str, Any]) -> str:
    """Generate xml name=value attributes given a dictionary of name:values."""
    return " ".join(
        f"{name}={quoteattr(value if isinstance(value, str) else json.dumps(value))}"
        for (name, value) in attrs.items()
    )
