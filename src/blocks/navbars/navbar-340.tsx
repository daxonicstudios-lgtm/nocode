"use client";

import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar340(props: BlockProps) {
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
    buttonText = "Consultation",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-emerald-500/20 bg-[#0b0f0d] font-mono text-emerald-100" style={{ backgroundColor: theme?.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-sm font-bold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-6 w-auto" /> : (
              <><Terminal className="h-4 w-4 text-emerald-400" /><span>~/{heading}</span></>
            )}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-xs font-medium text-emerald-200/80 hover:text-emerald-300">./{link.label.toLowerCase().replace(/\s+/g, "-")}</a>
            ))}
            <a href={buttonUrl} className="rounded border border-emerald-400 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 hover:bg-emerald-400/20">{buttonText}</a>
          </div>
          <button className="p-2 text-emerald-300 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-emerald-500/20 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-xs font-medium text-emerald-200/80">./{link.label.toLowerCase().replace(/\s+/g, "-")}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded border border-emerald-400 bg-emerald-400/10 px-3 py-1.5 text-center text-xs font-bold uppercase tracking-wider text-emerald-300">{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
