"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar046(props: BlockProps) {
  const {
    theme,
    heading = "CANVAS",
    logoUrl,
    navLinks = [
      { label: "01 Works", url: "#" },
      { label: "02 Clients", url: "#" },
      { label: "03 Contact", url: "#" },
    ],
    buttonText = "Start a project",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b-4 border-black bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.foreground || "#000" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter">{logoUrl ? <img src={logoUrl} alt={heading} className="h-9 w-auto" /> : heading}</a>
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-bold uppercase tracking-wider hover:underline decoration-4 underline-offset-4">{link.label}</a>
            ))}
            <a href={buttonUrl} className="bg-black px-5 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-gray-800" style={{ backgroundColor: theme?.primary || "#000" }}>
              {buttonText} →
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t-4 border-black py-4 md:hidden" style={{ borderColor: theme?.foreground || "#000" }}>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-bold uppercase tracking-wider">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 bg-black px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-white" style={{ backgroundColor: theme?.primary || "#000" }}>
                {buttonText} →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
