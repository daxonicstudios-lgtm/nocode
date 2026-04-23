import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer318(props: BlockProps) {
  const {
    theme,
    heading = "Echo",
    bodyText = "Available on iOS and Android.",
  } = props;
  return (
    <footer
      className="w-full bg-slate-950 py-14 text-slate-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-2xl font-bold text-white">Get {heading} on your phone</p>
              <p className="mt-2 text-sm text-slate-400">{bodyText}</p>
              <div className="mt-4 flex gap-3">
                <a href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 ring-1 ring-slate-700">
                  <Apple className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-[9px] uppercase text-slate-400">Download on the</p>
                    <p className="text-sm font-semibold text-white">App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 ring-1 ring-slate-700">
                  <Smartphone className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-[9px] uppercase text-slate-400">Get it on</p>
                    <p className="text-sm font-semibold text-white">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="rounded-xl bg-white p-2">
                <div className="grid h-28 w-28 grid-cols-7 grid-rows-7 gap-[2px]">
                  {Array.from({ length: 49 }).map((_, i) => (
                    <div key={i} className={((i * 11) % 2 === 0 || i % 3 === 0) ? "bg-black" : "bg-white"} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-slate-500">© 2026 {heading}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-slate-500 hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
