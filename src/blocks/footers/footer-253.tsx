"use client";

import { Send } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer253(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "Get weekly insights in your inbox.",
    buttonText = "Sign up",
    bodyText = "Lumen",
  } = props;
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white" style={{ color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-sm text-indigo-100">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input type="email" placeholder="name@work.com" className="flex-1 rounded-md bg-white/10 px-4 py-3 text-sm text-white placeholder-indigo-200 outline-none ring-1 ring-white/20 focus:ring-white" required />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">
                <Send className="h-4 w-4" /> {buttonText}
              </button>
            </form>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-semibold">{bodyText}</p>
            <ul className="mt-3 space-y-1 text-sm text-indigo-100">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 text-xs text-indigo-100">
          © 2026 {bodyText}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
