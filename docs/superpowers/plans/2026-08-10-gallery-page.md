# Gallery Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Gallery page to the existing neo-portfolio with category filtering, featured grid layout, media viewer, and full dark/light mode support.

**Architecture:** Standalone `/gallery` route using the same container wrapper (`max-w-3xl`, dashed borders, section separators). Client-side filtering, CSS Grid with featured spanning, and a lightbox modal. Extended navbar to support route-based links alongside existing hash anchors.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, lucide-react icons, existing theme system (next-themes).

## Global Constraints

- No new npm dependencies
- Reuse existing theme tokens (CSS variables in globals.css)
- Reuse existing component patterns (SectionSeparator, .badge, .btn, .link)
- Container: `max-w-3xl w-full mx-auto border-x border-dashed border-border`
- Font: Bricolage_Grotesque (already loaded)
- Accent color: green `hsl(142, 76%, ...)`
- Existing pages must not be modified (except navbar)
- Placeholder images only — no fabricated achievements
- `npm run lint` and `npm run build` must pass after each task

---

### Task 1: Gallery Data Types and Constants

**Files:**
- Create: `src/app/constants/gallery.ts`

**Interfaces:**
- Produces: `GalleryItem` type, `GalleryCategory` type, `GALLERY_CATEGORIES` array, `GALLERY_ITEMS` array (placeholder data)

- [ ] **Step 1: Create gallery types and placeholder data**

```ts
// src/app/constants/gallery.ts

export type GalleryCategory =
  | "ALL"
  | "BUILDING"
  | "ACHIEVEMENTS"
  | "EVENTS"
  | "FOUNDER"
  | "ART"
  | "PERSONAL"
  | "MOMENTS";

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

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "building-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "Late night coding session",
    category: "BUILDING",
    year: 2026,
    aspectRatio: "landscape",
  },
  {
    id: "building-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Orka dashboard prototype",
    category: "BUILDING",
    year: 2025,
    featured: true,
    aspectRatio: "landscape",
    href: "/projects/orka",
  },
  {
    id: "building-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Building SilentPay",
    category: "BUILDING",
    year: 2025,
    aspectRatio: "portrait",
  },
  {
    id: "building-4",
    type: "image",
    src: "/placeholder-image.png",
    title: "Development setup",
    category: "BUILDING",
    year: 2026,
    aspectRatio: "landscape",
  },
  {
    id: "achievement-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "Hackathon winner",
    category: "ACHIEVEMENTS",
    year: 2025,
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "achievement-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Builder program acceptance",
    category: "ACHIEVEMENTS",
    year: 2025,
    aspectRatio: "portrait",
  },
  {
    id: "achievement-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Certificate of completion",
    category: "ACHIEVEMENTS",
    year: 2024,
    aspectRatio: "landscape",
  },
  {
    id: "event-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "Web3 conference",
    category: "EVENTS",
    year: 2025,
    aspectRatio: "landscape",
  },
  {
    id: "event-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "University meetup",
    category: "EVENTS",
    year: 2025,
    aspectRatio: "portrait",
  },
  {
    id: "event-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Hackathon weekend",
    category: "EVENTS",
    year: 2026,
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "founder-1",
    type: "image",
    src: "/placeholder-avatar.png",
    title: "Founder portrait",
    category: "FOUNDER",
    year: 2026,
    aspectRatio: "portrait",
  },
  {
    id: "founder-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Team discussion",
    category: "FOUNDER",
    year: 2025,
    aspectRatio: "landscape",
  },
  {
    id: "founder-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Product launch moment",
    category: "FOUNDER",
    year: 2025,
    aspectRatio: "landscape",
  },
  {
    id: "art-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "Visual experiment",
    category: "ART",
    year: 2025,
    aspectRatio: "square",
  },
  {
    id: "art-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Creative coding output",
    category: "ART",
    year: 2026,
    aspectRatio: "landscape",
  },
  {
    id: "art-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Branding exploration",
    category: "ART",
    year: 2025,
    aspectRatio: "portrait",
  },
  {
    id: "personal-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "Workspace view",
    category: "PERSONAL",
    year: 2026,
    aspectRatio: "landscape",
  },
  {
    id: "personal-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Morning coffee",
    category: "PERSONAL",
    year: 2025,
    aspectRatio: "square",
  },
  {
    id: "personal-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Travel capture",
    category: "PERSONAL",
    year: 2025,
    aspectRatio: "landscape",
  },
  {
    id: "moment-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "First deployment",
    category: "MOMENTS",
    year: 2024,
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "moment-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Celebrating launch",
    category: "MOMENTS",
    year: 2025,
    aspectRatio: "portrait",
  },
  {
    id: "moment-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Small win screenshot",
    category: "MOMENTS",
    year: 2026,
    aspectRatio: "landscape",
  },
];
```

