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
