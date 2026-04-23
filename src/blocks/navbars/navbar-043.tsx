"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar043(props: BlockProps) {
  const {
    theme,
    heading = "NEON★BURGER",
    logoUrl,
    navLinks = [
      { label: "Menu", url: "#" },
      { label: "Locations", url: "#" },
      { label: "Rewards", url: "#" },
      { label: "Careers", url: "#" },
    ],
    buttonText = "Order now",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-fuchsia-600 text-yellow-300" style={{ backgroundColor: theme?.primary || "#c026d3", color: theme?.accent || "#fde047" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-black tracking-tight" style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3)" }}>
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-black uppercase tracking-wider hover:underline">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-none border-2 border-yellow-300 bg-yellow-300 px-4 py-2 text-sm font-black uppercase text-fuchsia-700 shadow-[4px_4px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000]">
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t-2 border-yellow-300 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-black uppercase tracking-wider">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 border-2 border-yellow-300 bg-yellow-300 px-4 py-2 text-center text-sm font-black uppercase text-fuchsia-700">{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
