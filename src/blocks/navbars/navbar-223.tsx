"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar223(props: BlockProps) {
  const {
    theme,
    heading = "Forge",
    logoUrl,
    navLinks = [
      { label: "Classes", url: "#" },
      { label: "Trainers", url: "#" },
      { label: "Plans", url: "#" },
      { label: "Shop", url: "#" },
    ],
    buttonText = "Join Now",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-50 py-4" style={{ color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <a href="#" className="ml-2 text-lg font-bold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href={buttonUrl} className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white md:inline-block" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
            <button className="p-1.5 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-gray-200 bg-white p-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
