"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer296(props: BlockProps) {
  const {
    theme,
    heading = "Join our newsletter",
    subheading = "Occasional updates. Always worth the open.",
    buttonText = "Subscribe",
    bodyText = "Cinder",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-2 max-w-sm text-gray-600">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-7">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input type="email" placeholder="Work email" className="flex-1 rounded-full border-2 border-gray-200 bg-white px-5 py-3 text-sm outline-none focus:border-gray-900" required />
              <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>
                {buttonText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">No spam, just the good stuff.</p>
          </form>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a><a href="#" className="hover:text-gray-900">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}
