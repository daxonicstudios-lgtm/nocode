"use client";

import { CheckCircle2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer278(props: BlockProps) {
  const {
    theme,
    heading = "Weekly dispatch",
    subheading = "Be the first to know. Every Sunday.",
    buttonText = "Subscribe",
    bodyText = "Cove",
  } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-sm text-gray-600">{subheading}</p>
            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Exclusive subscriber-only content</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Early access to new releases</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Zero spam, pinky promise</li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
            <label htmlFor="nl278" className="block text-sm font-medium text-gray-900">Email</label>
            <input id="nl278" type="email" placeholder="you@example.com" className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-gray-900" required />
            <button type="submit" className="mt-3 w-full rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
            <p className="mt-3 text-xs text-gray-500">By subscribing you agree to our Privacy Policy.</p>
          </form>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
