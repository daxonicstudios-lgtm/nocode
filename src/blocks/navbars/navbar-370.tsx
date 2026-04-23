"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar370(props: BlockProps) {
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
    <nav className="w-full border-b-4 border-cyan-300 bg-pink-500 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-black uppercase italic tracking-wider text-cyan-100 drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-black uppercase tracking-wide text-cyan-100 hover:text-white">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-none border-2 border-black bg-cyan-300 px-4 py-2 text-sm font-black uppercase tracking-wider text-black shadow-[4px_4px_0_0_#000]">{buttonText}</a>
          </div>
          <button className="p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t-2 border-cyan-300 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-black uppercase tracking-wide text-cyan-100">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 border-2 border-black bg-cyan-300 px-4 py-2 text-center text-sm font-black uppercase text-black">{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
