"use client";

import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer289(props: BlockProps) {
  const {
    theme,
    heading = "Stay in the loop",
    subheading = "Fresh ideas. Every two weeks.",
    buttonText = "Subscribe",
    bodyText = "Arcade",
  } = props;
  return (
    <footer className="w-full bg-[#fef6e4] text-[#172c66]" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-[#172c66] bg-white p-8 shadow-[6px_6px_0_0_#172c66] sm:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{heading}</h2>
              <p className="mt-2 text-sm text-[#5a5a7a]">{subheading}</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input type="email" placeholder="your@email.com" className="w-full rounded-lg border-2 border-[#172c66] bg-white px-4 py-3 text-sm outline-none" required />
              <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f582ae] px-5 py-3 text-sm font-bold text-[#172c66] hover:bg-[#f472a6]">
                {buttonText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-[#5a5a7a]">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
