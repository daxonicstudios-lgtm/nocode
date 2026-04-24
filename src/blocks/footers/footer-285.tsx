"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer285(props: BlockProps) {
  const {
    theme,
    heading = "Weekly dispatch",
    subheading = "Ideas at the edge of tech, design, and culture.",
    buttonText = "Subscribe",
    bodyText = "Signal",
  } = props;
  return (
    <footer className="w-full bg-gray-900 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-10 sm:p-14">
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Mail className="h-3.5 w-3.5" /> Delivered weekly
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-2 text-white/90">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input type="email" placeholder="your@email.com" className="flex-1 rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder-white/70 outline-none ring-1 ring-white/30 focus:ring-white" required />
              <button type="submit" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100">{buttonText}</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
