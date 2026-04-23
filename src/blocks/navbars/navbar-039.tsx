"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar039(props: BlockProps) {
  const {
    theme,
    heading = "Grand",
    logoUrl,
    navLinks = [
      { label: "Rooms", url: "#" },
      { label: "Dining", url: "#" },
      { label: "Spa", url: "#" },
      { label: "Events", url: "#" },
    ],
    buttonText = "Book your stay",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-24 items-center justify-between">
          <a href="#" className="font-serif text-3xl tracking-tight">{logoUrl ? <img src={logoUrl} alt={heading} className="h-12 w-auto" /> : heading}</a>
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-none border-b-2 border-gray-900 pb-1 text-sm uppercase tracking-[0.2em]" style={{ borderColor: theme?.primary, color: theme?.primary }}>
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-6 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm uppercase tracking-[0.2em] text-gray-700">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 inline-block border-b-2 border-gray-900 pb-1 text-sm uppercase tracking-[0.2em]" style={{ borderColor: theme?.primary, color: theme?.primary }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
