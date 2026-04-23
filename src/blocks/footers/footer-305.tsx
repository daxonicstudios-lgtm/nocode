import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer305(props: BlockProps) {
  const {
    theme,
    heading = "Zen",
    bodyText = "Calm, focused, every day.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0b0f19] py-16 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <p className="text-4xl font-light tracking-widest text-white">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span><span className="font-semibold text-white">2M+</span> downloads</span>
            <span className="text-gray-700">·</span>
            <span><span className="font-semibold text-white">4.9</span> rating</span>
            <span className="hidden text-gray-700 sm:inline">·</span>
            <span className="hidden sm:inline"><span className="font-semibold text-white">120+</span> countries</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-full border border-white/20 bg-transparent px-5 py-2.5 hover:bg-white/5">
              <Apple className="h-5 w-5 text-white" />
              <p className="text-sm font-medium text-white">App Store</p>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-full border border-white/20 bg-transparent px-5 py-2.5 hover:bg-white/5">
              <Smartphone className="h-5 w-5 text-white" />
              <p className="text-sm font-medium text-white">Google Play</p>
            </a>
          </div>
          <div className="flex gap-5">
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-white"><Play className="h-5 w-5" /></a>
          </div>
          <p className="text-xs text-gray-600">© 2026 {heading}. Breathe deeply.</p>
        </div>
      </div>
    </footer>
  );
}
