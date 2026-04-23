"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar438(props: BlockProps) {
  const {
    theme,
    heading = "Ledger",
    logoUrl,
    navLinks = [
      { label: "Banking", url: "#" },
      { label: "Loans", url: "#" },
      { label: "Invest", url: "#" },
      { label: "Help", url: "#" },
    ],
    buttonText = "Open Account",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-900" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-white">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">{link.label}</a>
            ))}
            <a href={buttonUrl} className="rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
          </div>
          <button className="rounded-md p-2 text-gray-900 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="relative border-t border-gray-200 bg-white py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
            ))}
            <a href={buttonUrl} className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
          </div>
        </div>
      )}
    </nav>
  );
}
