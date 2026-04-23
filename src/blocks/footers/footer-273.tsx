"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer273(props: BlockProps) {
  const {
    theme,
    heading = "Join our newsletter",
    subheading = "Real founders. Real lessons. Weekly.",
    buttonText = "Subscribe",
    bodyText = "Foundr",
  } = props;
  return (
    <footer className="w-full bg-gray-50 text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
            <Mail className="h-3.5 w-3.5" /> 24,000+ subscribers
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mx-auto mt-2 max-w-md text-gray-600">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-lg items-stretch overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-200">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent px-5 py-4 text-sm outline-none" required />
            <button type="submit" className="m-1.5 rounded-lg bg-gray-900 px-5 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
          </form>
          <p className="mt-4 text-xs text-gray-500">By subscribing you agree to our Terms and Privacy Policy.</p>
        </div>
        <div className="mt-14 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
