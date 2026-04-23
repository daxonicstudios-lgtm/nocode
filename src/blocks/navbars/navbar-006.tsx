"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar006(props: BlockProps) {
  const {
    theme,
    heading = "Helios",
    logoUrl,
    navLinks = [
      { label: "Home", url: "#" },
      { label: "Solutions", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Support", url: "#" },
    ],
    buttonText = "Book a demo",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                className={`relative pb-1 text-sm font-medium text-gray-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:text-gray-900 hover:after:scale-x-100 ${i === 0 ? "after:scale-x-100" : ""}`}
                style={i === 0 ? { color: theme?.primary } : undefined}
              >
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="rounded-md px-4 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: theme?.primary || "#2563eb" }}
            >
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
