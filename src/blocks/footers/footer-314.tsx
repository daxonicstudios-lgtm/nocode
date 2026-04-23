import { MessageCircle, Camera, Play, Code, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer314(props: BlockProps) {
  const {
    theme,
    heading = "Dash",
    bodyText = "Fast. Quiet. On every platform.",
  } = props;
  return (
    <footer
      className="w-full bg-zinc-950 py-12 text-zinc-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-2xl font-black text-black">{heading[0]}</div>
            <div>
              <p className="text-xl font-bold text-white">{heading}</p>
              <p className="text-sm text-zinc-400">{bodyText}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700">
              <Apple className="h-4 w-4" /> App Store
            </a>
            <a href="#" className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700">
              <Smartphone className="h-4 w-4" /> Google Play
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-6 sm:flex-row">
          <div className="flex gap-5">
            <a href="#" aria-label="Twitter" className="text-zinc-500 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-zinc-500 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-zinc-500 hover:text-white"><Play className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="text-zinc-500 hover:text-white"><Code className="h-4 w-4" /></a>
          </div>
          <p className="text-xs text-zinc-500">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
