"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar031(props: BlockProps) {
  const {
    theme,
    heading = "Cedar & Co.",
    logoUrl,
    navLinks = [
      { label: "Menu", url: "#" },
      { label: "Reserve", url: "#" },
      { label: "Events", url: "#" },
      { label: "Gift cards", url: "#" },
    ],
    buttonText = "Reserve a table",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="hidden bg-gray-950 py-2 text-sm text-gray-200 md:block" style={{ backgroundColor: theme?.foreground, color: theme?.background }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> (555) 234-0000</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> hello@cedar.co</span>
          </div>
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> 12 Market Street, Lagos</span>
        </div>
      </div>
      <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-lg font-semibold">
              {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
            </a>
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#a16207" }}>
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
                  <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
                ))}
                <a href={buttonUrl} className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#a16207" }}>
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
