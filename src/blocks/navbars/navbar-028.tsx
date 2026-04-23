"use client";

import { useState } from "react";
import { Menu, X, AtSign, Camera, Share2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Navbar028(props: BlockProps) {
  const {
    theme,
    heading = "Ink & Paper",
    logoUrl,
    navLinks = [
      { label: "Stories", url: "#" },
      { label: "Podcast", url: "#" },
      { label: "Reviews", url: "#" },
      { label: "About", url: "#" },
    ],
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold">
            {logoUrl ? <img src={logoUrl} alt={heading} className="h-7 w-auto" /> : heading}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <a href="#" className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900" aria-label="Twitter">
              <AtSign className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900" aria-label="Instagram">
              <Camera className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900" aria-label="LinkedIn">
              <Share2 className="h-4 w-4" />
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
                <a key={link.label} href={link.url} className="text-sm font-medium text-gray-700">
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <a href="#" className="rounded-full p-2 text-gray-600 hover:bg-gray-100" aria-label="Twitter">
                  <AtSign className="h-4 w-4" />
                </a>
                <a href="#" className="rounded-full p-2 text-gray-600 hover:bg-gray-100" aria-label="Instagram">
                  <Camera className="h-4 w-4" />
                </a>
                <a href="#" className="rounded-full p-2 text-gray-600 hover:bg-gray-100" aria-label="LinkedIn">
                  <Share2 className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
