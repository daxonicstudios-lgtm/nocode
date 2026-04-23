import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer320(props: BlockProps) {
  const {
    theme,
    heading = "Nova",
    bodyText = "Your universe, in your pocket.",
  } = props;
  return (
    <footer
      className="w-full bg-black py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-[1px]">
          <div className="rounded-2xl bg-black p-8 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{heading}</p>
                <p className="mt-1 text-sm text-gray-400">{bodyText}</p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-black hover:bg-gray-200">
                  <Apple className="h-5 w-5" />
                  <div>
                    <p className="text-[9px] uppercase text-gray-600">Download</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-black hover:bg-gray-200">
                  <Smartphone className="h-5 w-5" />
                  <div>
                    <p className="text-[9px] uppercase text-gray-600">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
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
