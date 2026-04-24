import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer333(props: BlockProps) {
  const {
    theme,
    heading = "Glow",
    bodyText = "Scan the QR or search 'Glow' in the store.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0e0a1e] py-14 text-violet-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            <div className="rounded-2xl bg-white p-3">
              <div className="grid h-32 w-32 grid-cols-8 grid-rows-8 gap-px">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={((i * 13) % 3 === 0 || i % 4 === 0) ? "bg-black" : "bg-white"} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">{heading}</p>
            <p className="mt-2 text-sm text-violet-200/70">{bodyText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-violet-500/30">
                <Apple className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-violet-200/60">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-violet-500/30">
                <Smartphone className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-violet-200/60">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Twitter" className="text-violet-300 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="text-violet-300 hover:text-white"><Camera className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="text-violet-300 hover:text-white"><Play className="h-4 w-4" /></a>
              <a href="#" aria-label="Discord" className="text-violet-300 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-violet-500/10 pt-6 text-center text-xs text-violet-300/50">
          © 2026 {heading}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
