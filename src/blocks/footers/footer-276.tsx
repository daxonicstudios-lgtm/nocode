"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer276(props: BlockProps) {
  const {
    theme,
    heading = "Subscribe to our weekly digest",
    subheading = "Handpicked articles delivered every Wednesday.",
    buttonText = "Count me in",
    bodyText = "Gazette",
  } = props;
  return (
    <footer className="w-full bg-[#f6f2ec] text-[#2b2b2b]" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="border-y border-[#2b2b2b]/20 py-12">
          <p className="text-xs uppercase tracking-[0.35em]">The Gazette Weekly</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">{heading}</h2>
          <p className="mt-4 max-w-lg text-base text-[#5a5a5a]">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label className="text-xs font-semibold uppercase tracking-widest">Email</label>
              <input type="email" placeholder="you@example.com" className="mt-1 w-full border-b border-[#2b2b2b] bg-transparent py-2 text-sm outline-none" required />
            </div>
            <button type="submit" className="border-2 border-[#2b2b2b] px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#2b2b2b] hover:text-white">{buttonText}</button>
          </form>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-2 text-xs text-[#5a5a5a] sm:flex-row sm:items-center">
          <p>© 2026 {bodyText}. All rights reserved.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-[#2b2b2b]">Privacy</a><a href="#" className="hover:text-[#2b2b2b]">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
