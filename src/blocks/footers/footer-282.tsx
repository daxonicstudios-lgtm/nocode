"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer282(props: BlockProps) {
  const {
    theme,
    heading = "Get the latest",
    subheading = "Thoughtful writing from the team.",
    buttonText = "Subscribe",
    bodyText = "Haven",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
              <Mail className="h-4 w-4" /> {bodyText} Letter
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{heading}</h2>
            <p className="mt-4 max-w-md text-gray-600">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-md gap-2">
              <input type="email" placeholder="you@example.com" className="flex-1 border-b border-gray-900 bg-transparent px-1 py-2 text-sm outline-none" required />
              <button type="submit" className="border-b border-gray-900 pb-2 text-sm font-semibold hover:text-gray-600">{buttonText} →</button>
            </form>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div><h3 className="text-sm font-semibold">Explore</h3><ul className="mt-3 space-y-2 text-sm text-gray-600"><li><a href="#">Articles</a></li><li><a href="#">Podcast</a></li><li><a href="#">Notes</a></li></ul></div>
              <div><h3 className="text-sm font-semibold">Company</h3><ul className="mt-3 space-y-2 text-sm text-gray-600"><li><a href="#">About</a></li><li><a href="#">Values</a></li><li><a href="#">Contact</a></li></ul></div>
              <div><h3 className="text-sm font-semibold">Resources</h3><ul className="mt-3 space-y-2 text-sm text-gray-600"><li><a href="#">Library</a></li><li><a href="#">Tools</a></li><li><a href="#">FAQ</a></li></ul></div>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-gray-200 pt-6 text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
