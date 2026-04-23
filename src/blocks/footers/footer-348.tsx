import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer348(props: BlockProps) {
  const {
    theme,
    heading = "Echo",
    bodyText = "Invite-only launch. Get on the list.",
    buttonText = "Request invite",
  } = props;
  return (
    <footer
      className="w-full bg-zinc-950 py-16 text-zinc-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-zinc-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Private beta
        </span>
        <p className="mt-5 text-4xl font-bold tracking-tight text-white">{heading}</p>
        <p className="mt-3 text-sm text-zinc-400">{bodyText}</p>
        <form className="mx-auto mt-7 flex max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="you@email.com"
            className="flex-1 rounded-lg bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 ring-1 ring-zinc-800 focus:outline-none focus:ring-zinc-600"
          />
          <button
            type="submit"
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-100"
          >
            {buttonText}
          </button>
        </form>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex gap-2 opacity-40">
            <div className="flex items-center gap-2 rounded-md bg-black px-3 py-1.5 ring-1 ring-zinc-800">
              <Apple className="h-4 w-4 text-white" /><span className="text-xs text-white">iOS soon</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-black px-3 py-1.5 ring-1 ring-zinc-800">
              <Smartphone className="h-4 w-4 text-white" /><span className="text-xs text-white">Android soon</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-zinc-500 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-zinc-500 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-zinc-500 hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
        <p className="mt-10 text-xs text-zinc-600">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
