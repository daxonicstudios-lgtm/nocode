"use client";

import { ArrowRight, MessageCircle, Code, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer255(props: BlockProps) {
  const {
    theme,
    heading = "Never miss a drop",
    subheading = "Launch-day alerts, behind-the-scenes notes, and occasional deals.",
    buttonText = "Notify me",
    bodyText = "Orbit",
  } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="max-w-lg text-sm text-gray-600">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-lg items-center rounded-full border border-gray-300 bg-white p-1 focus-within:border-gray-900">
            <input type="email" placeholder="Your email address" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none" required />
            <button type="submit" className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90" style={{ backgroundColor: theme?.primary }}>
              {buttonText} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <div className="flex gap-3 text-gray-500">
            <a href="#" aria-label="Twitter" className="hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-900"><Code className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">
          © 2026 {bodyText}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
