# Keypoint XBlock

An Open edX Paragon-based UI that renders a list of key terms (label + description pairs) in a two-column grid, with an optional header and action button. Both a **student view** and a fully functional **studio editor** are implemented.

## Student UI

Displays the configured keypoints in a responsive two-column layout using Paragon's `Row` / `Col` grid. An optional call-to-action button (e.g. linking to a glossary) is shown at the bottom right when both button text and link are provided.

## Studio UI

A form-based editor that lets course authors:

- Set a **Block Header** (displayed above the keypoints).
- **Add / remove key terms** dynamically — each term has a label and a multi-line description.
- Configure an **Action Button** with custom text and URL.

Changes are persisted via a `studio_save` handler on the XBlock backend.

### Action Bar Layout

The Save / Cancel action bar is rendered **outside** the `.editor-with-buttons` container. This is intentional — the platform CSS rule `.modal-window .editor-with-buttons .xblock-actions` applies `position: absolute; bottom: 0` (relative to `.modal-content`), which breaks the layout when the Studio modal is resized. By placing `.xblock-actions` as a sibling of the content container (the same pattern used by the branching xblock), the platform rule does not match and the action bar uses `position: sticky` to stay pinned at the bottom of the scrollable area.

## Data Structure

Defined in `type.ts`:

| Type | Fields |
|------|--------|
| `KeyPoint` | `keypoint` (label string), `description` (description string) |
| `XBlockData` | `header`, `keypoints` (array of `KeyPoint`), `button_text`, `button_link` |

## Dev Notes

1. Both `student-ui` and `studio-ui` are fully implemented.
2. The `index.tsx` entry points expose a `renderBlock(runtime, element, data)` function that the XBlock Python backend calls to mount the React component.
3. The studio editor uses jQuery `$.post` (available globally in Studio) to save data via the XBlock handler URL.
