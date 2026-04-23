"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar048(props: BlockProps) {
  const {
    theme,
    heading = "Vantage",
    subheading = "A private members club",
    logoUrl,
    navLinks = [
      { label: "About", url: "#" },
      { label: "Membership", url: "#" },
      { label: "Events", url: "#" },
      { label: "Contact", url: "#" },
    ],
    buttonText = "Apply",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 py-8">
          <a href="#" className="font-serif text-2xl tracking-[0.25em]">{logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}</a>
          <p className="text-xs text-gray-500">{subheading}</p>
          <div className="hidden flex-wrap items-center justify-center gap-8 pt-2 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-xs uppercase tracking-[0.25em] text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
          </div>
          <a href={buttonUrl} className="mt-2 hidden rounded-full border border-gray-900 px-6 py-2 text-xs uppercase tracking-[0.25em] hover:bg-gray-900 hover:text-white md:inline-block" style={{ borderColor: theme?.primary, color: theme?.primary }}>
            {buttonText}
          </a>
          <button className="mt-2 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col items-center gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-xs uppercase tracking-[0.25em] text-gray-700">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full border border-gray-900 px-6 py-2 text-xs uppercase tracking-[0.25em]" style={{ borderColor: theme?.primary, color: theme?.primary }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
