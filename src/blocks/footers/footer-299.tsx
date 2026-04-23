"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer299(props: BlockProps) {
  const {
    theme,
    heading = "Never miss a drop",
    subheading = "Launches, stories, and early access.",
    buttonText = "Count me in",
    bodyText = "Ridge",
  } = props;
  return (
    <footer className="w-full bg-gradient-to-b from-white to-gray-50 text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-gray-900 to-black p-10 text-white shadow-2xl sm:p-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-3 max-w-md text-gray-300">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-xl bg-white/10 px-5 py-3.5 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-white/20 focus:ring-white" required />
            <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3.5 text-sm font-bold text-black hover:from-amber-300 hover:to-orange-400">
              {buttonText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">By subscribing you agree to our Terms and Privacy Policy.</p>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