- [ ] **Step 2: Verify file compiles**

Run: `npx tsc --noEmit src/app/constants/gallery.ts`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/app/constants/gallery.ts
git commit -m "feat: add gallery data types and placeholder items"
```

---

### Task 2: Extend Navbar for Route Links

**Files:**
- Modify: `src/components/sections/navbar.tsx`

**Interfaces:**
- Consumes: None (standalone modification)
- Produces: Navbar supports `type: "hash" | "route"` in nav items, gallery link added

- [ ] **Step 1: Read the existing navbar**

Read `src/components/sections/navbar.tsx` to understand the current structure.

- [ ] **Step 2: Update navItems to include type field and gallery link**

Find the `navItems` array and update it:

```ts
const navItems = [
  { name: "skills", href: "#skills", type: "hash" as const },
  { name: "projects", href: "#projects", type: "hash" as const },
  { name: "contact", href: "#contact", type: "hash" as const },
  { name: "gallery", href: "/gallery", type: "route" as const },
];
```

- [ ] **Step 3: Add `Link` import from next/link**

Add at the top of the file (if not already imported):

```ts
import Link from "next/link";
```

- [ ] **Step 4: Update the nav link rendering logic**

In the `navItems.map()` block, differentiate between hash and route links. Hash links use `<button>` with `scrollIntoView`. Route links use `<Link>`:

```tsx
{navItems.map((item) => (
  <div key={item.name} className="relative">
    {item.type === "route" ? (
      <Link
        href={item.href}
        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
      >
        <span className="inline-flex" aria-hidden="true">
          {item.name.split("").map((letter, i) => (
            <span key={i} className="relative inline-block overflow-hidden">
              <span className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-80">
                {letter}
              </span>
              <span className="absolute inset-0 inline-block translate-y-full text-[hsl(var(--link))] opacity-0 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: `${i * 30}ms` }}>
                {letter}
              </span>
            </span>
          ))}
        </span>
        <span className="sr-only">{item.name}</span>
      </Link>
    ) : (
      <button
        onClick={() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: "instant" });
        }}
        className="group text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
      >
        <span className="inline-flex" aria-hidden="true">
          {item.name.split("").map((letter, i) => (
            <span key={i} className="relative inline-block overflow-hidden">
              <span className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-80">
                {letter}
              </span>
              <span className="absolute inset-0 inline-block translate-y-full text-[hsl(var(--link))] opacity-0 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: `${i * 30}ms` }}>
                {letter}
              </span>
            </span>
          ))}
        </span>
        <span className="sr-only">{item.name}</span>
      </button>
    )}
  </div>
))}
```

- [ ] **Step 5: Verify no lint errors**

Run: `npm run lint`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/navbar.tsx
git commit -m "feat: extend navbar to support route links, add gallery"
```

---

### Task 3: Category Filter Component

**Files:**
- Create: `src/components/ui/category-filter.tsx`

**Interfaces:**
- Consumes: `GalleryCategory` type, `GALLERY_CATEGORIES` array from `src/app/constants/gallery.ts`
- Produces: `<CategoryFilter activeCategory, onCategoryChange />`

- [ ] **Step 1: Create the CategoryFilter component**

```tsx
"use client";

import { GALLERY_CATEGORIES, type GalleryCategory } from "@/app/constants/gallery";

interface CategoryFilterProps {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="border-b border-dashed border-border">
      <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-none">
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`shrink-0 rounded-[var(--radius)] px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              activeCategory === category
                ? "bg-foreground text-background"
                : "border border-border text-muted-foreground hover:border-border-hover hover:text-foreground"
            }`}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add scrollbar-none utility to globals.css**

Add to `src/app/globals.css` in the `@layer utilities` section:

```css
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
```

- [ ] **Step 3: Verify no lint errors**

Run: `npm run lint`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/category-filter.tsx src/app/globals.css
git commit -m "feat: add category filter component with scrollable pills"
```

---

### Task 4: Gallery Item Card Component

**Files:**
- Create: `src/components/ui/gallery-item.tsx`

