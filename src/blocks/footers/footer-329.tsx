import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer329(props: BlockProps) {
  const {
    theme,
    heading = "Bloom",
    bodyText = "Download the app. Start growing.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0a0a0a] py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 to-emerald-700 px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-6 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-3xl font-bold">{heading}</p>
              <p className="mt-1 text-sm text-emerald-100">{bodyText}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5">
                <Apple className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-200">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5">
                <Smartphone className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-200">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-500">© 2026 {heading}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><Users className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
