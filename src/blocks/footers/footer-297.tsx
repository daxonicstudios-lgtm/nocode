"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer297(props: BlockProps) {
  const {
    theme,
    heading = "Weekly dispatch",
    subheading = "Discover what's new in design. Every Friday.",
    buttonText = "Subscribe",
    bodyText = "Palette",
  } = props;
  return (
    <footer className="w-full bg-pink-100 text-pink-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-pink-700">{bodyText}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{heading}</h2>
            <p className="mt-3 max-w-md text-pink-900">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white p-6 shadow-sm">
            <label className="text-sm font-medium text-gray-900">Email</label>
            <input type="email" placeholder="you@example.com" className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-pink-500" required />
            <label className="mt-4 block text-sm font-medium text-gray-900">Name <span className="text-gray-400">(optional)</span></label>
            <input type="text" placeholder="Jamie" className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-pink-500" />
            <button type="submit" className="mt-5 w-full rounded-lg bg-pink-600 px-5 py-3 text-sm font-semibold text-white hover:bg-pink-700">{buttonText}</button>
            <p className="mt-3 text-xs text-gray-500">By subscribing you agree to our Privacy Policy.</p>
          </form>
        </div>
        <div className="mt-14 border-t border-pink-200 pt-6 text-xs text-pink-900">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
