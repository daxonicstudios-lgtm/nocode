"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar009(props: BlockProps) {
  const {
    theme,
    heading = "Mercuria",
    logoUrl,
    bodyText = "Free shipping on orders over $50. No code needed.",
    navLinks = [
      { label: "Shop", url: "#" },
      { label: "Collections", url: "#" },
      { label: "Sale", url: "#" },
      { label: "About", url: "#" },
    ],
    buttonText = "Cart",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div
        className="w-full py-2 text-center text-xs font-medium text-white"
        style={{ backgroundColor: theme?.primary || "#111827" }}
      >
        {bodyText}
      </div>
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
              <a href={buttonUrl} className="text-sm font-semibold underline underline-offset-4" style={{ color: theme?.primary }}>
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
                <a href={buttonUrl} className="text-sm font-semibold underline underline-offset-4" style={{ color: theme?.primary }}>
                  {buttonText}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
