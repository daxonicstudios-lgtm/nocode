"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";

export default function Footer068(props: BlockProps) {
  const {
    theme,
    heading = "Ledger",
    bodyText = "Financial clarity, every Monday in your inbox.",
  } = props;
  const [email, setEmail] = useState("");
  return (
    <footer
      className="w-full bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 px-8 py-10 sm:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-3xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-gray-900"
            />
            <button
              type="submit"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-4xl px-8 text-xs text-gray-500 sm:px-12">
        © 2026 {heading} Media.
      </p>
    </footer>
  );
}
