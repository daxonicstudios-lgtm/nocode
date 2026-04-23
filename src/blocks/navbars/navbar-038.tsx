"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar038(props: BlockProps) {
  const {
    theme,
    heading = "Tiny",
    logoUrl,
    navLinks = [
      { label: "Home", url: "#" },
      { label: "Work", url: "#" },
      { label: "Notes", url: "#" },
    ],
    buttonText = "Hire me",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <a href="#" className="text-sm font-semibold">{logoUrl ? <img src={logoUrl} alt={heading} className="h-5 w-auto" /> : heading}</a>
          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-xs text-gray-600 hover:text-gray-900">{link.label}</a>
            ))}
            <a href={buttonUrl} className="text-xs font-semibold" style={{ color: theme?.primary || "#111827" }}>{buttonText} →</a>
          </div>
          <button className="p-1 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-xs text-gray-600">{link.label}</a>
              ))}
              <a href={buttonUrl} className="text-xs font-semibold" style={{ color: theme?.primary || "#111827" }}>{buttonText} →</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
