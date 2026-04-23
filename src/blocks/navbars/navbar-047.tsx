"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar047(props: BlockProps) {
  const {
    theme,
    heading = "Spectra",
    logoUrl,
    navLinks = [
      { label: "Artists", url: "#" },
      { label: "Events", url: "#" },
      { label: "Shop", url: "#" },
      { label: "About", url: "#" },
    ],
    buttonText = "Listen",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  const gradient = theme?.primary && theme?.accent ? `linear-gradient(90deg, ${theme.primary}, ${theme.accent})` : undefined;

  return (
    <div className="w-full p-3">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-500 px-5 py-2 text-white shadow-lg"
        style={{ backgroundImage: gradient }}
      >
        <a href="#" className="text-base font-extrabold tracking-tight">{logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}</a>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.url} className="text-sm font-medium text-white/90 hover:text-white">{link.label}</a>
          ))}
          <a href={buttonUrl} className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-fuchsia-600 hover:bg-white/90">{buttonText}</a>
        </div>
        <button className="p-1.5 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div
          className="mx-4 mt-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-500 p-4 text-white shadow-lg md:hidden"
          style={{ backgroundImage: gradient }}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-white/90">{link.label}</a>
            ))}
            <a href={buttonUrl} className="mt-1 rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-fuchsia-600">{buttonText}</a>
          </div>
        </div>
      )}
    </div>
  );
}
