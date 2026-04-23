import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer311(props: BlockProps) {
  const {
    theme,
    heading = "Ripple",
    bodyText = "Download the app.",
  } = props;
  return (
    <footer
      className="w-full bg-neutral-950 py-16 text-neutral-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-neutral-900 p-8 ring-1 ring-white/5 sm:p-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-3xl font-bold text-white">{heading}</p>
            <p className="max-w-md text-sm text-neutral-400">{bodyText}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#" className="flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-black hover:bg-neutral-200">
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-600">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-black hover:bg-neutral-200">
                <Smartphone className="h-6 w-6" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-600">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-neutral-400 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-neutral-400 hover:text-white"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-neutral-400 hover:text-white"><Play className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-neutral-500">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
