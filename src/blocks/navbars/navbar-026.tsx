"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar026(props: BlockProps) {
  const {
    theme,
    heading = "Northside Dental",
    logoUrl,
    navLinks = [
      { label: "Services", url: "#" },
      { label: "Team", url: "#" },
      { label: "New Patients", url: "#" },
      { label: "Reviews", url: "#" },
    ],
    buttonText = "+1 (555) 123-4567",
    buttonUrl = "tel:+15551234567",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
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
          </div>
          <a
            href={buttonUrl}
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white md:inline-flex"
            style={{ backgroundColor: theme?.primary || "#059669" }}
          >
            <Phone className="h-4 w-4" />
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
              <a href={buttonUrl} className="mt-2 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#059669" }}>
                <Phone className="h-4 w-4" /> {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
