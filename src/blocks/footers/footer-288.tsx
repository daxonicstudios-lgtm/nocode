"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer288(props: BlockProps) {
  const {
    theme,
    heading = "Get the latest",
    subheading = "Monthly playbooks for growing teams.",
    buttonText = "Subscribe",
    bodyText = "Lever",
  } = props;
  return (
    <footer className="w-full bg-emerald-950 text-emerald-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-300">{bodyText}</p>
            <p className="mt-2 text-sm text-emerald-200">Tools for modern operators.</p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-sm text-emerald-200">{subheading}</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex max-w-md flex-col gap-2 sm:flex-row">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-md bg-emerald-900/50 px-4 py-3 text-sm text-white placeholder-emerald-400 outline-none ring-1 ring-emerald-800 focus:ring-emerald-200" required />
              <button type="submit" className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-300">{buttonText}</button>
            </form>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-emerald-900 pt-8 text-sm text-emerald-200 sm:grid-cols-4">
          <div><h3 className="font-semibold text-white">Product</h3><ul className="mt-2 space-y-1"><li><a href="#" className="hover:text-white">Features</a></li><li><a href="#" className="hover:text-white">Pricing</a></li></ul></div>
          <div><h3 className="font-semibold text-white">Company</h3><ul className="mt-2 space-y-1"><li><a href="#" className="hover:text-white">About</a></li><li><a href="#" className="hover:text-white">Careers</a></li></ul></div>
          <div><h3 className="font-semibold text-white">Resources</h3><ul className="mt-2 space-y-1"><li><a href="#" className="hover:text-white">Docs</a></li><li><a href="#" className="hover:text-white">Guides</a></li></ul></div>
          <div><h3 className="font-semibold text-white">Legal</h3><ul className="mt-2 space-y-1"><li><a href="#" className="hover:text-white">Privacy</a></li><li><a href="#" className="hover:text-white">Terms</a></li></ul></div>
        </div>
        <div className="mt-8 text-xs text-emerald-300">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
