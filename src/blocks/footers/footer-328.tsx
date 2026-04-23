import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer328(props: BlockProps) {
  const {
    theme,
    heading = "Echo",
    bodyText = "Your voice, everywhere.",
  } = props;
  return (
    <footer
      className="w-full bg-black py-10 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 border-b border-gray-900 pb-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xl font-bold text-white">{heading}</p>
            <p className="text-xs text-gray-500">{bodyText}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a href="#" className="flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 hover:bg-gray-800">
              <Apple className="h-4 w-4 text-white" />
              <span className="text-xs font-medium text-white">App Store</span>
            </a>
            <a href="#" className="flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 hover:bg-gray-800">
              <Smartphone className="h-4 w-4 text-white" />
              <span className="text-xs font-medium text-white">Google Play</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-600">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
