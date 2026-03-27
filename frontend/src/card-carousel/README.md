# Card Carousel XBlock

An Open edX Paragon based UI that renders a horizontally scrollable carousel of content cards. Built on top of Paragon's `CardCarousel`, it supports four distinct card types and adapts layout based on orientation.

## Card Types

| Type | Secondary Content |
|------|-------------------|
| `IMAGE` | Image cap at the top of the card |
| `CONTENT_HIGHLIGHT` | Highlighted panel with title, subtitle, and description |
| `RICH_LIST` | List of icon + title + description items |
| `HOVER_LIST` | Interactive list that reveals extra content on hover |

## Layouts

- **`HORIZONTAL`** — primary content and secondary content sit side-by-side. The carousel column width is wider to accommodate the layout.
- **`VERTICAL`** — primary content stacks above secondary content. The carousel uses narrower columns.

## Data Structure

The data structures are defined in `types.ts`.

## MaterialIcon

A small utility component used inside `RichList` and `HoverList`. This uses the "Material Icon" webfont that's injected into the HTML by the XBlock.
This is used in place of something like the `@mui/icons-material` React library to avoid bundling all the SVGs, but have the support for all the icons at runtime.

## Dev Notes

1. Only the `student-ui` is implemented. The `studio-ui` just has placeholder files.
2. The `index.html` files in the `student-ui` and `studio-ui` are useful for developing the libraries without involving the XBlock workbench. They act as entry points for Vite to serve the components when `npm run dev` is used. They are currently **not used**.
