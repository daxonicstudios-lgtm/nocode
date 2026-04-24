import { MessageCircle, Camera, Users, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer309(props: BlockProps) {
  const {
    theme,
    heading = "Bloom",
    bodyText = "Grow your day with us.",
  } = props;
  return (
    <footer
      className="w-full bg-gradient-to-b from-pink-950 to-black py-14 text-pink-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <p className="text-4xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 max-w-md text-sm text-pink-200/70">{bodyText}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-xl bg-black/60 px-5 py-3 ring-1 ring-pink-400/20 backdrop-blur hover:ring-pink-400/40">
              <Apple className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-pink-200/60">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl bg-black/60 px-5 py-3 ring-1 ring-pink-400/20 backdrop-blur hover:ring-pink-400/40">
              <Smartphone className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-pink-200/60">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20"><Users className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20"><Play className="h-4 w-4" /></a>
          </div>
          <p className="text-xs text-pink-200/50">© 2026 {heading}. Bloom where you&apos;re planted.</p>
        </div>
      </div>
    </footer>
  );
}
