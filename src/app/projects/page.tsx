import SectionSeparator from "@/components/ui/section-separator";
import Navbar from "@/components/sections/navbar";
import Projects from "@/components/sections/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Janvi Singhal",
  description:
    "A collection of projects, products, experiments, and things I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center relative px-2">
      <main className="relative z-10 max-w-3xl w-full mx-auto border-x border-dashed border-border bg-background">
        <SectionSeparator />
        <div className="sticky top-0 z-20 bg-background">
          <Navbar />
        </div>
        <SectionSeparator />

        {/* Hero */}
        <div className="p-4 border-b border-dashed border-border">
          <h1 className="text-2xl font-semibold">projects.</h1>
          <p className="mt-2 text-muted-foreground">
            Things I&apos;ve built,
            <br />
            experimented with,
            <br />
            and shipped.
          </p>
        </div>

        {/* All Projects — reuses the same component as the homepage */}
        <Projects title="all projects." />
        <SectionSeparator />
      </main>
    </div>
  );
}
