# Exemplar XBlocks Design Implementation Guide

## Status

Draft / working guide for developers implementing or refactoring Exemplar XBlock frontend UIs.

## Purpose

This guide translates the WGU Design System into practical implementation rules for Exemplar XBlocks. It is intended to reduce layout drift, inconsistent spacing, and one-off styling across blocks.

The immediate motivation is the Card Carousel XBlock, where the page container, internal card layout, image treatment, and spacing utilities had diverged from the design system.

## Design System Principles

### Grid

The WGU design system defines layouts around a 12-column grid.

Key rules:

- Use a 12-column grid as the structural foundation.
- Use a 32px column gutter.
- Use a 32px outer grid margin.
- Reading-heavy content should usually be constrained to the central 10 columns.
- Functional or visual elements may span all 12 columns when needed.
- Cards and compact supporting elements should not be narrower than 4 columns on desktop.
- 6 columns is the primary reading/content width.
- 12 columns should be used primarily for structural containers and wide visual components.

### Spacing

Use multiples of 4px and 8px.

Common values:

| Value | Paragon spacer | Typical use |
|---:|---|---|
| 4px | spacer 1 | smallest spacing |
| 8px | spacer 2 | compact spacing |
| 12px | spacer 2.5 | compact component spacing |
| 16px | spacer 3 | standard small spacing |
| 20px | spacer 3.5 | intermediate spacing |
| 24px | spacer 4 | medium spacing |
| 32px | spacer 4.5 | grid gutter / major internal padding |
| 48px | spacer 5 | large spacing, use intentionally |
| 64px | spacer 5.5 | major section spacing |
| 80px | spacer 6 | extra-large spacing |
| 136px | special block container side padding |

Important: `48px` is valid in the design system, but it should not be accidentally introduced via `p-5`, `pt-5`, or similar utilities when the intended grid gap is `32px`.

### Typography

- Headings use Sora.
- Body text uses Lato.
- Body line-height should generally stay in the 1.4–1.6 range.
- Font sizes and line heights should align to the 4px spacing rhythm where practical.

### Radius

Use the radius scale from the design system:

- 4px: XXS
- 8px: XS
- 16px: S
- 24px: M
- 32px: L
- 40px: XL
- 9999px: full / pill

### Icons

- Use Material Design outlined icons.
- Standard icon size is 24px.

## Container Guidance

### Standard content container

Most XBlocks should use a centered content container instead of hardcoded inline styles.

Recommended pattern:

```scss
.xblock-design-container {
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: 32px;
}
```

Use this pattern instead of:

```tsx
<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
```

Problems with inline container styles:

- hard to update globally
- easy to drift from the design system
- does not communicate design intent
- not reusable across XBlocks

### 136px block container padding

The design system also defines:

```text
136px — special left and right padding to be used in block containers
```

This is not the column gap. It is a larger side inset for full-width block containers.

Use it only when a block intentionally spans the full page/background and the content needs large left/right breathing room.

Conceptually:

```text
| full-width block background ------------------------------------------- |
| 136px side padding | content/grid area | 136px side padding |
```

Do not blindly apply `136px` to every XBlock. Confirm whether the block is intended to behave as a full-width block container or a standard centered content container.

## Grid Usage in React

When using Paragon/Bootstrap layout primitives, prefer:

```tsx
<Container>
  <Row>
    <Col lg={6}>Primary content</Col>
    <Col lg={6}>Secondary content</Col>
  </Row>
</Container>
```

For component-internal layouts where Bootstrap `Row`/`Col` adds unwanted negative margins, CSS grid is acceptable:

```scss
.component-layout--horizontal {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  column-gap: 32px;
}
```

Avoid using arbitrary width utilities as layout structure:

```tsx
<div className="d-flex w-100">
  <div className="w-50">...</div>
  <div className="w-50">...</div>
</div>
```

This creates a visual split, but it does not express grid intent and does not provide a controlled 32px column gap.

## Spacing Implementation Rules

Prefer semantic CSS classes and tokens over scattered spacing utilities.

Recommended:

```scss
.xblock-card {
  --xblock-grid-gap: 32px;
  --xblock-card-padding: 32px;
}

.xblock-card-panel {
  padding: var(--xblock-card-padding);
}
```

Avoid mixing unrelated utilities in the same component:

```tsx
<Card.Body className="p-3">
<div className="p-5">
<Button className="px-6">
```

Why this is a problem:

- `p-3` is about 16px
- `p-5` is 48px
- `px-6` is about 80px

The result is inconsistent visual rhythm and misalignment between primary and secondary content.

## Card Layout Guidance

### Primary and secondary content

Card primary and secondary panels should share a consistent padding rhythm.

Recommended:

```scss
.card-primary,
.card-secondary {
  padding: 32px;
}
```

Avoid:

```tsx
<Card.Body className="p-3">...</Card.Body>
<SecondaryContent className="p-5" />
```

### Horizontal cards

Horizontal cards should use a layout that explicitly defines columns and gap.

Recommended:

```scss
.card-layout--horizontal {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  column-gap: 32px;
}
```

### Vertical cards

Vertical cards should stack content without inventing new spacing rules:

```scss
.card-layout--vertical {
  display: flex;
  flex-direction: column;
}
```

## Avoiding `!important`

Avoid using `!important` to force layout overrides.

Bad:

```scss
.image-panel {
  max-width: 50% !important;
}
```

Better:

```scss
.image-panel {
  flex: 0 0 calc(50% - 16px);
  max-width: calc(50% - 16px);
}
```

`!important` makes future design changes harder and usually means the layout ownership is unclear.

## Migration / Refactor Checklist

When refactoring an existing XBlock UI:

1. Identify the outer container.
   - Is it hardcoded?
   - Does it use 1280px?
   - Is it centered?
   - Does it have correct side padding?

2. Identify the grid structure.
   - Is layout expressed through `Container` / `Row` / `Col` or CSS grid?
   - Are elements aligned to predictable columns?
   - Are there inner wrappers with arbitrary margins that break alignment?

3. Identify spacing utilities.
   - Search for `p-5`, `pt-5`, `px-6`, `ml-5`, `pl-5`.
   - Confirm each is intentional.
   - Replace with semantic tokens/classes when spacing is part of layout.

4. Identify width utilities.
   - Search for `w-50`, custom `maxWidth`, and inline width styles.
   - Replace structural width utilities with grid or semantic CSS.

5. Identify `!important`.
   - Remove if possible.
   - Replace with clearer layout ownership.

6. Check shared components.
   - Components like `ComplexCard` affect both Card Carousel and Card Grid.
   - Rebuild and visually QA every consuming XBlock.

## Browser Inspection Checklist

When verifying design implementation in browser DevTools:

- Inspect the outer XBlock container.
  - Confirm max width is 1280px.
  - Confirm it is centered.
  - Confirm side padding is expected.

- Inspect horizontal card layouts.
  - Confirm CSS grid is active.
  - Confirm two columns exist.
  - Confirm column gap is 32px.

- Inspect card panels.
  - Confirm primary and secondary panels use 32px padding.

- Inspect image cards.
  - Confirm image panel does not rely on `!important`.
  - Confirm background image overlay appears when enabled.

- Inspect spacing.
  - Confirm there are no accidental 48px/80px layout gaps from utility classes.

## Open Questions

- Which XBlocks should use the 136px block-container side padding?
- Should 1280px be introduced as a shared global token rather than per-block CSS?
- Should all card-based blocks use a shared card layout package/class system?
- Should browser visual regression tests be added for layout-sensitive blocks?
