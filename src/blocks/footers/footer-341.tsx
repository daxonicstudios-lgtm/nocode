import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer341(props: BlockProps) {
  const {
    theme,
    heading = "Ripple",
    bodyText = "Your financial future, simplified.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0a1020] py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-500 text-white">
              <span className="text-lg font-bold">{heading[0]}</span>
            </div>
            <div>
              <p className="text-xl font-bold text-white">{heading}</p>
              <p className="text-xs text-gray-400">{bodyText}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-2.5 hover:bg-blue-500">
              <Apple className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-blue-200">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-2.5 hover:bg-blue-500">
              <Smartphone className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-blue-200">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">© 2026 {heading}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-400"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-blue-400"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
