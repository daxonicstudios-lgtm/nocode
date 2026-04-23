"use client";

import { Mail, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer275(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "Product news, tips, and exclusive deals.",
    buttonText = "Subscribe",
    bodyText = "Pulse",
  } = props;
  return (
    <footer className="w-full bg-fuchsia-50 text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-fuchsia-100 sm:p-10 md:flex-row">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{heading}</h2>
              <p className="mt-1 text-sm text-gray-600">{subheading}</p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
            <input type="email" placeholder="you@example.com" className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-fuchsia-500 md:w-60" required />
            <button type="submit" className="inline-flex items-center justify-center gap-1 rounded-md bg-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-fuchsia-700" style={{ backgroundColor: theme?.primary }}>
              {buttonText} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
