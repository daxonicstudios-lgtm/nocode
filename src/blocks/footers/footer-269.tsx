"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer269(props: BlockProps) {
  const {
    theme,
    heading = "Subscribe to our weekly digest",
    subheading = "One focused email. Every Thursday.",
    buttonText = "Join now",
    bodyText = "Atlas",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="border-y-4 border-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">{heading}</h2>
              <p className="mt-2 text-sm text-gray-700">{subheading}</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <input type="email" placeholder="email@example.com" className="flex-1 border-2 border-gray-900 bg-white px-4 py-3 text-sm outline-none" required />
              <button type="submit" className="border-2 border-gray-900 bg-gray-900 px-5 py-3 text-sm font-bold uppercase text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-gray-500 sm:px-6 lg:px-8">© 2026 {bodyText}. All rights reserved.</div>
    </footer>
  );
}
