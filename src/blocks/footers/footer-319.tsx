import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer319(props: BlockProps) {
  const {
    theme,
    heading = "Bloom",
    bodyText = "A quieter kind of internet.",
  } = props;
  return (
    <footer
      className="w-full bg-emerald-950 py-14 text-emerald-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="text-3xl font-bold text-white">{heading}</p>
            <p className="mt-2 text-sm text-emerald-200/70">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Twitter" className="text-emerald-200/70 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-emerald-200/70 hover:text-white"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-emerald-200/70 hover:text-white"><Users className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-emerald-200/70 hover:text-white"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-200/70">Get the app</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black/60 px-4 py-2.5 ring-1 ring-emerald-400/20">
                <Apple className="h-5 w-5 text-white" />
                <div>
                  <p className="text-[10px] uppercase text-emerald-200/60">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black/60 px-4 py-2.5 ring-1 ring-emerald-400/20">
                <Smartphone className="h-5 w-5 text-white" />
                <div>
                  <p className="text-[10px] uppercase text-emerald-200/60">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-emerald-400/10 pt-6 text-center text-xs text-emerald-200/50">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
