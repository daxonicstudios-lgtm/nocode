import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer330(props: BlockProps) {
  const {
    theme,
    heading = "Nova",
    bodyText = "Your new favorite app.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0b0b0e] py-16 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-4xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 max-w-md text-sm text-gray-400">{bodyText}</p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400">
              <div>
                <p className="text-2xl font-bold text-white">2M+</p>
                <p className="text-xs">Downloads</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4.9</p>
                <p className="text-xs">Avg rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">120+</p>
                <p className="text-xs">Countries</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-3 rounded-xl border border-gray-800 bg-black px-5 py-3">
              <Apple className="h-7 w-7 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</p>
                <p className="text-base font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl border border-gray-800 bg-black px-5 py-3">
              <Smartphone className="h-7 w-7 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Get it on</p>
                <p className="text-base font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-900 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">© 2026 {heading}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
