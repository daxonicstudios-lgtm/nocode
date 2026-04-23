"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar037(props: BlockProps) {
  const {
    theme,
    heading = "Commons",
    logoUrl,
    navLinks = [
      { label: "All", url: "#" },
      { label: "Popular", url: "#" },
      { label: "Trending", url: "#" },
      { label: "New", url: "#" },
      { label: "Tech", url: "#" },
      { label: "Design", url: "#" },
      { label: "Culture", url: "#" },
      { label: "Money", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="text-lg font-bold">{logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}</a>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden gap-8 overflow-x-auto pb-3 pt-1 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.url}
              className={`shrink-0 text-sm font-medium ${i === 0 ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
              style={i === 0 ? { color: theme?.primary } : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
