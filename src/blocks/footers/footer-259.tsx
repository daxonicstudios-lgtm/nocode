"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer259(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "Quarterly updates, no filler.",
    buttonText = "Join",
    bodyText = "Meridian",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Newsletter</p>
          <h2 className="mt-4 font-serif text-4xl italic text-gray-900 sm:text-5xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-gray-600">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
            <input type="email" placeholder="you@example.com" className="flex-1 border-b border-gray-300 bg-transparent px-1 py-3 text-sm outline-none focus:border-gray-900" required />
            <button type="submit" className="px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-900 underline underline-offset-4 hover:text-black" style={{ color: theme?.primary }}>{buttonText} →</button>
          </form>
        </div>
        <div className="mt-20 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {bodyText}</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
