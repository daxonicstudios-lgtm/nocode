"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer265(props: BlockProps) {
  const {
    theme,
    heading = "Weekly dispatch",
    subheading = "Thoughtful reads, every Saturday.",
    buttonText = "Subscribe",
    bodyText = "Verity",
  } = props;
  return (
    <footer className="w-full bg-zinc-900 text-zinc-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-2 max-w-md text-zinc-400">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input type="email" placeholder="Email" className="flex-1 rounded-md bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none ring-1 ring-zinc-700 focus:ring-white" required />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200">
                {buttonText} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-white">Explore</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Archive</a></li>
                <li><a href="#" className="hover:text-white">Topics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-zinc-800 pt-6 text-xs text-zinc-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
