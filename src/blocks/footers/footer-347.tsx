import { MessageCircle, Camera, Play, Gamepad2, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer347(props: BlockProps) {
  const {
    theme,
    heading = "Spark",
    bodyText = "The creator economy, reimagined.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0a0614] py-14 text-fuchsia-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent">{heading}</p>
            <p className="mt-2 max-w-md text-sm text-fuchsia-200/70">{bodyText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-lg bg-fuchsia-900/30 text-fuchsia-100 ring-1 ring-fuchsia-500/30 hover:bg-fuchsia-900/50"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-lg bg-fuchsia-900/30 text-fuchsia-100 ring-1 ring-fuchsia-500/30 hover:bg-fuchsia-900/50"><Camera className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-lg bg-fuchsia-900/30 text-fuchsia-100 ring-1 ring-fuchsia-500/30 hover:bg-fuchsia-900/50"><Play className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitch" className="grid h-10 w-10 place-items-center rounded-lg bg-fuchsia-900/30 text-fuchsia-100 ring-1 ring-fuchsia-500/30 hover:bg-fuchsia-900/50"><Gamepad2 className="h-4 w-4" /></a>
              <a href="#" aria-label="Discord" className="grid h-10 w-10 place-items-center rounded-lg bg-fuchsia-900/30 text-fuchsia-100 ring-1 ring-fuchsia-500/30 hover:bg-fuchsia-900/50"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2.5 hover:opacity-90">
              <Apple className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-fuchsia-100">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2.5 hover:opacity-90">
              <Smartphone className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-fuchsia-100">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-fuchsia-500/10 pt-6 text-center text-xs text-fuchsia-200/50">
          © 2026 {heading}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
