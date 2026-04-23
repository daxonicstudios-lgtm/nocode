"use client";

import { Send } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer268(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "Monthly roundup, zero noise.",
    buttonText = "Sign up",
    bodyText = "Tidal",
  } = props;
  return (
    <footer className="w-full bg-blue-950 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Send className="h-7 w-7 text-blue-300" />
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-2 max-w-md text-blue-200">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-md bg-blue-900/60 px-4 py-3 text-sm text-white placeholder-blue-300 outline-none ring-1 ring-blue-800 focus:ring-white" required />
              <button type="submit" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-950 hover:bg-blue-100">{buttonText}</button>
            </div>
            <p className="text-xs text-blue-300">By subscribing you agree to our Privacy Policy.</p>
          </form>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-blue-900 pt-6 text-xs text-blue-300 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
