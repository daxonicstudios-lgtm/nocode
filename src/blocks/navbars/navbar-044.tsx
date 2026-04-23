"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar044(props: BlockProps) {
  const {
    theme,
    heading = "Lofi",
    logoUrl,
    navLinks = [
      { label: "Beats", url: "#" },
      { label: "Loops", url: "#" },
      { label: "Presets", url: "#" },
      { label: "Mixer", url: "#" },
    ],
    buttonText = "Try Studio",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-100" style={{ backgroundColor: theme?.background || "#f1f5f9", color: theme?.foreground || "#0f172a" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="rounded-xl bg-slate-100 px-4 py-2 text-lg font-bold shadow-[inset_-4px_-4px_8px_#fff,inset_4px_4px_8px_#cbd5e1]"
            style={{ backgroundColor: theme?.background || "#f1f5f9" }}
          >
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-6 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:shadow-[inset_-3px_-3px_6px_#fff,inset_3px_3px_6px_#cbd5e1]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-[-3px_-3px_6px_#fff,3px_3px_6px_#cbd5e1]"
              style={{ backgroundColor: theme?.primary || "#6366f1" }}
            >
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 shadow-[inset_-2px_-2px_4px_#fff,inset_2px_2px_4px_#cbd5e1]">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-1 rounded-lg px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
