import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer310(props: BlockProps) {
  const {
    theme,
    heading = "Nova",
    bodyText = "Your universe, in your pocket.",
  } = props;
  return (
    <footer
      className="relative w-full overflow-hidden bg-[#040714] py-16 text-slate-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-4xl font-black tracking-tight text-white">{heading}</p>
            <p className="mt-3 max-w-md text-sm text-slate-400">{bodyText}</p>
            <div className="mt-6 flex gap-5">
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-cyan-400"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-cyan-400"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-slate-400 hover:text-cyan-400"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href="#" className="flex w-full max-w-[220px] items-center gap-3 rounded-lg bg-black px-4 py-3 ring-1 ring-slate-700 hover:ring-cyan-400/50">
              <Apple className="h-7 w-7 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex w-full max-w-[220px] items-center gap-3 rounded-lg bg-black px-4 py-3 ring-1 ring-slate-700 hover:ring-cyan-400/50">
              <Smartphone className="h-7 w-7 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-900 pt-6 text-center text-xs text-slate-500">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
