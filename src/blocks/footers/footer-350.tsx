import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer350(props: BlockProps) {
  const {
    theme,
    heading = "Nova",
    bodyText = "Now available on iOS and Android. Join millions.",
  } = props;
  return (
    <footer
      className="relative w-full overflow-hidden bg-black py-16 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-5xl font-black tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-base text-gray-400">{bodyText}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span><span className="font-bold text-white">2M+</span> downloads</span>
              <span className="text-gray-700">·</span>
              <span><span className="font-bold text-white">4.9</span> rating</span>
              <span className="text-gray-700">·</span>
              <span><span className="font-bold text-white">120+</span> countries</span>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-cyan-400"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-cyan-400"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-cyan-400"><Play className="h-5 w-5" /></a>
              <a href="#" aria-label="Discord" className="text-gray-400 hover:text-cyan-400"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex flex-col gap-3 w-full max-w-[260px]">
              <a href="#" className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-black hover:bg-gray-100">
                <Apple className="h-7 w-7" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Download on the</p>
                  <p className="text-base font-bold">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-black hover:bg-gray-100">
                <Smartphone className="h-7 w-7" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-600">Get it on</p>
                  <p className="text-base font-bold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-900 pt-6 text-center text-xs text-gray-500">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
