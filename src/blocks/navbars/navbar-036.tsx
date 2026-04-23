"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar036(props: BlockProps) {
  const {
    theme,
    heading = "Stack",
    logoUrl,
    navLinks = [
      { label: "Product", url: "#" },
      { label: "Solutions", url: "#" },
      { label: "Resources", url: "#" },
      { label: "Company", url: "#" },
    ],
    buttonText = "Start free",
    buttonUrl = "#",
    secondaryButtonText = "Log in",
    secondaryButtonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold">{logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}</a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <button key={link.label} className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                {link.label}
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href={secondaryButtonUrl} className="text-sm font-medium text-gray-700 hover:text-gray-900">{secondaryButtonText}</a>
            <a href={buttonUrl} className="rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>
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
                <a key={link.label} href={link.url} className="flex items-center justify-between text-sm font-medium text-gray-700">
                  {link.label}
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </a>
              ))}
              <a href={secondaryButtonUrl} className="text-sm font-medium text-gray-700">{secondaryButtonText}</a>
              <a href={buttonUrl} className="mt-1 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
