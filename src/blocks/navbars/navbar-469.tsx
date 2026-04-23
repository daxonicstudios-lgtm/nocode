"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar469(props: BlockProps) {
  const {
    theme,
    heading = "Tribune",
    logoUrl,
    navLinks = [
      { label: "World", url: "#" },
      { label: "Politics", url: "#" },
      { label: "Tech", url: "#" },
      { label: "Culture", url: "#" },
    ],
    buttonText = "Subscribe",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link, i) => (
              <a key={link.label} href={link.url} className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                {link.label}
                {i === navLinks.length - 1 && <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-700">New</span>}
              </a>
            ))}
            <a href={buttonUrl} className="rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <a key={link.label} href={link.url} className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                  {link.label}
                  {i === navLinks.length - 1 && <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-700">New</span>}
                </a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
