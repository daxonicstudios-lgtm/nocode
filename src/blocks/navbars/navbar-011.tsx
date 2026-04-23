"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar011(props: BlockProps) {
  const {
    theme,
    heading = "Nimbus",
    logoUrl,
    navLinks = [
      { label: "Features", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Customers", url: "#" },
      { label: "Contact", url: "#" },
    ],
    buttonText = "Get started",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-40 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl"
      style={{ backgroundColor: theme?.background ? `${theme.background}b0` : undefined, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-800 hover:text-gray-950">
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: theme?.primary }}
            >
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
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-800">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
