"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar041(props: BlockProps) {
  const {
    theme,
    heading = "Solene",
    logoUrl,
    navLinks = [
      { label: "Fragrance", url: "#" },
      { label: "Skincare", url: "#" },
      { label: "Heritage", url: "#" },
      { label: "Journal", url: "#" },
    ],
    buttonText = "Discover",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0b0b0b] text-[#c8a866]" style={{ backgroundColor: theme?.foreground || "#0b0b0b", color: theme?.primary || "#c8a866" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="font-serif text-2xl italic">{logoUrl ? <img src={logoUrl} alt={heading} className="h-9 w-auto" /> : heading}</a>
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-xs uppercase tracking-[0.3em] opacity-80 hover:opacity-100">{link.label}</a>
            ))}
            <a href={buttonUrl} className="border border-current px-5 py-2 text-xs uppercase tracking-[0.3em] hover:bg-current hover:text-black">
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-current/20 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-xs uppercase tracking-[0.3em]">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 border border-current px-5 py-2 text-center text-xs uppercase tracking-[0.3em]">{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
