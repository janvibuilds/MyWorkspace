# Task 3 Report — Category Filter Component

**Status:** DONE

## What I Did

1. **Added `scrollbar-none` utility** to `src/app/globals.css` inside the existing `@layer utilities` section (lines 201–207). This utility hides scrollbars across browsers (IE/Edge, Firefox, WebKit).

2. **Created `src/components/ui/category-filter.tsx`** — a client component that renders a horizontal scrollable row of category pill buttons. Uses `GALLERY_CATEGORIES` from the gallery constants, supports `activeCategory` / `onCategoryChange` props, and applies active/inactive styles via conditional Tailwind classes.

## Test Results

- **TypeScript (`tsc --noEmit`):** Passed clean, zero errors.
- **ESLint:** Pre-existing config issue (circular reference in eslint config) — unrelated to this task.
- **Build:** Not run (ESLint blocks `next build` in this environment).

## Commit

```
20629ee feat: add category filter component with scrollable pills
```

## Concerns

- ESLint configuration has a pre-existing circular reference error that prevents `next lint` from running. This should be fixed separately.
