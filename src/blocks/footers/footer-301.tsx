import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer301(props: BlockProps) {
  const {
    theme,
    heading = "Ripple",
    bodyText = "Available on iOS and Android.",
  } = props;
  return (
    <footer
      className="w-full bg-gray-950 py-12 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-2 text-sm text-gray-400">{bodyText}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-lg border border-gray-700 bg-black px-4 py-2.5 text-left hover:border-gray-500">
              <Apple className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg border border-gray-700 bg-black px-4 py-2.5 text-left hover:border-gray-500">
              <Smartphone className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
          <div className="flex gap-5">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white"><Play className="h-5 w-5" /></a>
          </div>
          <p className="text-xs text-gray-500">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
