"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar034(props: BlockProps) {
  const {
    theme,
    heading = "Kindle",
    logoUrl,
    bodyText = "New: AI Assistant is here",
    navLinks = [
      { label: "Features", url: "#" },
      { label: "Integrations", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Docs", url: "#" },
    ],
    buttonText = "Sign up free",
    buttonUrl = "#",
  } = props;
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {show && (
        <div className="w-full py-2.5 text-white" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 text-sm sm:px-6 lg:px-8">
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              {bodyText} <a href="#" className="underline underline-offset-2">Learn more</a>
            </span>
            <button onClick={() => setShow(false)} aria-label="Dismiss" className="rounded-full p-1 hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-lg font-bold">{logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}</a>
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">{link.label}</a>
              ))}
              <a href={buttonUrl} className="rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>
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
                <a href={buttonUrl} className="mt-2 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>
                  {buttonText}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
