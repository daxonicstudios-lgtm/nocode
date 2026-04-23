"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer284(props: BlockProps) {
  const {
    theme,
    heading = "Subscribe to our weekly digest",
    subheading = "Get top stories, curated just for you.",
    buttonText = "Subscribe",
    bodyText = "Prism",
  } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-gradient-to-r from-pink-50 to-orange-50 p-6 ring-1 ring-pink-100 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold tracking-tight">{heading}</h2>
            <p className="mt-1 text-sm text-gray-600">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
            <input type="email" placeholder="you@example.com" className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-pink-500 md:w-64" required />
            <button type="submit" className="inline-flex items-center justify-center gap-1 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">
              {buttonText} <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div><h3 className="text-sm font-semibold">Product</h3><ul className="mt-2 space-y-1 text-sm text-gray-600"><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li></ul></div>
          <div><h3 className="text-sm font-semibold">Company</h3><ul className="mt-2 space-y-1 text-sm text-gray-600"><li><a href="#">About</a></li><li><a href="#">Blog</a></li></ul></div>
          <div><h3 className="text-sm font-semibold">Resources</h3><ul className="mt-2 space-y-1 text-sm text-gray-600"><li><a href="#">Docs</a></li><li><a href="#">Help</a></li></ul></div>
          <div><h3 className="text-sm font-semibold">Legal</h3><ul className="mt-2 space-y-1 text-sm text-gray-600"><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li></ul></div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-5 text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
