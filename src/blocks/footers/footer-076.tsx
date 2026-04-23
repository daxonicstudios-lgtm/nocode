"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";

export default function Footer076(props: BlockProps) {
  const {
    theme,
    heading = "Crescent",
    bodyText = "Moments from our studio, in your inbox monthly.",
  } = props;
  const [email, setEmail] = useState("");
  return (
    <footer
      className="w-full bg-neutral-950 py-14 text-neutral-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-4xl italic text-white">{heading}</p>
          <p className="mt-2 max-w-sm text-sm">{bodyText}</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex items-end">
          <div className="flex w-full gap-0 border-b border-neutral-700 pb-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
            />
            <button type="submit" className="text-sm uppercase tracking-widest text-white hover:text-neutral-300">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <p className="mx-auto mt-10 max-w-5xl px-4 text-xs text-neutral-500 sm:px-6 lg:px-8">
        © 2026 {heading} Studio
      </p>
    </footer>
  );
}
