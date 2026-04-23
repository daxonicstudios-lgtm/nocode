import { MessageCircle, Camera, Play, Gamepad2, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer317(props: BlockProps) {
  const {
    theme,
    heading = "Spark",
    bodyText = "Join the community of 2M+ creators.",
  } = props;
  return (
    <footer
      className="w-full bg-black py-16 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="text-5xl font-black uppercase tracking-tight text-white">{heading}</p>
          <p className="max-w-md text-sm text-gray-400">{bodyText}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" aria-label="Twitter" className="grid h-12 w-12 place-items-center rounded-full bg-[#1DA1F2] text-white hover:opacity-90"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-pink-500 to-yellow-500 text-white hover:opacity-90"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="grid h-12 w-12 place-items-center rounded-full bg-red-600 text-white hover:opacity-90"><Play className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitch" className="grid h-12 w-12 place-items-center rounded-full bg-purple-600 text-white hover:opacity-90"><Gamepad2 className="h-5 w-5" /></a>
            <a href="#" aria-label="Discord" className="grid h-12 w-12 place-items-center rounded-full bg-indigo-600 text-white hover:opacity-90"><MessageCircle className="h-5 w-5" /></a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-lg border border-gray-700 bg-black px-4 py-2.5">
              <Apple className="h-6 w-6 text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg border border-gray-700 bg-black px-4 py-2.5">
              <Smartphone className="h-6 w-6 text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
          <p className="text-xs text-gray-600">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
