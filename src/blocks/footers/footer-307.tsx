import { MessageCircle, Camera, Play, Gamepad2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer307(props: BlockProps) {
  const {
    theme,
    heading = "Spark",
    bodyText = "Join 50,000 creators on the waitlist.",
    buttonText = "Join waitlist",
  } = props;
  return (
    <footer
      className="w-full bg-purple-950 py-16 text-purple-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-3xl font-bold tracking-tight text-white">{heading}</p>
          <p className="max-w-md text-base text-purple-300">{bodyText}</p>
          <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-lg bg-purple-900/50 px-4 py-3 text-sm text-white placeholder:text-purple-400 ring-1 ring-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-purple-950 hover:bg-purple-100"
            >
              {buttonText}
            </button>
          </form>
          <div className="mt-4 flex gap-4">
            <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full bg-purple-900 text-white hover:bg-purple-800"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-purple-900 text-white hover:bg-purple-800"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full bg-purple-900 text-white hover:bg-purple-800"><Play className="h-4 w-4" /></a>
            <a href="#" aria-label="Discord" className="grid h-10 w-10 place-items-center rounded-full bg-purple-900 text-white hover:bg-purple-800"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitch" className="grid h-10 w-10 place-items-center rounded-full bg-purple-900 text-white hover:bg-purple-800"><Gamepad2 className="h-4 w-4" /></a>
          </div>
          <p className="mt-6 text-xs text-purple-400">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
