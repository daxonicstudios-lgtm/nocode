"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar018(props: BlockProps) {
  const {
    theme,
    heading = "VOLTA",
    logoUrl,
    navLinks = [
      { label: "MISSION", url: "#" },
      { label: "TEAM", url: "#" },
      { label: "PROCESS", url: "#" },
      { label: "CONTACT", url: "#" },
    ],
    buttonText = "BEGIN",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-3xl font-black tracking-tighter">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-9 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-xs font-black uppercase tracking-widest text-gray-900 hover:underline">
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="bg-gray-900 px-5 py-3 text-xs font-black uppercase tracking-widest text-white"
              style={{ backgroundColor: theme?.primary || "#111827" }}
            >
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t-2 border-gray-900 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-xs font-black uppercase tracking-widest text-gray-900">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="mt-2 bg-gray-900 px-5 py-3 text-center text-xs font-black uppercase tracking-widest text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
