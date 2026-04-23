"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar030(props: BlockProps) {
  const {
    theme,
    heading = "Signal",
    logoUrl,
    bodyText = "Live",
    navLinks = [
      { label: "Home", url: "#" },
      { label: "Product", url: "#" },
      { label: "Updates", url: "#" },
      { label: "Company", url: "#" },
    ],
    buttonText = "Get early access",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="text-lg font-bold">
              {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
            </a>
            <span className="hidden items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800 sm:inline-flex" style={{ backgroundColor: theme?.accent ? `${theme.accent}22` : undefined, color: theme?.accent }}>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" style={{ backgroundColor: theme?.accent || "#22c55e" }} />
              {bodyText}
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="rounded-md px-4 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: theme?.primary || "#111827" }}
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
              <a href={buttonUrl} className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
