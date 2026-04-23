"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar033(props: BlockProps) {
  const {
    theme,
    heading = "Heritage Review",
    logoUrl,
    subheading = "Est. 1998",
    navLinks = [
      { label: "Opinion", url: "#" },
      { label: "Business", url: "#" },
      { label: "Culture", url: "#" },
      { label: "Tech", url: "#" },
      { label: "Sports", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-1 py-6 text-center">
          <a href="#" className="font-serif text-3xl font-bold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-10 w-auto" /> : heading}
          </a>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{subheading}</p>
        </div>
        <div className="hidden border-y border-gray-300 md:block">
          <div className="flex items-center justify-center gap-10 py-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-xs font-semibold uppercase tracking-widest text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center border-t border-gray-200 py-3 md:hidden">
          <button className="flex items-center gap-2 text-sm font-medium" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? "Close" : "Sections"}
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col items-center gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-xs font-semibold uppercase tracking-widest text-gray-700">{link.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
