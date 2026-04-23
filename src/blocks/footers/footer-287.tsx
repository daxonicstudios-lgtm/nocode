"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer287(props: BlockProps) {
  const {
    theme,
    heading = "Join our newsletter",
    subheading = "Insider tips and behind-the-scenes access.",
    buttonText = "Subscribe",
    bodyText = "Crate",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-white md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{heading}</h2>
                <p className="text-sm text-gray-300">{subheading}</p>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
              <input type="email" placeholder="you@example.com" className="w-full rounded-md bg-white px-4 py-2.5 text-sm text-gray-900 outline-none md:w-64" required />
              <button type="submit" className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600">{buttonText}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-2 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a><a href="#" className="hover:text-gray-900">Contact</a></div>
        </div>
      </div>
    </footer>
  );
}
