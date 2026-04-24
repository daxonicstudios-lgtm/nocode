"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer292(props: BlockProps) {
  const {
    theme,
    heading = "Join our newsletter",
    subheading = "Startup lessons from operators, every Tuesday.",
    buttonText = "Subscribe",
    bodyText = "Anvil",
  } = props;
  return (
    <footer className="w-full bg-indigo-600 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
            <p className="mt-1 text-sm text-indigo-100">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-md bg-white px-4 py-3 text-sm text-gray-900 outline-none" required />
            <button type="submit" className="rounded-md bg-indigo-900 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-950">{buttonText}</button>
          </form>
        </div>
      </div>
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-2 text-xs text-indigo-100 sm:flex-row sm:items-center">
            <p>© 2026 {bodyText}. All rights reserved.</p>
            <div className="flex gap-4"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a><a href="#" className="hover:text-white">Contact</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
