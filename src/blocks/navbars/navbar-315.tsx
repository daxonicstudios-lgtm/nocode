"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar315(props: BlockProps) {
  const {
    theme,
    heading = "North Star",
    logoUrl,
    navLinks = [
      { label: "Work", url: "#" },
      { label: "Services", url: "#" },
      { label: "About", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);
  const path = navLinks.slice(0, 3);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="text-base font-semibold tracking-tight">
              {logoUrl ? <img src={logoUrl} alt={heading} className="h-6 w-auto" /> : heading}
            </a>
            <span className="hidden text-gray-300 sm:inline">/</span>
            <ol className="hidden items-center gap-1.5 text-sm text-gray-600 sm:flex">
              {path.map((p, i) => (
                <li key={p.label} className="flex items-center gap-1.5">
                  <a href={p.url} className={i === path.length - 1 ? "font-medium text-gray-900" : "hover:text-gray-900"}>{p.label}</a>
                  {i < path.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-gray-400" />}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-xs font-bold text-white md:flex">JD</span>
            <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="font-medium text-gray-700">{link.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
