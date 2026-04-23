"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar004(props: BlockProps) {
  const {
    theme,
    heading = "Lumen",
    logoUrl,
    navLinks = [
      { label: "Features", url: "#" },
      { label: "Integrations", url: "#" },
      { label: "Customers", url: "#" },
      { label: "Resources", url: "#" },
    ],
    buttonText = "Try free",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-16 grid-cols-2 items-center md:grid-cols-3">
          <a href="#" className="text-lg font-semibold">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center justify-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm text-gray-600 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              href={buttonUrl}
              className="hidden rounded-md px-4 py-2 text-sm font-semibold text-white md:inline-block"
              style={{ backgroundColor: theme?.primary || "#111827" }}
            >
              {buttonText}
            </a>
            <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm text-gray-700">
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
