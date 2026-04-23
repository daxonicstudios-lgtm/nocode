"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar015(props: BlockProps) {
  const {
    theme,
    heading = "Outline",
    logoUrl,
    navLinks = [
      { label: "Projects", url: "#" },
      { label: "Team", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Blog", url: "#" },
    ],
    buttonText = "Start building",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full p-3 sm:p-4">
      <nav
        className="mx-auto max-w-7xl rounded-2xl border-2 border-gray-900 bg-white"
        style={{ backgroundColor: theme?.background, borderColor: theme?.foreground, color: theme?.foreground }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <a href="#" className="text-lg font-black">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-semibold text-gray-900 hover:underline">
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="rounded-full border-2 border-gray-900 px-4 py-1.5 text-sm font-semibold hover:bg-gray-900 hover:text-white"
              style={{ borderColor: theme?.foreground }}
            >
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t-2 border-gray-900 px-4 py-4 md:hidden" style={{ borderColor: theme?.foreground }}>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-semibold text-gray-900">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-full border-2 border-gray-900 px-4 py-2 text-center text-sm font-semibold">
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
