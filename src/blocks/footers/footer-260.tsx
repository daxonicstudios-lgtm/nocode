"use client";

import { Mail, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer260(props: BlockProps) {
  const {
    theme,
    heading = "Get the latest",
    subheading = "Join 5,000+ makers getting weekly product tips.",
    buttonText = "Subscribe",
    bodyText = "Stack",
  } = props;
  return (
    <footer className="w-full bg-amber-50 text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-3 py-1 text-xs font-semibold text-amber-900">
              <Mail className="h-3.5 w-3.5" /> Newsletter
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-2 max-w-md text-sm text-gray-700">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-2 lg:self-center">
            <div className="space-y-3">
              <input type="email" placeholder="Email address" className="w-full rounded-lg border-2 border-gray-900 bg-white px-4 py-3 text-sm outline-none" required />
              <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-bold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>
                {buttonText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-600">Free. No spam. Unsubscribe whenever.</p>
          </form>
        </div>
        <div className="mt-12 border-t border-amber-200 pt-6 text-xs text-gray-600">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
