"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar395(props: BlockProps) {
  const {
    theme,
    heading = "Maison",
    logoUrl,
    navLinks = [
      { label: "Women", url: "#" },
      { label: "Men", url: "#" },
      { label: "Accessories", url: "#" },
      { label: "Journal", url: "#" },
    ],
    buttonText = "Shop",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-transparent pt-4 sm:pt-6">
      <nav className="mx-4 rounded-2xl border border-gray-200 bg-white shadow-xl sm:mx-auto sm:max-w-5xl" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
        <div className="px-5 sm:px-7">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-lg font-bold tracking-tight">
              {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
            </a>
            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">{link.label}</a>
              ))}
              <a href={buttonUrl} className="rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
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
                <a href={buttonUrl} className="mt-2 rounded-full px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
