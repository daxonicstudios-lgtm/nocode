"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar005(props: BlockProps) {
  const {
    theme,
    heading = "Studio 14",
    logoUrl,
    navLinks = [
      { label: "Work", url: "#" },
      { label: "Studio", url: "#" },
      { label: "Process", url: "#" },
      { label: "Contact", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Journal", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a href="#" className="text-lg font-bold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <button
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-gray-950 p-8 text-white"
          style={{ backgroundColor: theme?.foreground, color: theme?.background }}
        >
          <div className="mb-12 flex items-center justify-between">
            <a href="#" className="text-lg font-bold">{heading}</a>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-6">
            {navLinks.map((link, i) => (
              <a key={link.label} href={link.url} className="text-4xl font-bold tracking-tight hover:opacity-70 sm:text-6xl">
                <span className="mr-4 text-sm font-normal opacity-50">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
