"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer251(props: BlockProps) {
  const {
    theme,
    heading = "Join our newsletter",
    subheading = "One email every Tuesday. Unsubscribe anytime.",
    buttonText = "Subscribe",
    bodyText = "Acme",
  } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{heading}</h2>
            <p className="mt-2 text-sm text-gray-600">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input type="email" placeholder="you@example.com" className="w-full rounded-md border border-gray-300 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-gray-900" required />
            </div>
            <button type="submit" className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
          </form>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
