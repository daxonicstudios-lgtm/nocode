"use client";

import { Mail, MessageCircle, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer280(props: BlockProps) {
  const {
    theme,
    heading = "Weekly dispatch",
    subheading = "Dev tips and deep dives, delivered.",
    buttonText = "Subscribe",
    bodyText = "Devlog",
  } = props;
  return (
    <footer className="w-full bg-slate-50 text-slate-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                <Mail className="h-3.5 w-3.5" /> newsletter
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">{heading}</h2>
              <p className="mt-1 text-sm text-slate-600">{subheading}</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex gap-2">
                <input type="email" placeholder="you@example.com" className="flex-1 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-900" required />
                <button type="submit" className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
              </div>
              <p className="text-xs text-slate-500">Join 8,400+ engineers.</p>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-3 text-slate-400">
            <a href="#" aria-label="Twitter" className="hover:text-slate-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-slate-900"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
