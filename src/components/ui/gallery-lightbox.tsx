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