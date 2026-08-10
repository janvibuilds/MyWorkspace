# Gallery Page Design Spec

**Date**: 2026-08-10
**Feature**: Gallery page for neo-portfolio
**Route**: `/gallery`

---

## 1. Overview

Add a Gallery page to the existing personal developer portfolio. The Gallery is a visual archive of things built, achieved, experienced, created, and captured. It should feel like a curated visual journal — personal, minimal, premium — and look like it was part of the portfolio from the beginning.

---

## 2. Architecture

### Routing

- New standalone page at `src/app/gallery/page.tsx`
- Route: `/gallery`
- Server component wrapper with client-side gallery interactivity inside

### Navbar Integration

Extend `src/components/sections/navbar.tsx` to support both hash-based and route-based links:

- Add a `type` field to nav items: `"hash"` | `"route"`
- Hash links use existing `scrollIntoView` behavior
- Route links use Next.js `Link` component
- The letter-by-letter hover animation applies identically to both types
- New nav item: `{ name: "gallery", href: "/gallery", type: "route" }`
- Position: after "contact" (last hash link)

### Container

Use the exact same outer wrapper as the home page and project pages:

```
div.font-sans.min-h-screen.flex.flex-col.items-center.relative.px-2
  main.relative.z-10.max-w-3xl.w-full.mx-auto.border-x.border-dashed.border-border.bg-background
    SectionSeparator
    [hero]
    SectionSeparator
    [filter + grid]
    SectionSeparator
```

---

## 3. Components

### New Files

| File | Type | Purpose |
|---|---|---|
| `src/app/gallery/page.tsx` | Server | Page wrapper, metadata |
| `src/components/sections/gallery.tsx` | Client | Main gallery: filtering, grid, lightbox state |
| `src/components/ui/gallery-item.tsx` | Client | Individual card: media + hover overlay |
| `src/components/ui/gallery-lightbox.tsx` | Client | Modal media viewer with keyboard nav |
| `src/components/ui/category-filter.tsx` | Client | Horizontal scrollable category pills |
| `src/app/constants/gallery.ts` | Data | Gallery items array + types |

### Modified Files

| File | Change |
|---|---|
| `src/components/sections/navbar.tsx` | Add `type` field to nav items, support route links |

---

## 4. Data Model

```ts
export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  title?: string;
  description?: string;
  category: GalleryCategory;
  year?: number;
  featured?: boolean;
  aspectRatio?: "portrait" | "landscape" | "square";
  href?: string;
  externalLinks?: { label: string; url: string }[];
};

export type GalleryCategory =
  | "ALL"
  | "BUILDING"
  | "ACHIEVEMENTS"
  | "EVENTS"
  | "FOUNDER"
  | "ART"
  | "PERSONAL"
  | "MOMENTS";
```

### Categories

```ts
export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "ALL",
  "BUILDING",
  "ACHIEVEMENTS",
  "EVENTS",
  "FOUNDER",
  "ART",
  "PERSONAL",
  "MOMENTS",
];
```

### Placeholder Data

20-25 sample items across all categories using placeholder images (`/placeholder-image.png`, `/placeholder-avatar.png`) and placeholder videos (inline test URLs or empty strings). Each item has realistic metadata (title, category, year) but clearly marked as placeholder.

---

## 5. Page Hero

Minimal introduction at the top of the gallery page:

```
GALLERY

A collection of things
I've built, captured,
and kept along the way.
```

- Uses the same section header pattern: `<h2>` with `text-2xl font-semibold`
- "GALLERY" title follows the existing section naming convention (lowercase with period): `gallery.`
- Subtitle in `text-muted-foreground`
- Padding: `p-4` like other sections
- Bordered with `border-b border-dashed border-border`

---

## 6. Category Filter

### Layout

- Positioned below the hero, above the grid
- Horizontally scrollable row on all screens
- On mobile: scrollable with hidden scrollbar, touch-friendly
- On desktop: centered row with even spacing

### Design