**Interfaces:**
- Consumes: `GalleryItem` type from `src/app/constants/gallery.ts`
- Produces: `<GalleryItemCard item, onClick />`

- [ ] **Step 1: Create the GalleryItemCard component**

```tsx
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { GalleryItem } from "@/app/constants/gallery";

interface GalleryItemCardProps {
  item: GalleryItem;
  onClick: () => void;
}

const aspectRatioClasses = {
  landscape: "aspect-video",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function GalleryItemCard({ item, onClick }: GalleryItemCardProps) {
  const aspectClass = aspectRatioClasses[item.aspectRatio ?? "landscape"];

  return (
    <button
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-[var(--radius)] border border-border bg-background transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.015] hover:border-border-hover focus-visible:ring-2 focus-visible:ring-[hsl(var(--link))] focus-visible:outline-none ${
        item.featured ? "col-span-2" : ""
      }`}
      aria-label={`View: ${item.title ?? item.category}`}
    >
      <div className={`relative ${aspectClass} overflow-hidden`}>
        <Image
          src={item.src}
          alt={item.title ?? `${item.category} item`}
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
          sizes={
            item.featured
              ? "(max-width: 768px) 100vw, 768px"
              : "(max-width: 768px) 100vw, 384px"
          }
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-1 text-sm font-medium text-foreground">
            {item.title ?? item.category}
            <ArrowUpRight className="h-4 w-4" />
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            {item.category}
            {item.year && <span> · {item.year}</span>}
          </div>
        </div>
      </div>

      {/* Metadata below media */}
      {(item.title || item.year) && (
        <div className="p-3">
          {item.title && (
            <p className="text-sm font-medium text-foreground">{item.title}</p>
          )}
          <p className="text-xs text-muted-foreground">
            {item.category}
            {item.year && <span> · {item.year}</span>}
          </p>
        </div>
      )}
    </button>
  );
}
```

- [ ] **Step 2: Verify no lint errors**

Run: `npm run lint`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/gallery-item.tsx
git commit -m "feat: add gallery item card with hover overlay and metadata"
```

---

### Task 5: Gallery Lightbox Component

**Files:**
- Create: `src/components/ui/gallery-lightbox.tsx`

**Interfaces:**
- Consumes: `GalleryItem` type from `src/app/constants/gallery.ts`
- Produces: `<GalleryLightbox items, currentIndex, onClose, onNavigate />`

- [ ] **Step 1: Create the GalleryLightbox component**

```tsx
"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/app/constants/gallery";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const item = items[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(currentIndex + 1);
    },
    [onClose, onNavigate, currentIndex, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-[var(--radius)] border border-border bg-background p-2 text-foreground transition-colors hover:border-border-hover"
        aria-label="Close viewer"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Counter */}
      <div className="absolute right-4 top-4 z-10 mr-14 text-xs text-muted-foreground">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Previous button */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          className="absolute left-4 z-10 rounded-[var(--radius)] border border-border bg-background p-2 text-foreground transition-colors hover:border-border-hover"
          aria-label="Previous item"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          className="absolute right-4 z-10 rounded-[var(--radius)] border border-border bg-background p-2 text-foreground transition-colors hover:border-border-hover"
          aria-label="Next item"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Media content */}
      <div
        className="relative max-h-[80vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            className="max-h-[80vh] max-w-[90vw] rounded-[var(--radius)] object-contain"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.title ?? `${item.category} item`}
            width={1200}
            height={800}
            className="max-h-[80vh] w-auto rounded-[var(--radius)] object-contain"
            priority
          />
        )}
      </div>

      {/* Info bar */}
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-center">
        {item.title && (
          <p className="text-sm font-medium text-foreground">{item.title}</p>
        )}
        <p className="text-xs text-muted-foreground">
          {item.category}
          {item.year && <span> · {item.year}</span>}
        </p>
        {item.externalLinks && item.externalLinks.length > 0 && (
          <div className="mt-2 flex gap-3 justify-center">
            {item.externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[hsl(var(--link))] hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify no lint errors**

Run: `npm run lint`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/gallery-lightbox.tsx
git commit -m "feat: add gallery lightbox with keyboard navigation"
```

---

### Task 6: Main Gallery Section Component

**Files:**
- Create: `src/components/sections/gallery.tsx`

