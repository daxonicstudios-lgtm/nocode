import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer308(props: BlockProps) {
  const {
    theme,
    heading = "Echo",
    bodyText = "Scan to download.",
  } = props;
  return (
    <footer
      className="w-full bg-gray-950 py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-3xl font-bold text-white">{heading}</p>
            <p className="mt-2 max-w-md text-sm text-gray-400">{bodyText}</p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-gray-700">
                <Apple className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-gray-700">
                <Smartphone className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="rounded-xl bg-white p-3">
              <div className="grid h-32 w-32 grid-cols-8 grid-rows-8 gap-[2px]">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={((i * 7) % 3 === 0 || i % 5 === 0) ? "bg-black" : "bg-white"} />
                ))}
              </div>
            </div>
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