- Pill-shaped buttons using existing `.badge` pattern
- Active category: `bg-foreground text-background` (inverted)
- Inactive: transparent with `border border-border`, hover `border-border-hover`
- Text: `text-xs font-medium uppercase tracking-wider`
- Spacing: `gap-2` between pills
- Container: `px-4 py-3` with `border-b border-dashed border-border`

### Behavior

- Clicking a category filters the grid instantly (no page reload)
- Smooth layout transition using CSS `transition` on grid items
- "ALL" is selected by default

---

## 7. Gallery Grid

### Desktop (md+)

CSS Grid with 2 columns:

```css
grid-template-columns: repeat(2, 1fr);
gap: 0.75rem;
```

Featured items span full width (`col-span-2`).

### Tablet (sm-md)

Same 2-column grid, smaller gaps.

### Mobile (< sm)

Single column grid.

### Grid Composition

Items are placed sequentially. Featured items get `col-span-2`. The grid naturally creates visual variety based on aspect ratios (portrait, landscape, square items mixed together).

---

## 8. Gallery Item Card

### Structure

```
┌─────────────────────────────┐
│                             │
│         MEDIA               │
│      (image or video)       │
│                             │
├─────────────────────────────┤
│  Title                      │
│  Category · Year            │
└─────────────────────────────┘
```

### Styling

- Border: `border border-border`
- Border radius: `var(--radius)` (0.5rem)
- Overflow hidden
- Background: `bg-background`
- Transition: `300ms ease`

### Hover State

- Subtle scale: `1 → 1.015` (400ms cubic-bezier(0.4, 0, 0.2, 1))
- Overlay fades in: semi-transparent dark background with title, category, year, and arrow icon
- Overlay: `opacity-0 group-hover:opacity-100 transition-opacity duration-300`

### Media Handling

**Images**:
- Next.js `Image` component with `fill` + `object-cover`
- `aspect-video` for landscape, `aspect-[3/4]` for portrait, `aspect-square` for square
- `loading="lazy"` for performance
- `sizes` prop for responsive sizing

**Videos**:
- Native `<video>` element
- `muted`, `playsInline`, `preload="none"`
- Poster image via `poster` prop
- Intersection Observer: pause when out of viewport
- Click opens lightbox (not inline play)

### Metadata

Below the media:
- Title: `text-sm font-medium text-foreground`
- Category + Year: `text-xs text-muted-foreground`
- Padding: `p-3`

---

## 9. Media Viewer / Lightbox

### Structure

Full-screen modal overlay:

```
┌─────────────────────────────────────┐
│  [close button]          [counter]  │
│                                     │
│         ←  MEDIA  →                │
│                                     │
│  Title                              │
│  Category · Year                    │
│  [external links if any]            │
└─────────────────────────────────────┘
```

### Styling

- Backdrop: `bg-background/80 backdrop-blur-sm`
- Content: centered, max-width constrained
- Close button: top-right, `X` icon from lucide-react
- Navigation: left/right arrow buttons on sides
- Counter: `3 / 12` style, top-right area
- Transition: opacity + scale (200ms)

### Keyboard Navigation

- `Escape` → Close
- `Arrow Left` → Previous item
- `Arrow Right` → Next item

### Behavior

- Shows the current item from the filtered set (not all items)
- Prevents body scroll when open
- Focus trap within the modal
- Returns focus to the triggering item on close

---

## 10. Animation

### Page Entrance

CSS keyframe applied to the gallery container:

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
```

Duration: 500ms, easing: `cubic-bezier(0.4, 0, 0.2, 1)`.

### Filter Transition

Grid items use CSS `transition: opacity 300ms ease, transform 300ms ease` for filter changes. Items fade out/in smoothly.

### Hover

- Gallery cards: `scale(1.015)` on hover (400ms)
- Category pills: border color transition (200ms)

### Reduced Motion

Respect `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

This already exists in `globals.css`. No additional work needed.

---

## 11. Dark / Light Mode

Use existing theme tokens exclusively:

- Page background: `bg-background`
- Text: `text-foreground`
- Secondary text: `text-muted-foreground`
- Borders: `border-border`
- Hover borders: `border-border-hover`
- Active filter: `bg-foreground text-background`
- Lightbox backdrop: `bg-background/80`

No new CSS variables. No separate theme implementation.

---

## 12. Responsive Design

### Desktop (md+, 768px+)

- 2-column grid, featured items span 2 columns
- Full nav with letter animation
- Generous spacing

### Tablet (sm, 640px-768px)

- 2-column grid with tighter gaps
- Same layout, slightly reduced typography

### Mobile (<640px)

- Single column grid
- Category filter: horizontally scrollable
- Nav: logo + theme toggle only (existing behavior)
- Lightbox: full-screen with touch swipe support (optional, not required)

---

## 13. Accessibility

- Semantic `<h1>` for page title, `<h2>` for sections
- Category buttons: `<button>` with `aria-pressed` for active state
- Gallery items: clickable `<div>` with `role="button"`, `tabIndex={0}`, `onKeyDown` for Enter/Space
- Lightbox: `role="dialog"`, `aria-modal="true"`, `aria-label="Media viewer"`
- Focus trap in lightbox
- Escape to close
- Meaningful `alt` text on all images
- Video `aria-label` for context
- Visible focus states: `focus-visible:ring-2 focus-visible:ring-link`

---

## 14. Performance

- Images: Next.js `Image` with automatic optimization
- `loading="lazy"` on all gallery images
- `sizes` prop for responsive image sizing
- Videos: `preload="none"`, poster images
- Intersection Observer for video play/pause
- No unnecessary re-renders (memoize filtered items)
- Font: already loaded globally (Bricolage_Grotesque)

---

## 15. Empty State

When a category has no items:

```
Nothing here yet.

Probably building something for it.
```

- Centered text
- `text-muted-foreground`
- `py-12` padding

---

## 16. Constraints

- No new npm dependencies
- No CMS, database, or authentication
- No stock photos (placeholder images only)
- No fake achievements (clearly marked placeholders)
- No Instagram-like features (likes, comments, sharing)
- No infinite scroll
- No full-width layout
- No masonry/Pinterest layout
- No heavy 3D/WebGL
- No excessive glassmorphism or gradients
- Existing pages remain unmodified (except navbar)
- Existing theme/typography/spacing preserved

---

## 17. File Tree

```
src/
  app/
    gallery/
      page.tsx                    ← NEW: page wrapper
    constants/
      gallery.ts                  ← NEW: gallery data + types
  components/
    sections/
      gallery.tsx                 ← NEW: main gallery client component
      navbar.tsx                  ← MODIFIED: add route link support
    ui/
      gallery-item.tsx            ← NEW: individual card
      gallery-lightbox.tsx        ← NEW: media viewer modal
      category-filter.tsx         ← NEW: filter pills
```

---

## 18. Acceptance Criteria

- [ ] Gallery appears in navbar
- [ ] `/gallery` route works
- [ ] Existing navbar design unchanged (letter animation works for gallery link)
- [ ] Existing portfolio theme preserved
- [ ] Existing typography preserved
- [ ] Container width preserved (`max-w-3xl`)
- [ ] Gallery feels floating and balanced
- [ ] Gallery is not full-width
- [ ] Hero exists with correct copy
- [ ] All 8 categories render in filter
- [ ] Filtering works (no page reload)
- [ ] Images render correctly
- [ ] Videos render with poster, muted, playsInline
- [ ] Featured items span full grid width
- [ ] Media viewer opens on click
- [ ] Keyboard navigation works (Escape, arrows)
- [ ] Mobile layout works (single column, scrollable filters)
- [ ] Dark mode works
- [ ] Light mode works
- [ ] Reduced motion respected
- [ ] No fake content (placeholders clearly marked)
- [ ] Existing pages not modified (except navbar)
- [ ] No unnecessary dependencies added
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
