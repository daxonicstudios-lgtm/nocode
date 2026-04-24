"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer081(props: BlockProps) {
  const {
    theme,
    heading = "Kinfolk",
    bodyText = "Slow living dispatches, monthly.",
  } = props;
  const [email, setEmail] = useState("");
  return (
    <footer
      className="w-full bg-[#ece6da] py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-4xl text-stone-900">{heading}</p>
          <p className="mt-3 max-w-sm text-sm italic text-stone-700">{bodyText}</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-600">The newsletter</p>
          <div className="flex gap-0 border-b-2 border-stone-900 pb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your best email"
              className="flex-1 bg-transparent font-serif text-base italic text-stone-900 placeholder:text-stone-500 focus:outline-none"
            />
            <button type="submit" aria-label="Subscribe" className="text-stone-900">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
      <p className="mx-auto mt-10 max-w-5xl px-4 text-xs text-stone-500 sm:px-6 lg:px-8">
        © 2026 {heading} Press
      </p>
    </footer>
  );
}
