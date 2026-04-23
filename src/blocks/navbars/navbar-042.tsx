"use client";

import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar042(props: BlockProps) {
  const {
    theme,
    heading = "Rootwise",
    logoUrl,
    navLinks = [
      { label: "Shop", url: "#" },
      { label: "Sourcing", url: "#" },
      { label: "Sustainability", url: "#" },
      { label: "Blog", url: "#" },
    ],
    buttonText = "Our mission",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-emerald-50" style={{ backgroundColor: theme?.background || "#ecfdf5", color: theme?.foreground || "#064e3b" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-lg font-bold">
            <Leaf className="h-5 w-5" style={{ color: theme?.primary || "#059669" }} />
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium hover:opacity-70">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#064e3b" }}>
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-emerald-900/10 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#064e3b" }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
