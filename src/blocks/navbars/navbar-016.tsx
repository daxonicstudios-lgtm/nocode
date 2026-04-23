"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar016(props: BlockProps) {
  const {
    theme,
    heading = "Maison",
    logoUrl,
    navLinks = [
      { label: "Collection", url: "#" },
      { label: "Editorial", url: "#" },
      { label: "Heritage", url: "#" },
      { label: "Boutiques", url: "#" },
    ],
    buttonText = "Account",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="font-serif text-2xl italic tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="font-sans text-xs uppercase tracking-[0.2em] text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
          <a href={buttonUrl} className="hidden font-sans text-xs uppercase tracking-[0.2em] text-gray-700 hover:text-gray-900 md:block">
            {buttonText}
          </a>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="mt-4 border-t border-gray-200 pt-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="font-sans text-xs uppercase tracking-[0.2em] text-gray-700">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="font-sans text-xs uppercase tracking-[0.2em] text-gray-700">
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
