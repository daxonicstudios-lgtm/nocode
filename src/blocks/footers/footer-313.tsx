import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer313(props: BlockProps) {
  const {
    theme,
    heading = "Glow",
    bodyText = "2M+ downloads · 4.9 rating · 120+ countries",
  } = props;
  return (
    <footer
      className="w-full bg-gradient-to-t from-indigo-950 to-black py-16 text-indigo-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-4xl font-extrabold tracking-tight text-white">{heading}</p>
          <p className="text-sm text-indigo-200/70">{bodyText}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 ring-1 ring-white/10 backdrop-blur hover:bg-white/15">
              <Apple className="h-6 w-6 text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-indigo-200/60">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 ring-1 ring-white/10 backdrop-blur hover:bg-white/15">
              <Smartphone className="h-6 w-6 text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-indigo-200/60">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
          <div className="mt-2 flex gap-4">
            <a href="#" aria-label="Twitter" className="text-indigo-200/70 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-indigo-200/70 hover:text-white"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-indigo-200/70 hover:text-white"><Play className="h-5 w-5" /></a>
            <a href="#" aria-label="Discord" className="text-indigo-200/70 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
          </div>
          <p className="mt-4 text-xs text-indigo-300/50">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
