## Overview

**Project**: `<project-name>`  
**Figma file**: `<original-filename.fig or figma share link>`  
**Author / Designer**: `<designer name or team>`  
**Status**: Draft / In progress / Ready for dev / Released (choose one)

**Purpose & goals**

- Goal 1: e.g., "Deliver responsive dashboard to view KPIs"
- Goal 2: e.g., "Provide consistent design system with reusable components"
- Audience: e.g., "Product managers, analysts"

---

## Design files

**Primary source**

- Figma file: `<filename.fig>` (Upload / link to project)

**Pages included**

- `Landing` — hero, CTA, features
- `Auth` — login, signup, forgot-password
- `Dashboard` — main analytics view
- `Reports` — list + detail reports
- `Settings` — user and app settings
- `Design System` — colors, typography, components, icons

> Replace the page names above with the pages present in your Figma file.

**Versioning note**

- Figma pages are named exactly as above. When updating, please preserve page names and annotate changes using comments or version history.

---

## How to extract assets & tokens

**Recommended exports from Figma (what to provide to devs):**

1. Design tokens JSON (colors, typography, spacing, radii, shadows) — from the Design System page or using a plugin (e.g., _Figma Tokens_).
2. Export icons as SVG (optimized) and images as PNG/WebP (2x for retina).
3. Component variants export (document names, states).
4. A high-level screens export (PNG or PDF) for visual reference.

**Manual export steps (Figma UI)**

1. Open the file in Figma.
2. Select an asset or frame.
3. On the right → “Export” → choose format (SVG for icons, PNG/WEBP for bitmaps).
4. For scalable icons use SVG; for photos use WebP/PNG.
5. To export tokens: use plugin “Figma Tokens” or "Design Tokens" plugin → export JSON.

**Using Figma REST API (recommended for automation)**

- GET file nodes or file JSON: `GET https://api.figma.com/v1/files/{file_key}`
- Use a script to parse `styles` (color, text styles) and `nodes` for frames.
- Save exported assets and token JSON into `/design-export/`.

> If you want, I can prepare a sample script (Node/Python) to call the Figma API and extract tokens — provide a Figma file key + personal access token.

---

## Project structure (pages & screens)

> Fill the list with actual page/frame names from the Figma file.

- `00 - Design System`
  - Color palette
  - Typography
  - Grid & spacing
  - Components (atoms → molecules → organisms)
- `01 - Auth`
  - Login
  - Signup
  - Forgot password
- `02 - Dashboard`
  - Overview
  - Reports summary
  - Widgets (charts, KPI cards)
- `03 - Reports`
  - Report list
  - Report detail
- `04 - Settings`
  - Profile
  - Organization settings

---

## Components inventory

This is a recommended canonical component list inferred from the Figma structure. Replace with exact instances from your file.

### Atoms

- Colors (primary, secondary, neutral, success, warning, error)
- Typography styles (H1, H2, H3, Body, Caption)
- Buttons (Primary, Secondary, Ghost, Icon button)
- Inputs (Text, Textarea, Select, Checkbox, Radio)
- Icons (system & product)

### Molecules

- Input groups (label + input + helper text)
- Search bar + suggestions
- Card (image + title + meta + actions)
- Modal (header, body, footer)

### Organisms / Layouts

- Header / Navbar (logo, nav links, profile menu)
- Sidebar (collapsible)
- Dashboard grid (cards and charts)
- Footer / site info

### Component states & variants

- Button: default / hover / active / disabled / loading
- Input: default / focus / error / disabled
- Card: collapsed / expanded / loading

---

## Design tokens (colors, typography, spacing)

> **IMPORTANT:** Fill token values from Figma tokens or the exported JSON. Below are placeholders and recommended naming conventions.

### Colors (example tokens)

```text
--color-primary: #0B63E1  /* Primary brand color */
--color-primary-600: #094FBF
--color-secondary: #F5A623
--color-background: #FFFFFF
--color-surface: #F7F9FC
--color-text: #0B1826
--color-muted: #9AA4B2
--color-success: #16A34A
--color-warning: #F59E0B
--color-danger: #DC2626
```

### Typography (example tokens)

```text
--font-family-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-bold: 700

--type-h1: 40px / 48px
--type-h2: 32px / 40px
--type-h3: 24px / 32px
--type-body: 16px / 24px
--type-caption: 12px / 16px
```

### Spacing & layout

```text
--space-xxs: 4px
--space-xs: 8px
--space-sm: 12px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--radius-sm: 4px
--radius-md: 8px
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08)
```

---

## Icons & images

- Icon format: **SVG** — optimize and keep paths simple; provide both `filled` and `outline` variants if present.
- Image format: **WebP** (for production), provide high-res originals (PNG / PSD).
- Suggested folders:
  - `/assets/icons/*.svg`
  - `/assets/images/*.{webp,png}`

**Naming convention**  
`icon-[name]-[state].svg` e.g. `icon-search-default.svg`, `icon-search-active.svg`

---

## Accessibility notes

- Text contrast: Ensure WCAG AA minimum for body text and WCAG AAA for large headlines where required.
- Interactive targets: Buttons and touch targets should be at least 44×44 px.
- Keyboard navigation: Ensure focus states for all interactive components.
- Semantic markup: Use `<button>`, `<nav>`, and landmark elements where applicable.
- ARIA: Provide `aria-label` for icon-only buttons and `aria-invalid` for inputs with errors.