**Interfaces:**
- Consumes: `GalleryItem`, `GALLERY_ITEMS` from `src/app/constants/gallery.ts`, `CategoryFilter` from `src/components/ui/category-filter.tsx`, `GalleryItemCard` from `src/components/ui/gallery-item.tsx`, `GalleryLightbox` from `src/components/ui/gallery-lightbox.tsx`
- Produces: `<Gallery />` — the full gallery section with hero, filter, grid, and lightbox

- [ ] **Step 1: Create the Gallery section component**

```tsx
"use client";

import { useState, useMemo } from "react";
import { GALLERY_ITEMS, type GalleryCategory } from "@/app/constants/gallery";
import { CategoryFilter } from "@/components/ui/category-filter";
import { GalleryItemCard } from "@/components/ui/gallery-item";
import { GalleryLightbox } from "@/components/ui/gallery-lightbox";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "ALL") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* Hero */}
      <div className="p-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold">gallery.</h2>
        <p className="mt-2 text-muted-foreground">
          A collection of things
          <br />
          I&apos;ve built, captured,
          <br />
          and kept along the way.
        </p>
      </div>

      {/* Category Filter */}
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Grid */}
      <div className="p-4">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredItems.map((item, index) => (
              <GalleryItemCard
                key={item.id}
                item={item}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              Nothing here yet.
            </p>
            <p className="text-muted-foreground mt-1">
              Probably building something for it.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
```

- [ ] **Step 2: Verify no lint errors**

Run: `npm run lint`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/gallery.tsx
git commit -m "feat: add main gallery section with filtering and lightbox"
```

---

### Task 7: Gallery Page

**Files:**
- Create: `src/app/gallery/page.tsx`

**Interfaces:**
- Consumes: `Gallery` from `src/components/sections/gallery.tsx`, `SectionSeparator` from `src/components/ui/section-separator.tsx`
- Produces: `/gallery` route

- [ ] **Step 1: Create the gallery page**

```tsx
import { SectionSeparator } from "@/components/ui/section-separator";
import { Gallery } from "@/components/sections/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Janvi",
  description: "A collection of things I've built, captured, and kept along the way.",
};

export default function GalleryPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center relative px-2">
      <main className="relative z-10 max-w-3xl w-full mx-auto border-x border-dashed border-border bg-background">
        <SectionSeparator />
        <Gallery />
        <SectionSeparator />
      </main>
    </div>
  );
}
```

- [ ] **Step 2: Verify page loads**

Run: `npm run dev`
Open: http://localhost:3000/gallery
Expected: Gallery page renders with hero, filter, grid, and placeholder items

- [ ] **Step 3: Verify lint and build**

Run: `npm run lint && npm run build`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/app/gallery/page.tsx
git commit -m "feat: add gallery page route at /gallery"
```

---

### Task 8: Integration Verification

**Files:**
- None (verification only)

**Interfaces:**
- Consumes: All previous tasks
- Produces: Confirmed working gallery with all features

- [ ] **Step 1: Verify navbar gallery link works**

Run: `npm run dev`
Open: http://localhost:3000
Click "gallery" in the navbar
Expected: Navigates to `/gallery`, letter animation works on hover

- [ ] **Step 2: Verify category filtering**

On `/gallery`, click each category pill
Expected: Grid filters to show only items in that category, "ALL" shows everything

- [ ] **Step 3: Verify gallery item hover**

Hover over a gallery card
Expected: Subtle scale (1.015), overlay appears with title, category, year, arrow icon

- [ ] **Step 4: Verify lightbox opens**

Click a gallery card
Expected: Lightbox modal opens with the image, title, category, year, counter

- [ ] **Step 5: Verify keyboard navigation**

With lightbox open:
- Press Escape → closes
- Press Arrow Right → next item
- Press Arrow Left → previous item

- [ ] **Step 6: Verify mobile layout**

Resize to < 640px width
Expected: Single column grid, horizontally scrollable category filters, no horizontal page scroll

- [ ] **Step 7: Verify dark/light mode**

Toggle theme on `/gallery`
Expected: All gallery elements respect the theme, no visual glitches

- [ ] **Step 8: Verify reduced motion**

Enable `prefers-reduced-motion: reduce` in browser dev tools
Expected: Animations are disabled, gallery still functional

- [ ] **Step 9: Verify existing pages unchanged**

Visit http://localhost:3000
Expected: Home page looks exactly the same as before

- [ ] **Step 10: Verify production build**

Run: `npm run build && npm run start`
Expected: Build succeeds, gallery works in production mode

- [ ] **Step 11: Final lint check**

Run: `npm run lint`
Expected: PASS with no errors
