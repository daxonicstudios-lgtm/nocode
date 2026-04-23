"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar257(props: BlockProps) {
  const {
    theme,
    heading = "Wander",
    logoUrl,
    navLinks = [
      { label: "Destinations", url: "#" },
      { label: "Tours", url: "#" },
      { label: "Deals", url: "#" },
      { label: "Blog", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300 bg-[#fdfcf7]" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="font-serif text-2xl italic tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="font-serif text-sm italic text-gray-800 hover:text-black">
                {link.label}
              </a>
            ))}
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-300 py-4 md:hidden">
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
