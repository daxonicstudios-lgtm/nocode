import { MessageCircle, Camera, Play, Gamepad2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer327(props: BlockProps) {
  const {
    theme,
    heading = "Spark",
    bodyText = "The creator network for the next generation.",
    buttonText = "Join the waitlist",
  } = props;
  return (
    <footer
      className="w-full bg-gradient-to-br from-fuchsia-950 via-black to-indigo-950 py-20 text-gray-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-5xl font-black tracking-tight text-white">{heading}</p>
        <p className="mx-auto mt-4 max-w-md text-base text-gray-300">{bodyText}</p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full bg-white/5 px-5 py-3 text-sm text-white placeholder:text-gray-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            {buttonText}
          </button>
        </form>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#" aria-label="Twitter" className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10"><Camera className="h-4 w-4" /></a>
          <a href="#" aria-label="YouTube" className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10"><Play className="h-4 w-4" /></a>
          <a href="#" aria-label="Twitch" className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10"><Gamepad2 className="h-4 w-4" /></a>
          <a href="#" aria-label="Discord" className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10"><MessageCircle className="h-4 w-4" /></a>
        </div>
        <p className="mt-10 text-xs text-gray-500">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
