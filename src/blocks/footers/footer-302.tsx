import { MessageCircle, Camera, Users, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer302(props: BlockProps) {
  const {
    theme,
    heading = "Pulse",
    bodyText = "Join millions around the world.",
  } = props;
  return (
    <footer
      className="w-full bg-black py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-3xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 max-w-md text-sm text-gray-400">{bodyText}</p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full bg-gray-900 text-white hover:bg-gray-800"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-gray-900 text-white hover:bg-gray-800"><Camera className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-gray-900 text-white hover:bg-gray-800"><Users className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full bg-gray-900 text-white hover:bg-gray-800"><Play className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href="#" className="flex w-full max-w-[200px] items-center gap-3 rounded-xl bg-white/5 px-4 py-2.5 ring-1 ring-white/10 hover:bg-white/10">
              <Apple className="h-7 w-7 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex w-full max-w-[200px] items-center gap-3 rounded-xl bg-white/5 px-4 py-2.5 ring-1 ring-white/10 hover:bg-white/10">
              <Smartphone className="h-7 w-7 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-900 pt-6 text-center text-xs text-gray-500">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
