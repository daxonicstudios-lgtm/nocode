import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer332(props: BlockProps) {
  const {
    theme,
    heading = "Pulse",
    bodyText = "Now on iOS and Android.",
  } = props;
  return (
    <footer
      className="w-full bg-[#090909] py-12 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-red-500">{heading}</p>
            <p className="mt-2 text-4xl font-black text-white">Ready when you are.</p>
            <p className="mt-2 max-w-md text-sm text-gray-400">{bodyText}</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-3 rounded-sm bg-red-600 px-4 py-2.5 hover:bg-red-500">
              <Apple className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-red-200">Download on the</p>
                <p className="text-sm font-bold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-sm bg-red-600 px-4 py-2.5 hover:bg-red-500">
              <Smartphone className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-red-200">Get it on</p>
                <p className="text-sm font-bold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-900 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">© 2026 {heading}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-red-500"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-red-500"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-red-500"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
