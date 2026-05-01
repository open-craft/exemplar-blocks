"""
Tests to validate that the data saved in Version 0.6.x is compatible with Version 0.7.
"""

from card_carousel.types import CardData, CardType


def test_older_image_card_data_is_compatible():
    older_data = {
        "id": 1,
        "name": "older card",
        "title": "Image Card",
        "subtitle": "",
        "description": "",
        "ctaLabel": "",
        "ctaLink": "",
        "cardType": CardType.IMAGE,
        "secondaryContent": {
            "location": "https://image-location",
            "altText": "description",
        },
    }
    newer_data = {
        "id": 1,
        "name": "older card",
        "title": "Image Card",
        "subtitle": "",
        "description": "",
        "ctaLabel": "",
        "ctaLink": "",
        "secondaryContent": {
            "kind": CardType.IMAGE,
            "location": "https://image-location",
            "altText": "description",
        },
    }

    card = CardData(**older_data)

    assert card.model_dump() == newer_data


def test_older_content_highlight_card_data_is_compatible():
    older_data = {
        "id": 1,
        "name": "older card",
        "title": "Content Highlight Card",
        "subtitle": "",
        "description": "",
        "ctaLabel": "",
        "ctaLink": "",
        "cardType": CardType.CONTENT_HIGHLIGHT,
        "secondaryContent": {
            "title": "",
            "subtitle": "",
            "description": "",
        },
    }
    newer_data = {
        "id": 1,
        "name": "older card",
        "title": "Content Highlight Card",
        "subtitle": "",
        "description": "",
        "ctaLabel": "",
        "ctaLink": "",
        "secondaryContent": {
            "kind": CardType.CONTENT_HIGHLIGHT,
            "title": "",
            "subtitle": "",
            "description": "",
        },
    }

    card = CardData(**older_data)

    assert card.model_dump() == newer_data


def test_older_rich_list_card_data_is_compatible():
    older_data = {
        "id": 1,
        "name": "older card",
        "title": "Rich List Card",
        "subtitle": "",
        "description": "",
        "ctaLabel": "",
        "ctaLink": "",
        "cardType": CardType.RICH_LIST,
        "secondaryContent": {
            "items": [
                {
                    "icon": "search",
                    "title": "Search",
                    "description": "Search for something",
                }
            ]
        },
    }
    newer_data = {
        "id": 1,
        "name": "older card",
        "title": "Rich List Card",
        "subtitle": "",
        "description": "",
        "ctaLabel": "",
        "ctaLink": "",
        "secondaryContent": {
            "kind": CardType.RICH_LIST,
            "items": [
                {
                    "icon": "search",
                    "title": "Search",
                    "description": "Search for something",
                }
            ],
        },
    }

    card = CardData(**older_data)

    assert card.model_dump() == newer_data


def test_older_hover_list_card_data_is_compatible():
    older_data = {
        "id": 1,
        "name": "older card",
        "title": "Hover List Card",
        "subtitle": "",
        "description": "",
        "ctaLabel": "",
        "ctaLink": "",
        "cardType": CardType.HOVER_LIST,
        "secondaryContent": {
            "items": [
                {
                    "icon": "search",
                    "description": "Shown by default",
                    "hoverContent": "Shown when clicked",
                }
            ]
        },
    }
    newer_data = {
        "id": 1,
        "name": "older card",
        "title": "Hover List Card",
        "subtitle": "",
        "description": "",
        "ctaLabel": "",
        "ctaLink": "",
        "secondaryContent": {
            "kind": CardType.HOVER_LIST,
            "items": [
                {
                    "icon": "search",
                    "description": "Shown by default",
                    "hoverContent": "Shown when clicked",
                }
            ],
        },
    }

    card = CardData(**older_data)

    assert card.model_dump() == newer_data
