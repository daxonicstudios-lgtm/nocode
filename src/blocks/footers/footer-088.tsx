"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";

export default function Footer088(props: BlockProps) {
  const {
    theme,
    heading = "Boulder",
    bodyText = "Outdoor gear for folks who actually go outside.",
  } = props;
  const [email, setEmail] = useState("");
  return (
    <footer
      className="w-full bg-stone-800 py-12 text-stone-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-2xl font-bold uppercase tracking-wide text-white">{heading}</p>
          <p className="mt-2 max-w-sm text-sm text-stone-400">{bodyText}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Trail Reports</p>
          <p className="mt-1 text-xs text-stone-400">Monthly dispatch from the field.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="flex-1 rounded-none border border-stone-600 bg-stone-900 px-3 py-2 text-sm text-white outline-none focus:border-stone-400"
            />
            <button
              type="submit"
              className="rounded-none bg-orange-600 px-4 py-2 text-sm font-bold uppercase text-white hover:bg-orange-500"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-5xl px-4 text-xs text-stone-500 sm:px-6 lg:px-8">
        © 2026 {heading} Outdoor Co.
      </p>
    </footer>
  );
}
