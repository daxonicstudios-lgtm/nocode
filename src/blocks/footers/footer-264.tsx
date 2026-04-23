"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer264(props: BlockProps) {
  const {
    theme,
    heading = "Join 18,000+ subscribers",
    subheading = "Free weekly newsletter. Packed with practical tips.",
    buttonText = "Subscribe",
    bodyText = "Almanac",
  } = props;
  return (
    <footer className="w-full bg-stone-100 text-stone-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-stone-200 sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
              <p className="mt-2 text-sm text-stone-600">{subheading}</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm space-y-2">
              <div className="flex rounded-md ring-1 ring-stone-300 focus-within:ring-stone-900">
                <input type="email" placeholder="you@example.com" className="flex-1 rounded-l-md bg-white px-4 py-2.5 text-sm outline-none" required />
                <button type="submit" className="rounded-r-md bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
              </div>
              <p className="text-xs text-stone-500">One email per week. No spam.</p>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-2 text-xs text-stone-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-stone-900">Privacy</a><a href="#" className="hover:text-stone-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
