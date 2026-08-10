"use client";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";
import { ABOUT_ME } from "@/app/constants/data";

const STAGGER = 30;

const navItems = [
  { name: "skills", href: "#skills", type: "hash" as const },
  { name: "projects", href: "/projects", type: "route" as const },
  { name: "contact", href: "#contact", type: "hash" as const },
  { name: "gallery", href: "/gallery", type: "route" as const },
];

export default function Navbar() {
  return (
    <nav className="py-2 px-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-foreground">
          {ABOUT_ME.name.split(" ")[0].toLowerCase()}.
        </Link>

        <div className="hidden md:flex items-center justify-end flex-1 gap-6">
          {navItems.map((item) => {
            const letterContent = (
              <span className="inline-flex">
                {item.name.split("").map((letter, i) => (
                  <span
                    key={i}
                    className="relative inline-block overflow-hidden"
                  >
                    <span
                      className="block transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-80"
                      style={{ transitionDelay: `${i * STAGGER}ms` }}
                    >
                      {letter}
                    </span>
                    <span
                      className="block absolute left-0 top-0 font-medium translate-y-full opacity-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0 group-hover:opacity-100"
                      style={{
                        transitionDelay: `${i * STAGGER}ms`,
                        color: "hsl(var(--link))",
                      }}
                    >
                      {letter}
                    </span>
                  </span>
                ))}
              </span>
            );

            if (item.type === "hash") {
              return (
                <button
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.href.substring(1));
                    if (element) element.scrollIntoView({ behavior: "instant" });
                  }}
                  className="relative text-base text-foreground/80 cursor-pointer group"
                >
                  {letterContent}
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-base text-foreground/80 cursor-pointer group"
              >
                {letterContent}
              </Link>
            );
          })}
        </div>

        <div className="ml-6">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
