import SectionSeparator from "@/components/ui/section-separator";
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
