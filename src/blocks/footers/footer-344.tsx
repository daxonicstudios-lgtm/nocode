import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer344(props: BlockProps) {
  const {
    theme,
    heading = "Dash",
    bodyText = "Available on iOS, Android, and Web.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0e1014] py-16 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-900 p-8 sm:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-2xl font-bold text-white">Start using {heading} today</p>
              <p className="mt-2 text-sm text-gray-400">{bodyText}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a href="#" className="flex flex-1 items-center gap-3 rounded-lg bg-black px-4 py-3 ring-1 ring-gray-700 hover:ring-gray-500">
                <Apple className="h-7 w-7 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex flex-1 items-center gap-3 rounded-lg bg-black px-4 py-3 ring-1 ring-gray-700 hover:ring-gray-500">
                <Smartphone className="h-7 w-7 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-bold text-white">{heading}</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
          <p className="text-xs text-gray-500">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
