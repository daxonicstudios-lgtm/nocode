"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer266(props: BlockProps) {
  const {
    theme,
    heading = "Join our newsletter",
    subheading = "Trusted by 30,000+ curious minds.",
    buttonText = "Join free",
    bodyText = "Kindling",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-black p-10 text-white sm:p-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Mail className="h-4 w-4" /> The Kindling Brief
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-md text-gray-300">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Your best email" className="flex-1 rounded-lg bg-white/10 px-5 py-3 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-white/20 focus:ring-white" required />
            <button type="submit" className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-black hover:bg-amber-300">{buttonText}</button>
          </form>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
