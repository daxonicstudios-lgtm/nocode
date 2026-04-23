"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar003(props: BlockProps) {
  const {
    theme,
    heading = "NORTH STAR",
    logoUrl,
    navLinks = [
      { label: "Shop", url: "#" },
      { label: "About", url: "#" },
      { label: "Journal", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);
  const mid = Math.ceil(navLinks.length / 2);
  const left = navLinks.slice(0, mid);
  const right = navLinks.slice(mid);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between md:justify-center md:gap-12">
          <div className="hidden items-center gap-8 md:flex">
            {left.map((link) => (
              <a key={link.label} href={link.url} className="text-xs font-medium uppercase tracking-widest text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
          <a href="#" className="text-xl font-serif tracking-[0.2em]">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {right.map((link) => (
              <a key={link.label} href={link.url} className="text-xs font-medium uppercase tracking-widest text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="mt-4 border-t border-gray-200 pt-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-xs font-medium uppercase tracking-widest text-gray-700">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
