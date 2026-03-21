# Theta Theme Development Instructions

This document describes every convention, type, and API available when creating **sections** and **blocks** for a Theta theme.

---

## Theme Registration

A theme bundle must register itself on the global `window.__THETA_THEMES__` namespace under its theme name:

```ts
window.__THETA_THEMES__ = window.__THETA_THEMES__ || {}
window.__THETA_THEMES__["my-theme"] = {
  name: "my-theme",
  version: "1.0.0",
  sectionsComponents,
  sectionSettingsSchemas,
  blocksComponents,       // optional
  blockSettingsSchemas,   // optional
  sectionBlocksConfig,    // optional
}
```

The entry point that assembles and registers all of this lives in `src/registry.ts` (or equivalent).

---

## Available Globals in Theme Bundles

The platform injects these globals before loading the theme script. Do **not** bundle them — declare them as externals:

| Global | Module |
|--------|--------|
| `React` | `react` |
| `ReactDOM` | `react-dom` |
| `jsxRuntime` | `react/jsx-runtime` |
| `cva` | `class-variance-authority` |
| `clsx` | `clsx` |
| `twMerge` | `tailwind-merge` |
| `cn` | platform `lib/utils` |
| `LucideReact` | `lucide-react` |

---

## `registry.ts` Structure

```ts
import type React from "react"
import { MySection, mySectionSettingsSchema } from "./sections/MySection"
import { MyBlock, myBlockSettingsSchema } from "./blocks/MyBlock"

// Section React components keyed by section type
export const sectionsComponents: Record<string, React.ComponentType<Record<string, unknown>>> = {
  "my-section": MySection,
}

// Settings schemas keyed by section type (same keys as above)
export const sectionSettingsSchemas = {
  "my-section": mySectionSettingsSchema,
}

// Block React components keyed by block type
export const blocksComponents: Record<string, React.ComponentType<Record<string, unknown>>> = {
  "my-block": MyBlock,
}

// Settings schemas keyed by block type
export const blockSettingsSchemas = {
  "my-block": myBlockSettingsSchema,
}

// Per-section block configuration
export const sectionBlocksConfig = {
  "my-section": {
    blocks: [{ type: "@theme" }], // "@theme" = all non-private theme blocks
    maxBlocks: 10,
    localBlocks: [], // section-exclusive blocks (not shared)
  },
}
```

---

## Section Component

### Props injected by the platform

In addition to all settings values, each section receives:

| Prop | Type | Description |
|------|------|-------------|
| `sectionId` | `string` | Unique Puck instance ID |
| `sectionName` | `string` | The section type key (e.g. `"hero"`) |
| `renderBlocks` | `() => React.ReactNode` | Call this to render child blocks (only present when the section accepts blocks) |

### Example

```tsx
export interface HeroProps {
  title?: string
  description?: string
  renderBlocks?: () => React.ReactNode
  // ...other settings as props
}

export const Hero = ({ title, description, renderBlocks }: HeroProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      {renderBlocks && <div>{renderBlocks()}</div>}
    </section>
  )
}
```

---

## Block Component

### Props injected by the platform

In addition to all settings values, each block receives:

| Prop | Type | Description |
|------|------|-------------|
| `blockId` | `string` | Unique Puck instance ID |
| `blockType` | `string` | The block type key (e.g. `"feature"`) |

### Example

```tsx
export interface FeatureBlockProps {
  feature?: string
  blockId?: string
  blockType?: string
}

export const FeatureBlock = ({ feature = "Default text" }: FeatureBlockProps) => {
  return <div>{feature}</div>
}
```

---

## Settings Schema (`SectionSetting[]`)

Each setting in a schema is an object with the following interface:

```ts
interface SectionSetting {
  id: string                    // prop name passed to the component
  label: string                 // display label in the editor sidebar
  type: string                  // see setting types below
  default?: string | number | boolean | unknown
  info?: string                 // helper text shown below the input
  placeholder?: string          // for text-based inputs
  options?: Array<{ value: string | number | boolean; label: string }>  // for select/radio
  min?: number                  // for number / range
  max?: number                  // for number / range
  step?: number                 // for number / range
  readOnly?: boolean
  disabled?: boolean
  required?: boolean
}
```

---

## All Setting Types

### `text`
Single-line text input.
```ts
{ id: "title", label: "Title", type: "text", default: "Hello world", placeholder: "Enter title" }
```
Prop value: `string`

---

### `textarea`
Multi-line text input.
```ts
{ id: "description", label: "Description", type: "textarea", default: "Some text..." }
```
Prop value: `string`

---

### `number`
Numeric input with optional min/max/step.
```ts
{ id: "columns", label: "Columns", type: "number", default: 3, min: 1, max: 6, step: 1 }
```
Prop value: `number`

---

### `checkbox`
Boolean toggle.
```ts
{ id: "showBorder", label: "Show border", type: "checkbox", default: true }
```
Prop value: `boolean`

---

### `radio`
Single-choice from a fixed set. Requires `options`.
```ts
{
  id: "layout",
  label: "Layout",
  type: "radio",
  default: "grid",
  options: [
    { value: "grid", label: "Grid" },
    { value: "list", label: "List" },
  ]
}
```
Prop value: `string | number | boolean`

---

### `select`
Dropdown single-choice. Requires `options`.
```ts
{
  id: "size",
  label: "Size",
  type: "select",
  default: "md",
  options: [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
  ]
}
```
Prop value: `string | number | boolean`

---

### `range`
Slider with min/max/step.
```ts
{ id: "opacity", label: "Opacity", type: "range", default: 100, min: 0, max: 100, step: 5 }
```
Prop value: `number`

---

### `color`
Color picker (solid color).
```ts
{ id: "backgroundColor", label: "Background color", type: "color", default: "#ffffff" }
```
Prop value: `string` (hex / CSS color)

