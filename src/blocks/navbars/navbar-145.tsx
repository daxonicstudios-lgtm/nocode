"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar145(props: BlockProps) {
  const {
    theme,
    heading = "Pierce & Co",
    logoUrl,
    navLinks = [
      { label: "Practice", url: "#" },
      { label: "Team", url: "#" },
      { label: "Results", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-black tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium uppercase tracking-wider text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-700 hover:text-gray-900" aria-label="Search"><Search className="h-5 w-5" /></button>
            <button className="hidden p-2 text-gray-700 hover:text-gray-900 sm:block" aria-label="Wishlist"><Heart className="h-5 w-5" /></button>
            <button className="relative p-2 text-gray-700 hover:text-gray-900" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[1rem] items-center justify-center rounded-full px-1 text-[10px] font-bold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>3</span>
            </button>
            <button className="ml-1 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium uppercase tracking-wider text-gray-700">{link.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
