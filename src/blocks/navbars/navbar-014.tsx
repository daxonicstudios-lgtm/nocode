"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar014(props: BlockProps) {
  const {
    theme,
    heading = "Arc",
    logoUrl,
    navLinks = [
      { label: "Home", url: "#" },
      { label: "Product", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Contact", url: "#" },
    ],
    buttonText = "Try it",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full pt-4 sm:pt-6">
      <nav
        className="mx-auto max-w-5xl rounded-full border border-gray-200 bg-white px-4 shadow-sm sm:px-6"
        style={{ backgroundColor: theme?.background, borderColor: theme?.secondary, color: theme?.foreground }}
      >
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="text-base font-bold">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-6 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="rounded-full px-4 py-1.5 text-sm font-semibold text-white"
              style={{ backgroundColor: theme?.primary || "#111827" }}
            >
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:hidden" style={{ backgroundColor: theme?.background, borderColor: theme?.secondary }}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">
                {link.label}
              </a>
            ))}
            <a href={buttonUrl} className="mt-1 rounded-full px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>
              {buttonText}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
