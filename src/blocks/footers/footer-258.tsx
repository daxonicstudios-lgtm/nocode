"use client";

import { CheckCircle2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer258(props: BlockProps) {
  const {
    theme,
    heading = "Weekly dispatch",
    subheading = "Actionable ideas in under 3 minutes.",
    buttonText = "Subscribe free",
    bodyText = "Cobalt",
  } = props;
  return (
    <footer className="w-full bg-slate-950 text-slate-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight">{heading}</h2>
          <p className="mt-2 text-slate-400">{subheading}</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Zero spam, ever</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Read in 3 minutes</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Unsubscribe anytime</li>
          </ul>
          <form onSubmit={(e) => e.preventDefault()} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="your@email.com" className="flex-1 rounded-lg bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none ring-1 ring-slate-700 focus:ring-white" required />
            <button type="submit" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
          </form>
        </div>
        <div className="mt-10 text-center text-xs text-slate-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
