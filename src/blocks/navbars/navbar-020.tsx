"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar020(props: BlockProps) {
  const {
    theme,
    heading = "BRUTAL",
    logoUrl,
    navLinks = [
      { label: "About", url: "#" },
      { label: "Work", url: "#" },
      { label: "Shop", url: "#" },
      { label: "Contact", url: "#" },
    ],
    buttonText = "HIRE US",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-yellow-300 p-3" style={{ backgroundColor: theme?.accent || "#fde047" }}>
      <nav
        className="mx-auto max-w-7xl border-[3px] border-black bg-white shadow-[6px_6px_0_#000]"
        style={{ backgroundColor: theme?.background, borderColor: theme?.foreground || "#000" }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <a href="#" className="text-2xl font-black tracking-tighter">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-bold uppercase text-black hover:underline">
                {link.label}
              </a>
            ))}
            <a
              href={buttonUrl}
              className="border-[3px] border-black bg-black px-4 py-2 text-sm font-bold uppercase text-white shadow-[3px_3px_0_#000] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
              style={{ backgroundColor: theme?.primary || "#000" }}
            >
              {buttonText}
            </a>
          </div>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t-[3px] border-black px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-bold uppercase text-black">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="mt-2 border-[3px] border-black bg-black px-4 py-2 text-center text-sm font-bold uppercase text-white">
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
