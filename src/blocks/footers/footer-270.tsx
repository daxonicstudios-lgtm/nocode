"use client";

import { Mail, Camera, MessageCircle, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer270(props: BlockProps) {
  const {
    theme,
    heading = "Get the latest",
    subheading = "New drops, stories, and member perks in your inbox.",
    buttonText = "Subscribe",
    bodyText = "Linen",
  } = props;
  return (
    <footer className="w-full bg-neutral-50 text-neutral-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Mail className="h-6 w-6 text-neutral-700" />
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{heading}</h2>
          <p className="mt-3 max-w-md text-sm text-neutral-600">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="your@email.com" className="flex-1 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm outline-none focus:border-neutral-900" required />
            <button type="submit" className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black" style={{ backgroundColor: theme?.primary }}>{buttonText}</button>
          </form>
          <div className="mt-6 flex gap-4 text-neutral-500">
            <a href="#" aria-label="Instagram" className="hover:text-neutral-900"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-neutral-900"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-neutral-900"><Play className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-14 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
