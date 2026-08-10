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
