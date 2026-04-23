import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer343(props: BlockProps) {
  const {
    theme,
    heading = "Glow",
    bodyText = "Beautiful by design. Fast by default.",
  } = props;
  return (
    <footer
      className="w-full bg-gradient-to-br from-black via-violet-950 to-black py-16 text-violet-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-4xl font-bold text-white">{heading}</p>
            <p className="mt-2 max-w-sm text-sm text-violet-200/70">{bodyText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-violet-400/30">
                <Apple className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-violet-200/60">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-violet-400/30">
                <Smartphone className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-violet-200/60">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex gap-3 md:flex-col">
            <a href="#" aria-label="Twitter" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20"><Play className="h-4 w-4" /></a>
            <a href="#" aria-label="Discord" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-violet-300/50">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
