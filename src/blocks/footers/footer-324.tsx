import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer324(props: BlockProps) {
  const {
    theme,
    heading = "Dash",
    bodyText = "Delivery in under 10 minutes.",
  } = props;
  return (
    <footer
      className="w-full bg-gray-950 py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          <div className="md:col-span-1">
            <p className="text-3xl font-bold text-white">{heading}</p>
            <p className="mt-2 text-sm text-gray-400">{bodyText}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:col-span-1">
            <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-gray-700 hover:ring-yellow-400">
              <Apple className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-gray-700 hover:ring-yellow-400">
              <Smartphone className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
          <div className="flex gap-4 md:col-span-1 md:justify-end">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-yellow-400"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-yellow-400"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-yellow-400"><Play className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-900 pt-6 text-center text-xs text-gray-500">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
