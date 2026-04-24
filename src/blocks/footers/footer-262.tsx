"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer262(props: BlockProps) {
  const {
    theme,
    heading = "The Monday Memo",
    subheading = "Start your week with 5 ideas worth thinking about.",
    buttonText = "Subscribe",
    bodyText = "Memo",
  } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight">{heading}</h2>
            <p className="mt-2 text-sm text-gray-600">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <input type="email" placeholder="you@example.com" className="w-full flex-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-gray-900 sm:max-w-xs" required />
              <button type="submit" className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
            </form>
            <p className="mt-3 text-xs text-gray-500">By subscribing you agree to our terms and privacy policy.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">{bodyText}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Archive</a></li>
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Sponsor</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
