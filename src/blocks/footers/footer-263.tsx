"use client";

import { Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer263(props: BlockProps) {
  const {
    theme,
    heading = "Never miss a drop",
    subheading = "Restocks, new releases, and members-only perks.",
    buttonText = "Notify me",
    bodyText = "Foundry",
  } = props;
  return (
    <footer className="w-full bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 text-white" style={{ color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{heading}</h2>
          <p className="mt-3 text-cyan-50">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md items-center rounded-xl bg-white p-1.5 shadow-lg">
            <div className="flex flex-1 items-center gap-2 px-3">
              <Mail className="h-4 w-4 text-gray-400" />
              <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent py-2 text-sm text-gray-900 outline-none" required />
            </div>
            <button type="submit" className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">{buttonText}</button>
          </form>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-xs text-cyan-50 sm:flex-row">
          <p>© 2026 {bodyText}</p>
          <div className="flex gap-4"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a><a href="#" className="hover:text-white">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}
