"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar096(props: BlockProps) {
  const {
    theme,
    heading = "Acme",
    logoUrl,
    navLinks = [
      { label: "Home", url: "#" },
      { label: "About", url: "#" },
      { label: "Services", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);
  const half = Math.ceil(navLinks.length / 2);
  const left = navLinks.slice(0, half);
  const right = navLinks.slice(half);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-20 grid-cols-3 items-center">
          <div className="hidden items-center gap-6 md:flex">
            {left.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium uppercase tracking-wider text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
          </div>
          <div className="md:hidden" />
          <a href="#" className="flex items-center justify-center text-xl font-black tracking-tight md:justify-center">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center justify-end gap-6 md:flex">
            {right.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium uppercase tracking-wider text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
          </div>
          <button className="justify-self-end p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
