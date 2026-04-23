"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar158(props: BlockProps) {
  const {
    theme,
    heading = "Shopsmith",
    logoUrl,
    navLinks = [
      { label: "New", url: "#" },
      { label: "Women", url: "#" },
      { label: "Men", url: "#" },
      { label: "Sale", url: "#" },
    ],
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
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white py-1 pl-1 pr-3 text-sm font-medium text-gray-700 hover:bg-gray-50 md:flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 text-xs font-bold text-white">JD</span>
              <span>Jordan</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
              ))}
              <a href="#" className="mt-2 flex items-center gap-2 text-sm font-medium">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 text-xs font-bold text-white">JD</span>
                Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
