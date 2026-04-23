"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar083(props: BlockProps) {
  const {
    theme,
    heading = "Shopsmith",
    logoUrl,
    navLinks = [
      { label: "New", url: "#" },
      { label: "Women", url: "#" },
      { label: "Men", url: "#" },
      { label: "Sale", url: "#" },
    ],
    buttonText = "Shop Now",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/60 backdrop-blur-md" style={{ color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-800/90 hover:text-gray-900">
                {link.label}
              </a>
            ))}
            <a href={buttonUrl} className="rounded-full border border-gray-900/10 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur">
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/20 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-800">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full border border-gray-900/10 bg-white/80 px-4 py-2 text-center text-sm font-semibold text-gray-900">
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
