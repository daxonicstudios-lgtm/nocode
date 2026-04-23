import { MessageCircle, Camera, Users, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer306(props: BlockProps) {
  const {
    theme,
    heading = "Brew",
    bodyText = "Coffee, meet community.",
  } = props;
  return (
    <footer
      className="w-full bg-[#1a0f08] py-14 text-amber-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-bold text-amber-50">{heading}</p>
            <p className="mt-2 max-w-sm text-sm text-amber-100/60">{bodyText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-amber-500/20 hover:ring-amber-500/40">
              <Apple className="h-6 w-6 text-amber-50" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-100/50">Download on the</p>
                <p className="text-sm font-semibold text-amber-50">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-amber-500/20 hover:ring-amber-500/40">
              <Smartphone className="h-6 w-6 text-amber-50" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-100/50">Get it on</p>
                <p className="text-sm font-semibold text-amber-50">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-amber-500/10 pt-6 sm:flex-row">
          <p className="text-xs text-amber-100/40">© 2026 {heading}. Brewed with love.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-amber-100/60 hover:text-amber-50"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-amber-100/60 hover:text-amber-50"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="text-amber-100/60 hover:text-amber-50"><Users className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-amber-100/60 hover:text-amber-50"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
