"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer257(props: BlockProps) {
  const {
    theme,
    heading = "Join our newsletter",
    subheading = "One email every Tuesday. Unsubscribe anytime.",
    buttonText = "Subscribe",
    bodyText = "Pineapple",
  } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold tracking-tight">{heading}</h2>
            <p className="mt-2 text-sm text-gray-600">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex max-w-sm items-center rounded-md border border-gray-300 bg-white">
              <Mail className="ml-3 h-4 w-4 text-gray-400" />
              <input type="email" placeholder="you@example.com" className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none" required />
              <button type="submit" className="m-1 rounded bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
            </form>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Features</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
