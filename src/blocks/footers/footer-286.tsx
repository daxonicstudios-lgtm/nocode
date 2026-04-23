"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer286(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "A monthly note from the founder.",
    buttonText = "Subscribe",
    bodyText = "Clay",
  } = props;
  return (
    <footer className="w-full bg-yellow-50 text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-2 text-sm text-gray-700">{subheading}</p>
            <p className="mt-4 text-xs text-gray-600">— Written by the {bodyText} team. Read by 9,200+ people.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm">
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-yellow-200">
              <label className="text-xs font-medium text-gray-700">Your email</label>
              <input type="email" placeholder="you@example.com" className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500" required />
              <button type="submit" className="mt-3 w-full rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-yellow-300">{buttonText}</button>
            </div>
          </form>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-yellow-200 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
