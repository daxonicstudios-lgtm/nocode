"use client";

import { Send } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer283(props: BlockProps) {
  const {
    theme,
    heading = "Join our newsletter",
    subheading = "One email a week. Packed with value.",
    buttonText = "Subscribe",
    bodyText = "Relay",
  } = props;
  return (
    <footer className="w-full bg-teal-700 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 rounded-2xl bg-teal-800 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg">
            <Send className="h-6 w-6 text-teal-200" />
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-sm text-teal-100">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm">
            <div className="flex gap-2">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-md bg-teal-900/60 px-4 py-2.5 text-sm text-white placeholder-teal-200 outline-none ring-1 ring-teal-600 focus:ring-white" required />
              <button type="submit" className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-teal-800 hover:bg-teal-50">{buttonText}</button>
            </div>
            <p className="mt-2 text-xs text-teal-200">No spam. Unsubscribe anytime.</p>
          </form>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-teal-600 pt-6 text-xs text-teal-100 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
