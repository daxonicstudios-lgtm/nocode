"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";

export default function Footer059(props: BlockProps) {
  const {
    theme,
    heading = "Lumen",
    bodyText = "Weekly ideas on design and craft — no fluff.",
  } = props;
  const [email, setEmail] = useState("");
  return (
    <footer
      className="w-full bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-[1fr_1fr] sm:px-6 lg:px-8">
        <div className="border-r border-gray-200 pr-8 md:pr-12">
          <p className="font-mono text-lg uppercase tracking-widest">{heading}</p>
          <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
          <label className="text-xs font-medium uppercase tracking-wider text-gray-500">Newsletter</label>
          <div className="flex gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
              className="flex-1 border-b border-gray-300 bg-transparent py-2 text-sm outline-none focus:border-gray-900"
            />
            <button type="submit" className="border-b border-gray-900 pb-2 text-sm font-medium">
              Join →
            </button>
          </div>
        </form>
      </div>
      <p className="mx-auto mt-10 max-w-5xl px-4 text-xs text-gray-500 sm:px-6 lg:px-8">
        © 2026 {heading} Studio. All rights reserved.
      </p>
    </footer>
  );
}
