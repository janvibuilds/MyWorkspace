"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KeyboardShortcuts() {
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;

      if (
        e.repeat ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        target?.isContentEditable ||
        /^(INPUT|TEXTAREA|SELECT)$/.test(target?.tagName ?? "")
      ) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case "s":
          document.getElementById("skills")?.scrollIntoView({ behavior: "instant" });
          break;
        case "c":
          document.getElementById("contact")?.scrollIntoView({ behavior: "instant" });
          break;
        case "p":
          document.getElementById("projects")?.scrollIntoView({ behavior: "instant" });
          break;
        case "g":
          router.push("/gallery");
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return null;
}
