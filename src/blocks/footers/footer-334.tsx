import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer334(props: BlockProps) {
  const {
    theme,
    heading = "Dash",
    bodyText = "Available everywhere you are.",
  } = props;
  return (
    <footer
      className="w-full bg-neutral-900 py-16 text-neutral-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-3xl font-bold text-white">{heading}</p>
        <p className="mt-3 text-sm text-neutral-400">{bodyText}</p>
        <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#" className="flex flex-1 items-center justify-center gap-3 rounded-lg border-2 border-white bg-transparent px-5 py-3 text-white transition hover:bg-white hover:text-black">
            <Apple className="h-6 w-6" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider opacity-70">Download on the</p>
              <p className="text-sm font-bold">App Store</p>
            </div>
          </a>
          <a href="#" className="flex flex-1 items-center justify-center gap-3 rounded-lg border-2 border-white bg-transparent px-5 py-3 text-white transition hover:bg-white hover:text-black">
            <Smartphone className="h-6 w-6" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider opacity-70">Get it on</p>
              <p className="text-sm font-bold">Google Play</p>
            </div>
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-5 text-neutral-400">
          <a href="#" aria-label="Twitter" className="hover:text-white"><MessageCircle className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-white"><Camera className="h-5 w-5" /></a>
          <a href="#" aria-label="YouTube" className="hover:text-white"><Play className="h-5 w-5" /></a>
        </div>
        <p className="mt-8 text-xs text-neutral-500">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
