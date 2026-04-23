"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer272(props: BlockProps) {
  const {
    theme,
    heading = "Never miss a drop",
    subheading = "First access, member pricing.",
    buttonText = "Subscribe",
    bodyText = "Ember",
  } = props;
  return (
    <footer className="w-full bg-orange-500 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-2 text-orange-100">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="md:col-span-7">
            <div className="flex flex-col gap-2 sm:flex-row">
              <input type="email" placeholder="Enter email address" className="flex-1 rounded-md border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder-orange-100 outline-none focus:border-white" required />
              <button type="submit" className="rounded-md bg-white px-6 py-3 text-sm font-bold text-orange-600 hover:bg-orange-50">{buttonText}</button>
            </div>
            <p className="mt-2 text-xs text-orange-100">No spam. Unsubscribe anytime.</p>
          </form>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/20 pt-8 text-sm text-orange-50 sm:grid-cols-4">
          <div><h3 className="font-semibold text-white">Shop</h3><ul className="mt-2 space-y-1"><li><a href="#" className="hover:text-white">New</a></li><li><a href="#" className="hover:text-white">Sale</a></li></ul></div>
          <div><h3 className="font-semibold text-white">Help</h3><ul className="mt-2 space-y-1"><li><a href="#" className="hover:text-white">FAQ</a></li><li><a href="#" className="hover:text-white">Contact</a></li></ul></div>
          <div><h3 className="font-semibold text-white">About</h3><ul className="mt-2 space-y-1"><li><a href="#" className="hover:text-white">Story</a></li><li><a href="#" className="hover:text-white">Press</a></li></ul></div>
          <div><h3 className="font-semibold text-white">Legal</h3><ul className="mt-2 space-y-1"><li><a href="#" className="hover:text-white">Privacy</a></li><li><a href="#" className="hover:text-white">Terms</a></li></ul></div>
        </div>
        <div className="mt-8 text-xs text-orange-100">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
