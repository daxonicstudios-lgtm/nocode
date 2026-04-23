"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer100(props: BlockProps) {
  const {
    theme,
    heading = "Ascent",
    bodyText = "Level up your side project into a business.",
  } = props;
  const [email, setEmail] = useState("");
  return (
    <footer
      className="w-full bg-gradient-to-br from-gray-900 via-indigo-950 to-slate-900 py-14 text-gray-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <ArrowUpRight className="h-6 w-6 text-violet-400" />
            <p className="text-2xl font-bold text-white">{heading}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-gray-400">{bodyText}</p>
          <p className="mt-6 text-xs uppercase tracking-widest text-gray-500">
            Trusted by 12,000+ indie founders
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-3 md:items-end"
        >
          <p className="text-sm font-medium text-white">Get the founder digest</p>
          <div className="flex w-full max-w-sm gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@startup.com"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-violet-400"
            />
            <button
              type="submit"
              className="rounded-lg bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-400"
            >
              Subscribe
            </button>
          </div>
          <p className="text-[11px] text-gray-500 md:text-right">
            One email weekly · Unsubscribe anytime.
          </p>
        </form>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-white/10 px-4 pt-4 text-xs text-gray-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {heading} Labs · Built in Africa for the world.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">Terms</a>
          <a href="#" className="hover:text-gray-300">Privacy</a>
          <a href="#" className="hover:text-gray-300">Status</a>
        </div>
      </div>
    </footer>
  );
}
