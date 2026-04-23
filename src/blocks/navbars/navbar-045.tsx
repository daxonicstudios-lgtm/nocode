"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar045(props: BlockProps) {
  const {
    theme,
    heading = "The Observer",
    subheading = "Weekly, since 1932",
    logoUrl,
    navLinks = [
      { label: "Features", url: "#" },
      { label: "Essays", url: "#" },
      { label: "Reviews", url: "#" },
      { label: "Archive", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b-4 border-double border-gray-900 bg-[#fdf6e3]" style={{ backgroundColor: theme?.background || "#fdf6e3", color: theme?.foreground || "#111827", borderColor: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <div>
            <a href="#" className="block font-serif text-3xl font-black italic">
              {logoUrl ? <img src={logoUrl} alt={heading} className="h-10 w-auto" /> : heading}
            </a>
            <p className="text-xs italic text-gray-600">{subheading}</p>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="font-serif text-sm italic text-gray-800 hover:underline">{link.label}</a>
            ))}
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-900/20 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="font-serif text-sm italic text-gray-800">{link.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
