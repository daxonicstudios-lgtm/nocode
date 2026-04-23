"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer294(props: BlockProps) {
  const {
    theme,
    heading = "Weekly dispatch",
    subheading = "Smart reads. No fluff. Every Wednesday.",
    buttonText = "Subscribe",
    bodyText = "Forge",
  } = props;
  return (
    <footer className="w-full bg-[#0f172a] text-slate-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative z-10 max-w-xl">
            <span className="inline-block rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-500/30">Free</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-3 text-slate-300">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-lg bg-slate-800/50 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none ring-1 ring-slate-700 focus:ring-blue-400" required />
              <button type="submit" className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400">{buttonText}</button>
            </form>
            <p className="mt-3 text-xs text-slate-400">Read by 12,000+ builders.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
