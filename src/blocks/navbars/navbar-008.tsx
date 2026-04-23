"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar008(props: BlockProps) {
  const {
    theme,
    heading = "Atlas",
    logoUrl,
    navLinks = [
      { label: "Discover", url: "#" },
      { label: "Routes", url: "#" },
      { label: "Destinations", url: "#" },
      { label: "About", url: "#" },
    ],
    buttonText = "Plan a trip",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="absolute left-0 right-0 top-0 z-50 w-full border-b border-white/20 bg-transparent text-white"
      style={{ color: theme?.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-wide">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-white/90 hover:text-white">
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="rounded-md border border-white bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-gray-900"
            >
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/20 bg-black/60 py-4 backdrop-blur md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-white/90">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-md border border-white px-4 py-2 text-center text-sm font-semibold text-white">
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
