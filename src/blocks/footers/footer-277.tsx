"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer277(props: BlockProps) {
  const {
    theme,
    heading = "Join our newsletter",
    subheading = "Smart, concise emails to level up your skills.",
    buttonText = "Subscribe",
    bodyText = "Sharp",
  } = props;
  return (
    <footer className="w-full bg-lime-300 text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:items-end">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-lime-300">
              <Mail className="h-3.5 w-3.5" /> Newsletter
            </div>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{heading}</h2>
            <p className="mt-3 max-w-md text-sm text-gray-800">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="md:col-span-2 md:self-end">
            <div className="space-y-3">
              <input type="email" placeholder="your email" className="w-full rounded-lg border-2 border-gray-900 bg-lime-200 px-4 py-3 text-sm placeholder-gray-600 outline-none" required />
              <button type="submit" className="w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-bold text-lime-300 hover:bg-black">{buttonText}</button>
            </div>
          </form>
        </div>
        <div className="mt-12 border-t-2 border-gray-900 pt-6 text-xs">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
