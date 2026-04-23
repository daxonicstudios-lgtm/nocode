"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer279(props: BlockProps) {
  const {
    theme,
    heading = "Never miss a drop",
    subheading = "Collection launches, alerts, and VIP access.",
    buttonText = "Notify me",
    bodyText = "Vault",
  } = props;
  return (
    <footer className="w-full bg-black text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gray-400">{bodyText} Insiders</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">{heading}</h2>
          <p className="mt-4 text-gray-400">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-10 flex max-w-xl items-stretch border border-white/20 bg-white/5">
            <input type="email" placeholder="EMAIL ADDRESS" className="flex-1 bg-transparent px-5 py-4 text-sm uppercase tracking-wider text-white placeholder-gray-500 outline-none" required />
            <button type="submit" className="bg-white px-6 text-sm font-bold uppercase tracking-widest text-black hover:bg-gray-200">{buttonText}</button>
          </form>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-gray-500">No spam · Unsubscribe anytime</p>
        </div>
        <div className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {bodyText}</p>
          <div className="flex gap-5"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a><a href="#" className="hover:text-white">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}
