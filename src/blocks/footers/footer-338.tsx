import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer338(props: BlockProps) {
  const {
    theme,
    heading = "Echo",
    bodyText = "One tap away.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0c0f14] py-12 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-3xl font-black text-black">{heading[0]}</div>
          <p className="text-2xl font-bold text-white">{heading}</p>
          <p className="-mt-2 text-sm text-gray-400">{bodyText}</p>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="#" className="flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 ring-1 ring-gray-800 hover:bg-gray-800">
              <Apple className="h-4 w-4 text-white" />
              <span className="text-xs font-semibold text-white">iOS</span>
            </a>
            <a href="#" className="flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 ring-1 ring-gray-800 hover:bg-gray-800">
              <Smartphone className="h-4 w-4 text-white" />
              <span className="text-xs font-semibold text-white">Android</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
          <p className="text-xs text-gray-600">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
