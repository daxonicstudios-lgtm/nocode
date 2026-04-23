"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar024(props: BlockProps) {
  const {
    theme,
    heading = "Globetrek",
    logoUrl,
    navLinks = [
      { label: "Destinations", url: "#" },
      { label: "Tours", url: "#" },
      { label: "Stays", url: "#" },
      { label: "Deals", url: "#" },
    ],
    buttonText = "Book",
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
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 md:inline-flex" aria-label="Language">
              <Globe className="h-4 w-4" />
              EN
            </button>
            <a
              href={buttonUrl}
              className="hidden rounded-full px-5 py-2 text-sm font-semibold text-white md:inline-block"
              style={{ backgroundColor: theme?.primary || "#0ea5e9" }}
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
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">
                  {link.label}
                </a>
              ))}
              <button className="flex items-center gap-1.5 text-sm text-gray-700">
                <Globe className="h-4 w-4" /> EN
              </button>
              <a href={buttonUrl} className="mt-1 rounded-full px-5 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#0ea5e9" }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
