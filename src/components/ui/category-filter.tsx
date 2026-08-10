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
