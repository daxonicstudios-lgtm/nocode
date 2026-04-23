"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar124(props: BlockProps) {
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
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="border-b border-gray-100 bg-gray-50 text-xs text-gray-600">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" />+1 (555) 010-0101</span>
            <span className="hidden items-center gap-1.5 sm:flex"><Mail className="h-3.5 w-3.5" />hello@example.com</span>
          </div>
          <div className="hidden gap-4 sm:flex">
            <a href="#" className="hover:text-gray-900">Help</a>
            <a href="#" className="hover:text-gray-900">Sign In</a>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight">
              {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
            </a>
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">{link.label}</a>
              ))}
              <a href={buttonUrl} className="rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
            </div>
            <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {open && (
            <div className="border-t border-gray-100 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
                ))}
                <a href={buttonUrl} className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
