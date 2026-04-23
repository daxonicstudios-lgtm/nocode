import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer325(props: BlockProps) {
  const {
    theme,
    heading = "Zen",
    bodyText = "Meditate anywhere.",
  } = props;
  return (
    <footer
      className="w-full bg-[#12161e] py-16 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-5xl font-extralight tracking-widest text-white">{heading}</p>
        <p className="mt-4 text-sm text-gray-400">{bodyText}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="flex items-center gap-3 rounded-full border border-gray-700 bg-transparent px-6 py-3 hover:border-gray-500">
            <Apple className="h-5 w-5 text-white" />
            <p className="text-sm text-white">App Store</p>
          </a>
          <a href="#" className="flex items-center gap-3 rounded-full border border-gray-700 bg-transparent px-6 py-3 hover:border-gray-500">
            <Smartphone className="h-5 w-5 text-white" />
            <p className="text-sm text-white">Google Play</p>
          </a>
        </div>
        <div className="mt-12 flex justify-center gap-6 text-gray-500">
          <a href="#" aria-label="Twitter" className="hover:text-white"><MessageCircle className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-white"><Camera className="h-5 w-5" /></a>
          <a href="#" aria-label="YouTube" className="hover:text-white"><Play className="h-5 w-5" /></a>
        </div>
        <p className="mt-12 text-xs text-gray-600">© 2026 {heading}. Find your calm.</p>
      </div>
    </footer>
  );
}
