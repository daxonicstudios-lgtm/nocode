"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer096(props: BlockProps) {
  const {
    theme,
    heading = "Bright",
    bodyText = "Weekly lesson plans delivered to teachers.",
  } = props;
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <footer
      className="w-full bg-yellow-400 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-4xl font-black tracking-tight text-gray-900">{heading}.</p>
          <p className="mt-2 max-w-sm text-sm font-medium text-gray-800">{bodyText}</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col gap-2"
        >
          <div className="flex gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Teacher email"
              className="flex-1 rounded-md border-2 border-gray-900 bg-white px-3 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-gray-900 px-5 py-2 text-sm font-bold text-yellow-400 hover:bg-black"
            >
              Join
            </button>
          </div>
          {sent && (
            <p className="flex items-center gap-1 text-xs font-medium text-gray-800">
              <CheckCircle2 className="h-3 w-3" /> You are in.
            </p>
          )}
        </form>
      </div>
      <p className="mx-auto mt-10 max-w-5xl px-4 text-xs font-medium text-gray-800 sm:px-6 lg:px-8">
        © 2026 {heading} EdTech.
      </p>
    </footer>
  );
}
