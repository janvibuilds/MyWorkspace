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

export type GallerySize = "sm" | "md" | "lg" | "tall" | "wide";

export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  title?: string;
  description?: string;
  category: GalleryCategory;
  year?: number;
  size?: GallerySize;
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
  // Row 1
  {
    id: "building-1",
    type: "image",
    src: "/OrkaDashboard.png",
    title: "Orka dashboard",
    category: "BUILDING",
    year: 2025,
    size: "lg",
    href: "/projects/orka",
  },
  {
    id: "founder-1",
    type: "image",
    src: "/placeholder-avatar.png",
    title: "Founder portrait",
    category: "FOUNDER",
    year: 2026,
    size: "tall",
  },
  {
    id: "event-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "Web3 conference",
    category: "EVENTS",
    year: 2025,
    size: "sm",
  },
  // Row 2
  {
    id: "moment-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "First deployment",
    category: "MOMENTS",
    year: 2024,
    size: "sm",
  },
  {
    id: "building-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Building SilentPay",
    category: "BUILDING",
    year: 2025,
    size: "wide",
  },
  // Row 3
  {
    id: "art-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "Visual experiment",
    category: "ART",
    year: 2025,
    size: "tall",
  },
  {
    id: "achievement-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "Hackathon winner",
    category: "ACHIEVEMENTS",
    year: 2025,
    size: "lg",
  },
  {
    id: "personal-1",
    type: "image",
    src: "/placeholder-image.png",
    title: "Workspace view",
    category: "PERSONAL",
    year: 2026,
    size: "sm",
  },
  // Row 4
  {
    id: "event-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "University meetup",
    category: "EVENTS",
    year: 2025,
    size: "sm",
  },
  {
    id: "building-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Development setup",
    category: "BUILDING",
    year: 2026,
    size: "md",
  },
  {
    id: "founder-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Team discussion",
    category: "FOUNDER",
    year: 2025,
    size: "sm",
  },
  // Row 5
  {
    id: "personal-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Morning coffee",
    category: "PERSONAL",
    year: 2025,
    size: "wide",
  },
  {
    id: "art-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Creative coding output",
    category: "ART",
    year: 2026,
    size: "tall",
  },
  // Row 6
  {
    id: "achievement-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Builder program",
    category: "ACHIEVEMENTS",
    year: 2025,
    size: "sm",
  },
  {
    id: "moment-2",
    type: "image",
    src: "/placeholder-image.png",
    title: "Celebrating launch",
    category: "MOMENTS",
    year: 2025,
    size: "lg",
  },
  {
    id: "personal-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Travel capture",
    category: "PERSONAL",
    year: 2025,
    size: "sm",
  },
  // Row 7
  {
    id: "event-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Hackathon weekend",
    category: "EVENTS",
    year: 2026,
    size: "sm",
  },
  {
    id: "art-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Branding exploration",
    category: "ART",
    year: 2025,
    size: "md",
  },
  {
    id: "founder-3",
    type: "image",
    src: "/placeholder-image.png",
    title: "Product launch",
    category: "FOUNDER",
    year: 2025,
    size: "sm",
  },
];
