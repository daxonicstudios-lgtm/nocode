"use client";

import { Send } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer261(props: BlockProps) {
  const {
    theme,
    heading = "Subscribe to our weekly digest",
    subheading = "The best of the week, delivered Sundays.",
    buttonText = "Send me issues",
    bodyText = "Beacon",
  } = props;
  return (
    <footer className="w-full bg-rose-600 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Send className="h-8 w-8 text-white/80" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-lg text-rose-100">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none" required />
            <button type="submit" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black">{buttonText}</button>
          </form>
          <span className="mt-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-rose-50">No spam. Unsubscribe anytime.</span>
        </div>
        <div className="mt-14 border-t border-white/20 pt-6 text-center text-xs text-rose-100">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
