import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer340(props: BlockProps) {
  const {
    theme,
    heading = "Nova",
    bodyText = "Discover the universe in your pocket.",
  } = props;
  return (
    <footer
      className="w-full bg-[#050916] py-16 text-slate-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center">
          <div>
            <p className="text-5xl font-extrabold tracking-tighter text-white">{heading}</p>
            <p className="mt-3 text-sm text-slate-400">{bodyText}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-3 ring-1 ring-white/10 backdrop-blur-md hover:bg-white/10">
              <Apple className="h-7 w-7 text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">Download on the</p>
                <p className="text-base font-bold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-3 ring-1 ring-white/10 backdrop-blur-md hover:bg-white/10">
              <Smartphone className="h-7 w-7 text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">Get it on</p>
                <p className="text-base font-bold text-white">Google Play</p>
              </div>
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-white"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-slate-500 hover:text-white"><Play className="h-5 w-5" /></a>
          </div>
          <p className="text-xs text-slate-600">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
