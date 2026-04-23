"use client";

import { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar017(props: BlockProps) {
  const {
    theme,
    heading = "~/devctl",
    logoUrl,
    navLinks = [
      { label: "docs", url: "#" },
      { label: "api", url: "#" },
      { label: "cli", url: "#" },
      { label: "changelog", url: "#" },
    ],
    buttonText = "$ install",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-800 bg-black font-mono text-green-400" style={{ backgroundColor: theme?.foreground || "#000", color: theme?.primary || "#4ade80" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-sm font-bold">
            <Terminal className="h-4 w-4" />
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-5 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-xs text-gray-400 hover:text-green-400">
                {link.label}
              </a>
            ))}
            <a href={buttonUrl} className="rounded border border-green-400 px-3 py-1 text-xs hover:bg-green-400 hover:text-black">
              {buttonText}
            </a>
          </div>
          <button className="p-2 text-gray-400 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-800 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-xs text-gray-400">{`> ${link.label}`}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded border border-green-400 px-3 py-2 text-center text-xs">
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
