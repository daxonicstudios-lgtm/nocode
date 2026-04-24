"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer274(props: BlockProps) {
  const {
    theme,
    heading = "Get the latest",
    subheading = "Industry news, every Monday morning.",
    buttonText = "Subscribe",
    bodyText = "Conduit",
  } = props;
  return (
    <footer className="w-full bg-white text-gray-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="bg-gray-900 p-10 text-white sm:p-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-3 max-w-sm text-gray-300">{subheading}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-7 space-y-3">
            <input type="email" placeholder="you@example.com" className="w-full rounded-md bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-white/20 focus:ring-white" required />
            <button type="submit" className="w-full rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200">{buttonText}</button>
          </form>
        </div>
        <div className="bg-gray-50 p-10 sm:p-14">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">{bodyText}</h3>
          <div className="mt-5 grid grid-cols-2 gap-6 text-sm">
            <div><p className="font-semibold">Product</p><ul className="mt-2 space-y-1 text-gray-600"><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li><li><a href="#">Docs</a></li></ul></div>
            <div><p className="font-semibold">Company</p><ul className="mt-2 space-y-1 text-gray-600"><li><a href="#">About</a></li><li><a href="#">Blog</a></li><li><a href="#">Contact</a></li></ul></div>
          </div>
          <p className="mt-10 text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
