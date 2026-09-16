"""Legacy carousel layout must survive reads, edits and course round-trips."""

from copy import deepcopy
from io import BytesIO
import json
from unittest.mock import patch
from xml.sax.saxutils import quoteattr

import pytest
from pydantic import ValidationError
from webob import Request
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from card_carousel import CardCarouselXBlock
from card_carousel.types import CarouselCardData, InitData


def card(**overrides):
    return dict(
        id=1,
        name="Legacy card",
        title="Searchable title",
        secondaryContent=None,
        **overrides,
    )


def block(**fields):
    return CardCarouselXBlock(
        ToyRuntime(),
        scope_ids=ScopeIds("user", "card_carousel", "definition", "usage"),
        field_data=DictFieldData(fields),
    )


def save(instance, payload):
    request = Request.blank("/", method="POST", body=json.dumps(payload).encode())
    return instance.studio_save(request)


@pytest.mark.parametrize("orientation", ["HORIZONTAL", "VERTICAL"])
@pytest.mark.parametrize("view", ["student_view", "author_view", "studio_view"])
def test_legacy_views_do_not_mutate_storage(orientation, view):
    original = [card()]
    instance = block(cards=deepcopy(original), orientation=orientation)
    with patch("card_carousel.card_carousel.get_xblock_config", return_value={}):
        fragment = getattr(instance, view)()
    assert fragment.json_init_args["data"]["cards"][0]["orientation"] == orientation
    assert "orientation" not in fragment.json_init_args["data"]
    assert instance.cards == original


@pytest.mark.parametrize("orientation", ["HORIZONTAL", "VERTICAL"])
def test_implicit_default_card_inherits_legacy_orientation(orientation):
    instance = block(orientation=orientation)
    assert instance._card_view_data()["cards"][0]["orientation"] == orientation
    assert "orientation" not in instance.cards[0]


@pytest.mark.parametrize("missing", [{}, {"orientation": None}])
def test_null_or_missing_card_orientation_uses_context(missing):
    data = card(**missing)
    assert CarouselCardData.model_validate(data).orientation == "HORIZONTAL"
    assert (
        CarouselCardData.model_validate(
            data, context={"orientation": "VERTICAL"}
        ).orientation
        == "VERTICAL"
    )
    assert data == card(**missing)


def test_no_legacy_default_uses_horizontal():
    result = InitData.model_validate({"displayName": "Legacy", "cards": [card()]})
    assert result.cards[0].orientation == "HORIZONTAL"
    instance = block(cards=[card()])
    assert instance._card_view_data()["cards"][0]["orientation"] == "HORIZONTAL"


def test_init_data_accepts_but_does_not_dump_legacy_orientation():
    result = InitData.model_validate(
        {"displayName": "Legacy", "orientation": "VERTICAL", "cards": [card()]}
    )
    assert result.orientation == "VERTICAL"
    assert result.cards[0].orientation == "VERTICAL"
    assert "orientation" not in result.model_dump()


def test_payload_precedence_and_repeatable_normalization():
    payload = {
        "displayName": "Legacy",
        "orientation": "VERTICAL",
        "cards": [card(), card(orientation="HORIZONTAL"), card(orientation=None)],
    }
    original = deepcopy(payload)
    result = InitData.model_validate(payload, context={"orientation": "HORIZONTAL"})
    assert [c.orientation for c in result.cards] == [
        "VERTICAL",
        "HORIZONTAL",
        "VERTICAL",
    ]
    dumped = result.model_dump()
    assert "orientation" not in dumped
    assert [c["orientation"] for c in dumped["cards"]] == [
        "VERTICAL",
        "HORIZONTAL",
        "VERTICAL",
    ]
    assert InitData.model_validate(dumped).model_dump() == dumped
    assert payload == original


@pytest.mark.parametrize("payload_orientation", [{}, {"orientation": None}])
def test_missing_payload_default_uses_stored_orientation(payload_orientation):
    instance = block(orientation="VERTICAL", cards=[card()])
    response = save(
        instance, {"displayName": "Updated", "cards": [card()], **payload_orientation}
    )
    assert response.status_int == 200
    assert instance.cards[0]["orientation"] == "VERTICAL"
    assert instance.orientation == "HORIZONTAL"
    assert "orientation" not in instance._field_data._data


def test_old_save_removes_legacy_default_and_persists_card_overrides():
    instance = block(orientation="HORIZONTAL")
    response = save(
        instance,
        {
            "displayName": "Updated",
            "orientation": "VERTICAL",
            "cards": [card(), card(orientation="HORIZONTAL")],
        },
    )
    assert response.status_int == 200
    assert instance.orientation == "HORIZONTAL"
    assert "orientation" not in instance._field_data._data
    assert [c["orientation"] for c in instance.cards] == ["VERTICAL", "HORIZONTAL"]
    assert "orientation" not in instance._card_view_data()
    assert [c["orientation"] for c in instance._card_view_data()["cards"]] == [
        "VERTICAL",
        "HORIZONTAL",
    ]


@pytest.mark.parametrize(
    "payload",
    [
        {"orientation": "DIAGONAL", "cards": [card()]},
        {"cards": [card(orientation="")]},
        {"cards": [card(orientation="DIAGONAL")]},
        {"cards": [None]},
    ],
)
def test_invalid_save_does_not_write_fields(payload):
    instance = block(display_name="Original", orientation="VERTICAL", cards=[card()])
    original = deepcopy(instance.cards)
    response = save(instance, {"displayName": "Changed", **payload})
    assert response.status_int == 400
    assert instance.display_name == "Original"
    assert instance.orientation == "VERTICAL"
    assert instance.cards == original


def test_invalid_stored_orientation_is_not_silently_defaulted():
    with pytest.raises(ValidationError):
        block(orientation="DIAGONAL", cards=[card()])._card_view_data()


def test_index_skips_only_malformed_cards():
    cards = [card(), None, card(orientation="DIAGONAL")]
    instance = block(cards=deepcopy(cards), orientation="VERTICAL")
    result = instance.index_dictionary()
    assert result["content"]["card_carousel_content"] == "Searchable title"
    assert instance.cards == cards


@pytest.mark.parametrize(
    "cards", [None, [card()], [card(orientation="HORIZONTAL"), card()]]
)
def test_legacy_xml_round_trip(cards):
    runtime = ToyRuntime()
    attribute = f"cards={quoteattr(json.dumps(cards))}" if cards is not None else ""
    usage = runtime.parse_xml_string(
        f'<card_carousel orientation="VERTICAL" {attribute} />'
    )
    instance = runtime.get_block(usage)
    expected = ["HORIZONTAL", "VERTICAL"] if cards and len(cards) == 2 else ["VERTICAL"]
    assert [c["orientation"] for c in instance._card_view_data()["cards"]] == expected
    # Exercise both untouched legacy export and export after migration on save.
    for migrate in (False, True):
        if migrate:
            assert save(instance, instance._card_view_data()).status_int == 200
        output = BytesIO()
        runtime.export_to_xml(instance, output)
        reloaded = runtime.get_block(runtime.parse_xml_string(output.getvalue()))
        assert reloaded.orientation == ("HORIZONTAL" if migrate else "VERTICAL")
        assert [
            c["orientation"] for c in reloaded._card_view_data()["cards"]
        ] == expected


def test_legacy_image_defaults_to_non_background():
    data = card()
    data["secondaryContent"] = {
        "kind": "IMAGE",
        "location": "/image.png",
        "altText": "Image",
    }
    assert (
        CarouselCardData.model_validate(data).secondaryContent.useAsBackground is False
    )
