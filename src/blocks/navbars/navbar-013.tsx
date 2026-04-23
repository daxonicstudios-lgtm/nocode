"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar013(props: BlockProps) {
  const {
    theme,
    heading = "Prism",
    logoUrl,
    navLinks = [
      { label: "Create", url: "#" },
      { label: "Learn", url: "#" },
      { label: "Community", url: "#" },
      { label: "Pricing", url: "#" },
    ],
    buttonText = "Launch",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  const gradientBg = theme?.primary && theme?.accent ? `linear-gradient(90deg, ${theme.primary}, ${theme.accent})` : undefined;

  return (
    <nav className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white" style={{ backgroundImage: gradientBg }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-extrabold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-semibold text-white/90 hover:text-white">
                {link.label}
              </a>
            ))}
            <a href={buttonUrl} className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-white/30">
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
                <a key={link.label} href={link.url} className="text-sm font-semibold text-white/90">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full bg-white/20 px-4 py-2 text-center text-sm font-semibold backdrop-blur">
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
