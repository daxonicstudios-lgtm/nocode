"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar205(props: BlockProps) {
  const {
    theme,
    heading = "Pierce & Co",
    logoUrl,
    navLinks = [
      { label: "Practice", url: "#" },
      { label: "Team", url: "#" },
      { label: "Results", url: "#" },
      { label: "Contact", url: "#" },
    ],
    buttonText = "Consultation",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <nav className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      {bannerOpen && (
        <div className="relative px-4 py-2 text-center text-xs font-medium text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>
          <span>Spring sale is live — save up to 40% this week</span>
          <a href="#" className="ml-2 inline-flex items-center gap-1 underline underline-offset-2">Shop now <ArrowRight className="h-3 w-3" /></a>
          <button onClick={() => setBannerOpen(false)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1" aria-label="Close announcement"><X className="h-3.5 w-3.5" /></button>
        </div>
      )}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-lg font-bold tracking-tight">
              {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
            </a>
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">{link.label}</a>
              ))}
              <a href={buttonUrl} className="rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
            </div>
            <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {open && (
            <div className="border-t border-gray-100 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">{link.label}</a>
                ))}
                <a href={buttonUrl} className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#111827" }}>{buttonText}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
