# Card Carousel XBlock

An Open edX Paragon based UI that renders a horizontally scrollable carousel of content cards. Built on top of Paragon's `CardCarousel`, it supports four distinct card types and adapts layout based on orientation.

## Card Types

| Type                | Secondary Content                                       |
| ------------------- | ------------------------------------------------------- |
| `IMAGE`             | Image cap at the top of the card                        |
| `CONTENT_HIGHLIGHT` | Highlighted panel with title, subtitle, and description |
| `RICH_LIST`         | List of icon + title + description items                |
| `HOVER_LIST`        | Interactive list that reveals extra content on hover    |

## Layouts

- `HORIZONTAL` — primary content and secondary content sit side-by-side. The carousel column width is wider to accommodate the layout.
- `VERTICAL` — primary content stacks above secondary content. The carousel uses narrower columns.

## Data Models

The data models for this application are defined in the XBlocks [types.py](../../../src/card_carousel/types.py) file. They are synced using the `pydantic2ts` CLI.

> [!NOTE]
> To update the data models, change the model in `types.py` and run `mise run sync-types`.

## Google Material Icon

The icons for this XBlock are from the [Google's Material Icons Font](https://developers.google.com/fonts/docs/material_icons).
This is used in place of Paragon's icons or the `@mui/icons-material` React library to avoid bundling all the SVGs, but have the support for all the icons at runtime.

## Dev Notes

The `index.html` file is useful for developing the libraries without involving the XBlock workbench. It along with `studio-ui/demo.tsx` acts as entry point for `pnpm run dev`.

