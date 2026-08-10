"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { GalleryItem } from "@/app/constants/gallery";

interface GalleryItemCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export function GalleryItemCard({ item, onClick }: GalleryItemCardProps) {
  const sizeClasses: Record<string, string> = {
    sm: "",
    md: "",
    lg: "sm:col-span-2",
    wide: "sm:col-span-2",
    tall: "sm:row-span-2",
  };

  return (
    <button
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-[var(--radius)] border border-border bg-background transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.015] hover:border-border-hover focus-visible:ring-2 focus-visible:ring-[hsl(var(--link))] focus-visible:outline-none ${sizeClasses[item.size ?? "sm"]}`}
      aria-label={`View: ${item.title ?? item.category}`}
    >
      <div className="relative w-full h-full overflow-hidden min-h-[180px]">
        <Image
          src={item.src}
          alt={item.title ?? `${item.category} item`}
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 384px"
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
    </button>
  );
}
