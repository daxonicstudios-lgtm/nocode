"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar134(props: BlockProps) {
  const {
    theme,
    heading = "Quill",
    logoUrl,
    navLinks = [
      { label: "Courses", url: "#" },
      { label: "Teachers", url: "#" },
      { label: "About", url: "#" },
      { label: "Blog", url: "#" },
    ],
    buttonText = "Enroll",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-4">
          <a href="#" className="shrink-0 text-lg font-bold tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="relative mx-4 hidden max-w-md flex-1 md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search..." className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-gray-400" />
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.slice(0, 3).map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
          </div>
          <button className="ml-auto p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search..." className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm" />
              </div>
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
