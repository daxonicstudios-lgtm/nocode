"use client";

import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar025(props: BlockProps) {
  const {
    theme,
    heading = "Beam",
    logoUrl,
    navLinks = [
      { label: "Home", url: "#" },
      { label: "Articles", url: "#" },
      { label: "Newsletter", url: "#" },
      { label: "About", url: "#" },
    ],
    buttonText = "RSS",
    buttonUrl = "#",
  } = props;
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <nav
      className={dark ? "w-full border-b border-gray-800 bg-gray-950 text-white" : "w-full border-b border-gray-200 bg-white text-gray-900"}
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium hover:opacity-70">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setDark(!dark)} className="rounded-full p-2 hover:opacity-70" aria-label="Toggle theme">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href={buttonUrl} className="hidden text-sm font-medium underline underline-offset-4 md:inline-block">
              {buttonText}
            </a>
            <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-current/10 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium">
                  {link.label}
                </a>
              ))}
              <a href={buttonUrl} className="text-sm font-medium underline underline-offset-4">
                {buttonText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
