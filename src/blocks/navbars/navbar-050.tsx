"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar050(props: BlockProps) {
  const {
    theme,
    heading = "Folio",
    logoUrl,
    navLinks = [
      { label: "Home", url: "#" },
      { label: "Projects", url: "#" },
      { label: "Writing", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-medium">{logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}</a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="group relative text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
