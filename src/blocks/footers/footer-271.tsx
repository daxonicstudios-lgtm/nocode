"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer271(props: BlockProps) {
  const {
    theme,
    heading = "Weekly dispatch",
    subheading = "3 resources. 2 insights. 1 question. Every Sunday.",
    buttonText = "Subscribe",
    bodyText = "Ledger",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
          <p className="mt-2 text-gray-600">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900" required />
            <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>
              {buttonText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <span className="rounded-full bg-gray-100 px-2 py-1">No spam</span>
            <span className="rounded-full bg-gray-100 px-2 py-1">Unsubscribe anytime</span>
            <span className="rounded-full bg-gray-100 px-2 py-1">Free forever</span>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
