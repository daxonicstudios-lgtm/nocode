"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer254(props: BlockProps) {
  const {
    theme,
    heading = "Subscribe to our weekly digest",
    subheading = "Curated stories every Friday morning.",
    buttonText = "Count me in",
    bodyText = "Drift",
  } = props;
  return (
    <footer className="w-full bg-[#faf8f4] text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
            <Mail className="h-4 w-4" /> Newsletter
          </div>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{heading}</h2>
          <p className="mt-2 text-sm text-gray-600">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900" required />
            <button type="submit" className="rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
          </form>
          <p className="mt-3 text-xs text-gray-500">By subscribing you agree to our Privacy Policy.</p>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-2 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
