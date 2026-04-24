"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer256(props: BlockProps) {
  const {
    theme,
    heading = "Get the latest",
    subheading = "Product updates, new arrivals, and member-only offers.",
    buttonText = "Subscribe",
    bodyText = "Harbor",
  } = props;
  return (
    <footer className="w-full bg-emerald-600 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{heading}</h2>
            <p className="mt-4 max-w-md text-emerald-50">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <label className="block text-sm font-medium text-emerald-50">Email address</label>
            <input type="email" placeholder="you@company.com" className="w-full rounded-md bg-white/10 px-4 py-3 text-sm text-white placeholder-emerald-200 outline-none ring-1 ring-white/30 focus:ring-white" required />
            <button type="submit" className="w-full rounded-md bg-white px-5 py-3 text-sm font-bold text-emerald-700 hover:bg-emerald-50">{buttonText}</button>
            <p className="text-xs text-emerald-100">We respect your privacy. Unsubscribe at any time.</p>
          </form>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-white/20 pt-6 text-xs text-emerald-100 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
