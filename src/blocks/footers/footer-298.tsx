"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer298(props: BlockProps) {
  const {
    theme,
    heading = "Subscribe to our weekly digest",
    subheading = "Ideas and essays. Every Thursday.",
    buttonText = "Subscribe",
    bodyText = "Threshold",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <h2 className="text-base font-semibold">{heading}</h2>
                <p className="text-sm text-gray-600">{subheading}</p>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md flex-col gap-2 sm:flex-row md:w-auto">
              <input type="email" placeholder="you@example.com" className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-gray-900 md:w-56" required />
              <button type="submit" className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-600 sm:grid-cols-4">
          <div><p className="font-semibold text-gray-900">Product</p><ul className="mt-2 space-y-1"><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li></ul></div>
          <div><p className="font-semibold text-gray-900">Company</p><ul className="mt-2 space-y-1"><li><a href="#">About</a></li><li><a href="#">Jobs</a></li></ul></div>
          <div><p className="font-semibold text-gray-900">Support</p><ul className="mt-2 space-y-1"><li><a href="#">Help</a></li><li><a href="#">Contact</a></li></ul></div>
          <div><p className="font-semibold text-gray-900">Legal</p><ul className="mt-2 space-y-1"><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li></ul></div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-5 text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
