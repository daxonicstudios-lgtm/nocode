"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar363(props: BlockProps) {
  const {
    theme,
    heading = "Ledger",
    logoUrl,
    navLinks = [
      { label: "Banking", url: "#" },
      { label: "Loans", url: "#" },
      { label: "Invest", url: "#" },
      { label: "Help", url: "#" },
    ],
    buttonText = "Open Account",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full overflow-hidden bg-black text-white" style={{ backgroundColor: theme?.background }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.25),transparent_60%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.25),transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-lg font-black tracking-tight text-transparent">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-white/80 transition hover:text-white hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-full border border-pink-400/50 bg-pink-500/20 px-4 py-2 text-sm font-semibold text-pink-100 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:bg-pink-500/30">{buttonText}</a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-white/80">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full border border-pink-400/50 bg-pink-500/20 px-4 py-2 text-center text-sm font-semibold text-pink-100">{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
