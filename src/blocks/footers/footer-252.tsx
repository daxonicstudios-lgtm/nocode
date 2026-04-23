"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer252(props: BlockProps) {
  const {
    theme,
    heading = "Weekly dispatch",
    subheading = "Join 12,000+ readers. One idea every Tuesday.",
    buttonText = "Join",
    bodyText = "Northwind",
  } = props;
  return (
    <footer className="w-full bg-black text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-300">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-full border border-gray-700 bg-gray-900 px-5 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-white" required />
            <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200" style={{ backgroundColor: theme?.primary, color: theme?.background }}>
              {buttonText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
        </div>
        <div className="mt-14 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © 2026 {bodyText}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
