"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer295(props: BlockProps) {
  const {
    theme,
    heading = "Get the latest",
    subheading = "Daily digest, mornings only.",
    buttonText = "Subscribe",
    bodyText = "Morning",
  } = props;
  return (
    <footer className="w-full bg-amber-100 text-amber-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold">
              <Mail className="h-4 w-4" /> The Morning Brief
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
            <p className="mt-1 text-sm text-amber-900">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md items-center overflow-hidden rounded-full border-2 border-amber-950 bg-white">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent px-5 py-2.5 text-sm outline-none" required />
            <button type="submit" className="h-full bg-amber-950 px-5 py-2.5 text-sm font-bold text-amber-100 hover:bg-black">{buttonText}</button>
          </form>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-amber-300 pt-6 text-sm text-amber-900 sm:grid-cols-3">
          <div><p className="font-semibold text-amber-950">Read</p><ul className="mt-2 space-y-1"><li><a href="#">Daily</a></li><li><a href="#">Weekly</a></li></ul></div>
          <div><p className="font-semibold text-amber-950">Topics</p><ul className="mt-2 space-y-1"><li><a href="#">Tech</a></li><li><a href="#">Markets</a></li></ul></div>
          <div><p className="font-semibold text-amber-950">About</p><ul className="mt-2 space-y-1"><li><a href="#">Team</a></li><li><a href="#">Contact</a></li></ul></div>
        </div>
        <div className="mt-6 text-xs text-amber-800">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
