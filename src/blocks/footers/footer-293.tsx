"use client";

import { Send } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer293(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "A short, useful note every other Friday.",
    buttonText = "Sign up",
    bodyText = "Kite",
  } = props;
  return (
    <footer className="w-full bg-gray-100 text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-white">
            <Send className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-sm text-gray-600">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex max-w-md flex-col gap-2 sm:flex-row">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-gray-900" required />
              <button type="submit" className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
