import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer337(props: BlockProps) {
  const {
    theme,
    heading = "Spark",
    bodyText = "Join 2M+ creators making magic.",
  } = props;
  return (
    <footer
      className="w-full bg-black py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-8 sm:p-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-4xl font-extrabold text-white">{heading}</p>
            <p className="max-w-md text-sm text-gray-300">{bodyText}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#" className="flex items-center gap-3 rounded-xl bg-yellow-400 px-5 py-3 text-black hover:bg-yellow-300">
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider opacity-70">Download on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl bg-yellow-400 px-5 py-3 text-black hover:bg-yellow-300">
                <Smartphone className="h-6 w-6" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider opacity-70">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-yellow-400"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-yellow-400"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-yellow-400"><Play className="h-4 w-4" /></a>
            <a href="#" aria-label="Discord" className="text-gray-400 hover:text-yellow-400"><MessageCircle className="h-4 w-4" /></a>
          </div>
          <p className="text-xs text-gray-500">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
