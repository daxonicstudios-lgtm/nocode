"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar283(props: BlockProps) {
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
    secondaryButtonText = "Schedule",
    secondaryButtonUrl = "#",
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
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <a href={secondaryButtonUrl} className="rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">{secondaryButtonText}</a>
            <a href={buttonUrl} className="rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
              ))}
              <a href={secondaryButtonUrl} className="mt-2 rounded-md border border-gray-200 px-4 py-2 text-center text-sm font-semibold text-gray-800">{secondaryButtonText}</a>
              <a href={buttonUrl} className="rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
