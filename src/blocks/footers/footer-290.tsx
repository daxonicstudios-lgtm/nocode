"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer290(props: BlockProps) {
  const {
    theme,
    heading = "Never miss a drop",
    subheading = "Be the first to shop our new arrivals.",
    buttonText = "Subscribe",
    bodyText = "Loom",
  } = props;
  return (
    <footer className="w-full bg-[#f4f1ed] text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl italic leading-tight sm:text-5xl">{heading}</h2>
            <p className="mt-3 max-w-md text-sm text-gray-700">{subheading}</p>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center border-b-2 border-gray-900">
              <Mail className="h-5 w-5 text-gray-700" />
              <input type="email" placeholder="Enter email address" className="flex-1 bg-transparent px-3 py-3 text-sm outline-none" required />
              <button type="submit" className="text-sm font-semibold uppercase tracking-widest hover:text-gray-600">{buttonText}</button>
            </form>
            <p className="mt-3 text-xs text-gray-600">Join 40,000+ curious shoppers.</p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-gray-300 pt-8 text-sm text-gray-700 sm:grid-cols-4">
          <div><p className="font-semibold text-gray-900">Shop</p><ul className="mt-2 space-y-1"><li><a href="#">New</a></li><li><a href="#">Bestsellers</a></li></ul></div>
          <div><p className="font-semibold text-gray-900">Help</p><ul className="mt-2 space-y-1"><li><a href="#">Shipping</a></li><li><a href="#">Returns</a></li></ul></div>
          <div><p className="font-semibold text-gray-900">About</p><ul className="mt-2 space-y-1"><li><a href="#">Our story</a></li><li><a href="#">Press</a></li></ul></div>
          <div><p className="font-semibold text-gray-900">Legal</p><ul className="mt-2 space-y-1"><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li></ul></div>
        </div>
        <div className="mt-8 text-xs text-gray-600">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
