"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar002(props: BlockProps) {
  const {
    theme,
    heading = "Obsidian",
    logoUrl,
    navLinks = [
      { label: "Product", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Docs", url: "#" },
      { label: "Blog", url: "#" },
    ],
    buttonText = "Sign in",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-950 text-white" style={{ backgroundColor: theme?.foreground, color: theme?.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm text-gray-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-gray-950"
              style={{ borderColor: theme?.primary }}
            >
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm text-gray-300">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full border border-white/20 px-5 py-2 text-center text-sm">
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
