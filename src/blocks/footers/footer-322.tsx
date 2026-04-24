import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer322(props: BlockProps) {
  const {
    theme,
    heading = "Pulse",
    bodyText = "Your workout, upgraded.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0a0f1a] py-16 text-sky-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="text-4xl font-black uppercase tracking-tight text-white">{heading}</p>
          <p className="max-w-md text-sm text-sky-200/70">{bodyText}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-2xl bg-sky-500 px-5 py-3 text-white hover:bg-sky-400">
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-sky-100">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-2xl bg-sky-500 px-5 py-3 text-white hover:bg-sky-400">
              <Smartphone className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-sky-100">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-lg bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30 hover:bg-sky-500/20"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-lg bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30 hover:bg-sky-500/20"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-lg bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30 hover:bg-sky-500/20"><Play className="h-4 w-4" /></a>
            <a href="#" aria-label="Discord" className="grid h-10 w-10 place-items-center rounded-lg bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30 hover:bg-sky-500/20"><MessageCircle className="h-4 w-4" /></a>
          </div>
          <p className="text-xs text-sky-300/50">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
