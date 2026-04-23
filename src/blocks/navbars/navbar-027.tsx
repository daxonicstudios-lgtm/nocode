"use client";

import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar027(props: BlockProps) {
  const {
    theme,
    heading = "Consult Co",
    logoUrl,
    navLinks = [
      { label: "Practice", url: "#" },
      { label: "Insights", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Contact", url: "#" },
    ],
    buttonText = "hello@consult.co",
    buttonUrl = "mailto:hello@consult.co",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
          <a href={buttonUrl} className="hidden items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 md:inline-flex">
            <Mail className="h-4 w-4" />
            {buttonText}
          </a>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Mail className="h-4 w-4" /> {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
