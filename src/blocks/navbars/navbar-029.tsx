"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar029(props: BlockProps) {
  const {
    theme,
    heading = "Greenhaus",
    logoUrl,
    navLinks = [
      { label: "Plants", url: "#" },
      { label: "Pots", url: "#" },
      { label: "Care", url: "#" },
      { label: "Gift cards", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="relative rounded-full p-2 text-gray-700 hover:bg-gray-100" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span
                className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ backgroundColor: theme?.primary || "#059669" }}
              >
                2
              </span>
            </a>
            <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
