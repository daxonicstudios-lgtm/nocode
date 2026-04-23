import { MessageCircle, Camera, Users, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer315(props: BlockProps) {
  const {
    theme,
    heading = "Zen",
    bodyText = "Be first in line. We launch Fall 2026.",
    buttonText = "Request early access",
  } = props;
  return (
    <footer
      className="w-full bg-[#0b0d10] py-20 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">Coming soon</p>
        <p className="mt-4 text-5xl font-bold tracking-tight text-white">{heading}</p>
        <p className="mt-4 text-base text-gray-400">{bodyText}</p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@email.com"
            className="flex-1 rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
          >
            {buttonText}
          </button>
        </form>
        <div className="mt-10 flex justify-center gap-5">
          <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white"><Camera className="h-5 w-5" /></a>
          <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-white"><Users className="h-5 w-5" /></a>
          <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-white"><Play className="h-5 w-5" /></a>
          <a href="#" aria-label="Discord" className="text-gray-500 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
        </div>
        <p className="mt-10 text-xs text-gray-600">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
