import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer316(props: BlockProps) {
  const {
    theme,
    heading = "Brew",
    bodyText = "Now brewing on iOS and Android.",
  } = props;
  return (
    <footer
      className="w-full bg-stone-950 py-14 text-stone-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-3xl font-bold text-white">{heading}</p>
            <p className="mt-2 max-w-md text-sm text-stone-400">{bodyText}</p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400">Get the app</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-3 rounded-md bg-black px-4 py-2.5 ring-1 ring-stone-800">
                <Apple className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-md bg-black px-4 py-2.5 ring-1 ring-stone-800">
                <Smartphone className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-stone-900 pt-6 sm:flex-row">
          <p className="text-xs text-stone-500">© 2026 {heading}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full bg-stone-800 text-white hover:bg-stone-700"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-stone-800 text-white hover:bg-stone-700"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-stone-800 text-white hover:bg-stone-700"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
