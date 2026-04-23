"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar240(props: BlockProps) {
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
    buttonText = "Book a Call",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white"
      style={{ backgroundImage: theme?.primary ? `linear-gradient(to right, ${theme.primary}, ${theme.accent || theme.primary})` : undefined }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-white/90 hover:text-white">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-white/90">{buttonText}</a>
          </div>
          <button className="p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/20 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-white/90">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-gray-900">{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
