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
