import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer303(props: BlockProps) {
  const {
    theme,
    heading = "Glow",
    bodyText = "Download the app.",
  } = props;
  return (
    <footer
      className="relative w-full bg-slate-900 py-14 text-slate-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold tracking-tight text-white">{heading}</p>
            <p className="mt-2 text-sm text-slate-400">{bodyText}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-black hover:bg-slate-200">
              <Apple className="h-6 w-6" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-600">Download on the</p>
                <p className="text-sm font-bold">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-black hover:bg-slate-200">
              <Smartphone className="h-6 w-6" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-600">Get it on</p>
                <p className="text-sm font-bold">Google Play</p>
              </div>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-slate-400 hover:text-white"><Play className="h-5 w-5" /></a>
            <a href="#" aria-label="Discord" className="text-slate-400 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
          </div>
          <p className="text-xs text-slate-500">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
