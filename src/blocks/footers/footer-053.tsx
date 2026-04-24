"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer053(props: BlockProps) {
  const {
    theme,
    heading = "Orbit",
    bodyText = "Get product updates in your inbox, once a month.",
  } = props;
  const [email, setEmail] = useState("");
  return (
    <footer
      className="w-full border-t border-gray-200 bg-[#fafafa] py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-xl font-bold tracking-tight">{heading}</p>
          <p className="mt-2 max-w-sm text-sm text-gray-600">{bodyText}</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full items-stretch gap-2 md:justify-end"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full max-w-xs rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-900"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Subscribe <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-gray-200 px-4 pt-4 text-xs text-gray-500 sm:px-6 lg:px-8">
        © 2026 {heading}. All rights reserved.
      </div>
    </footer>
  );
}
