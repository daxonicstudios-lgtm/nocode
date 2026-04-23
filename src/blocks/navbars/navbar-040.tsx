"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar040(props: BlockProps) {
  const {
    theme,
    heading = "Mint",
    logoUrl,
    navLinks = [
      { label: "Home", url: "#" },
      { label: "Courses", url: "#" },
      { label: "Coaches", url: "#" },
      { label: "Community", url: "#" },
    ],
    buttonText = "Join",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur"
      style={{ backgroundColor: theme?.background ? `${theme.background}f2` : undefined, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="text-lg font-bold">{logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}</a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-lg px-4 py-1.5 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#10b981" }}>
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-lg px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#10b981" }}>
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
