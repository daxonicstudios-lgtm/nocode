import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer326(props: BlockProps) {
  const {
    theme,
    heading = "Brew",
    bodyText = "1M+ cups made with ease.",
  } = props;
  return (
    <footer
      className="w-full bg-[#1a120a] py-14 text-amber-50/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-3xl font-bold text-amber-50">{heading}</p>
            <p className="mt-2 text-sm text-amber-100/60">{bodyText}</p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full bg-amber-900/40 text-amber-100 hover:bg-amber-800/60"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-amber-900/40 text-amber-100 hover:bg-amber-800/60"><Camera className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-amber-900/40 text-amber-100 hover:bg-amber-800/60"><Users className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full bg-amber-900/40 text-amber-100 hover:bg-amber-800/60"><Play className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href="#" className="flex w-full max-w-[210px] items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-amber-500/20">
              <Apple className="h-6 w-6 text-amber-50" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-100/60">Download on the</p>
                <p className="text-sm font-semibold text-amber-50">App Store</p>
              </div>
            </a>
            <a href="#" className="flex w-full max-w-[210px] items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-amber-500/20">
              <Smartphone className="h-6 w-6 text-amber-50" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-100/60">Get it on</p>
                <p className="text-sm font-semibold text-amber-50">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-amber-500/10 pt-6 text-center text-xs text-amber-100/40">
          © 2026 {heading}. Crafted daily.
        </div>
      </div>
    </footer>
  );
}
