"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar480(props: BlockProps) {
  const {
    theme,
    heading = "North Star",
    logoUrl,
    navLinks = [
      { label: "Work", url: "#" },
      { label: "Services", url: "#" },
      { label: "About", url: "#" },
      { label: "Contact", url: "#" },
    ],
    buttonText = "Book a Call",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-indigo-700 text-white" style={{ backgroundColor: theme?.primary || "#4338ca" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-white/85 hover:text-white">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-700" style={{ color: theme?.primary || "#4338ca" }}>{buttonText}</a>
          </div>
          <button className="p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/20 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-white/85">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-md bg-white px-4 py-2 text-center text-sm font-semibold text-indigo-700" style={{ color: theme?.primary || "#4338ca" }}>{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
