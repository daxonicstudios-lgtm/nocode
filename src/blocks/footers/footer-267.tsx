"use client";

import type { BlockProps } from "@/blocks/types";

export default function Footer267(props: BlockProps) {
  const {
    theme,
    heading = "Get the latest",
    subheading = "Bi-weekly stories delivered to your inbox.",
    buttonText = "Subscribe",
    bodyText = "Cedar",
  } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Newsletter</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-2 max-w-md text-sm text-gray-600">{subheading}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full md:max-w-md">
            <label htmlFor="nl267" className="block text-xs font-medium text-gray-700">Email address</label>
            <div className="mt-1 flex gap-2">
              <input id="nl267" type="email" placeholder="name@example.com" className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900" required />
              <button type="submit" className="rounded-md border border-gray-900 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white" style={{ borderColor: theme?.primary }}>{buttonText}</button>
            </div>
          </form>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-gray-200 pt-10 text-sm text-gray-600 sm:grid-cols-4">
          <div><h3 className="font-semibold text-gray-900">Shop</h3><ul className="mt-3 space-y-1"><li><a href="#">All</a></li><li><a href="#">New</a></li></ul></div>
          <div><h3 className="font-semibold text-gray-900">Help</h3><ul className="mt-3 space-y-1"><li><a href="#">Shipping</a></li><li><a href="#">Returns</a></li></ul></div>
          <div><h3 className="font-semibold text-gray-900">About</h3><ul className="mt-3 space-y-1"><li><a href="#">Story</a></li><li><a href="#">Press</a></li></ul></div>
          <div><h3 className="font-semibold text-gray-900">Legal</h3><ul className="mt-3 space-y-1"><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li></ul></div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© 2026 {bodyText}. All rights reserved.</div>
      </div>
    </footer>
  );
}
