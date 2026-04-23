"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar266(props: BlockProps) {
  const {
    theme,
    heading = "Wellcare",
    logoUrl,
    navLinks = [
      { label: "Services", url: "#" },
      { label: "Doctors", url: "#" },
      { label: "Patients", url: "#" },
      { label: "Contact", url: "#" },
    ],
    buttonText = "Book Visit",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b-2 border-black bg-yellow-300" style={{ color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-black uppercase tracking-tight">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-8 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-black uppercase tracking-wide hover:underline underline-offset-4">{link.label}</a>
            ))}
            <a href={buttonUrl} className="border-2 border-black bg-black px-4 py-2 text-sm font-black uppercase text-yellow-300 shadow-[4px_4px_0_0_#000]">
              {buttonText}
            </a>
          </div>
          <button className="border-2 border-black bg-white p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t-2 border-black py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-black uppercase tracking-wide">{link.label}</a>
              ))}
              <a href={buttonUrl} className="mt-2 border-2 border-black bg-black px-4 py-2 text-center text-sm font-black uppercase text-yellow-300">{buttonText}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
