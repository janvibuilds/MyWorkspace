"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Code2,
  Mail,
  FolderOpen,
  Image,
  X,
} from "lucide-react";

const commands = [
  { id: "skills", label: "Skills", icon: Code2, shortcut: "S", action: "scroll" as const, target: "#skills" },
  { id: "projects", label: "Projects", icon: FolderOpen, shortcut: "P", action: "scroll" as const, target: "#projects" },
  { id: "contact", label: "Contact", icon: Mail, shortcut: "C", action: "scroll" as const, target: "#contact" },
  { id: "gallery", label: "Gallery", icon: Image, shortcut: "G", action: "navigate" as const, target: "/gallery" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
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

      if (e.key.toLowerCase() === "j") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setSelected(0);
        return;
      }

      if (open) {
        if (e.key === "Escape") {
          setOpen(false);
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelected((prev) => (prev + 1) % commands.length);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelected((prev) => (prev - 1 + commands.length) % commands.length);
        } else if (e.key === "Enter") {
          e.preventDefault();
          executeCommand(commands[selected]);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, selected, router]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const executeCommand = (cmd: (typeof commands)[number]) => {
    setOpen(false);
    if (cmd.action === "scroll") {
      document.querySelector(cmd.target)?.scrollIntoView({ behavior: "instant" });
    } else {
      router.push(cmd.target);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-background/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-md rounded-[var(--radius)] border border-border bg-background shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command..."
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            readOnly
          />
          <button
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Commands */}
        <div className="p-1">
          {commands.map((cmd, i) => {
            const Icon = cmd.icon;
            return (
              <button
                key={cmd.id}
                onClick={() => executeCommand(cmd)}
                onMouseEnter={() => setSelected(i)}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-sm transition-colors ${
                  selected === i
                    ? "bg-foreground/5 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="flex-1 text-left">{cmd.label}</span>
                <kbd className="text-[10px] font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5">
                  {cmd.shortcut}
                </kbd>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
