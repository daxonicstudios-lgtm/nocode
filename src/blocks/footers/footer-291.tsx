"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer291(props: BlockProps) {
  const {
    theme,
    heading = "Subscribe to our weekly digest",
    subheading = "Thoughtful reads, under 4 minutes.",
    buttonText = "Subscribe",
    bodyText = "Quill",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="mx-auto h-8 w-8 text-gray-900" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight">{heading}</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-gray-600">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 max-w-md space-y-3">
            <input type="email" placeholder="you@example.com" className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-center text-sm outline-none focus:border-gray-900" required />
            <button type="submit" className="w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
          </form>
          <p className="mt-4 text-xs text-gray-500">By subscribing you agree to our Privacy Policy.</p>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {bodyText}</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