---

### `url`
URL text input with validation hint.
```ts
{ id: "ctaUrl", label: "CTA URL", type: "url", default: "#", placeholder: "https://example.com" }
```
Prop value: `string`

---

### `image_picker`
Opens the media library to pick an image.
```ts
{
  id: "heroImage",
  label: "Hero image",
  type: "image_picker",
  info: "Recommended: 1200×600px",
  default: { url: null, id: null }
}
```
Prop value:
```ts
{ id: number | null; url: string | null; alt?: string; width?: number; height?: number }
```

---

### `video_picker`
Opens the media library to pick a video file.
```ts
{ id: "backgroundVideo", label: "Background video", type: "video_picker" }
```
Prop value:
```ts
{ id: number | null; url: string | null }
```

---

### `video_url`
Text input for an external video URL (YouTube, Vimeo, etc.).
```ts
{ id: "videoUrl", label: "Video URL", type: "video_url", placeholder: "https://youtube.com/..." }
```
Prop value: `string`

---

### `font_picker`
Font family selector.
```ts
{ id: "headingFont", label: "Heading font", type: "font_picker", default: "Inter" }
```
Prop value: `string` (font family name)

---

### `richtext`
Rich text editor (HTML output).
```ts
{ id: "content", label: "Content", type: "richtext", default: "<p>Start writing...</p>" }
```
Prop value: `string` (HTML)

---

### `html`
Raw HTML editor.
```ts
{ id: "customHtml", label: "Custom HTML", type: "html" }
```
Prop value: `string` (raw HTML)

---

### `text_alignment`
Left / Center / Right alignment picker.
```ts
{ id: "textAlignment", label: "Text alignment", type: "text_alignment", default: "left" }
```
Prop value: `"left" | "center" | "right"`

---

### `page_reference`
Picker to reference another page in the CMS.
```ts
{ id: "linkedPage", label: "Linked page", type: "page_reference" }
```
Prop value:
```ts
{ id?: string; slug?: string; title?: string } | string
```

---

### `metaobject_ref`
Reference to a Strapi metaobject entry.
```ts
{ id: "author", label: "Author", type: "metaobject_ref" }
```
Prop value: `string | null` (document ID)

---

## Blocks Configuration

### Global blocks
Defined in `blocksComponents` / `blockSettingsSchemas` at the theme level. Available to any section that references them.

### Local blocks
Defined inline inside `sectionBlocksConfig[sectionKey].localBlocks`. They are exclusive to that section and are not shared across sections.

```ts
sectionBlocksConfig: {
  "faq": {
    blocks: [{ type: "faq-item" }],
    localBlocks: [
      {
        type: "faq-item",
        name: "FAQ Item",
        component: FaqItemComponent,
        settings: [
          { id: "question", label: "Question", type: "text", default: "Question?" },
          { id: "answer",   label: "Answer",   type: "textarea", default: "Answer." },
        ],
      },
    ],
  },
}
```

### `@theme` wildcard
Using `{ type: "@theme" }` in the `blocks` array expands to **all non-private theme blocks**.

### Private blocks
Prefix the block type with `_` to make it private. Private blocks are **excluded** from `@theme` expansion and must be explicitly listed.

```ts
blocksComponents = {
  "_internal-slide": SlideBlock, // private — not included in @theme
  "feature": FeatureBlock,       // public — included in @theme
}
```

---

## Key Naming Conventions

- Section and block keys can use kebab-case or any casing — they are normalized to lowercase internally.
- Keys must be consistent across `sectionsComponents`, `sectionSettingsSchemas`, `blocksComponents`, `blockSettingsSchemas`, and `sectionBlocksConfig`.
- The `id` field in a setting becomes the exact prop name passed to the component. Use camelCase for prop names (e.g. `id: "heroImage"` → `props.heroImage`).

---

## Complete Section Example

```tsx
// src/sections/Features/Features.tsx

export interface FeaturesProps {
  heading?: string
  subheading?: string
  columns?: number
  backgroundColor?: string
  textAlignment?: "left" | "center" | "right"
  renderBlocks?: () => React.ReactNode
}

export const Features = ({
  heading = "Features",
  subheading,
  columns = 3,
  backgroundColor,
  textAlignment = "center",
  renderBlocks,
}: FeaturesProps) => {
  return (
    <section style={{ backgroundColor }}>
      <div className={`text-${textAlignment}`}>
        <h2>{heading}</h2>
        {subheading && <p>{subheading}</p>}
      </div>
      {renderBlocks && (
        <div style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, display: "grid" }}>
          {renderBlocks()}
        </div>
      )}
    </section>
  )
}

export const featuresSettingsSchema = [
  { id: "heading",         label: "Heading",          type: "text",           default: "Features" },
  { id: "subheading",      label: "Subheading",       type: "textarea" },
  { id: "columns",         label: "Columns",          type: "number",         default: 3, min: 1, max: 6 },
  { id: "backgroundColor", label: "Background color", type: "color",          default: "#ffffff" },
  { id: "textAlignment",   label: "Text alignment",   type: "text_alignment", default: "center" },
]
```

## Complete Block Example

```tsx
// src/blocks/FeatureCard/FeatureCard.tsx

export interface FeatureCardProps {
  icon?: string
  title?: string
  description?: string
}

export const FeatureCard = ({ icon, title = "Feature", description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {icon && <span>{icon}</span>}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}

export const featureCardSettingsSchema = [
  { id: "icon",        label: "Icon (emoji or text)", type: "text",     default: "⭐" },
  { id: "title",       label: "Title",                type: "text",     default: "Feature title" },
  { id: "description", label: "Description",          type: "textarea", default: "Feature description" },
]
```
