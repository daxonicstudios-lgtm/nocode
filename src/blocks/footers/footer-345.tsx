import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer345(props: BlockProps) {
  const {
    theme,
    heading = "Zen",
    bodyText = "Stillness, delivered daily.",
  } = props;
  return (
    <footer
      className="w-full bg-gradient-to-b from-[#0c1114] to-[#050608] py-20 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
            <div className="h-8 w-8 rounded-full bg-white/90" />
          </div>
          <div>
            <p className="text-4xl font-light tracking-[0.2em] uppercase text-white">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded bg-white/5 px-6 py-3 ring-1 ring-white/10 hover:bg-white/10">
              <Apple className="h-5 w-5 text-white" />
              <p className="text-sm font-medium text-white">App Store</p>
            </a>
            <a href="#" className="flex items-center gap-3 rounded bg-white/5 px-6 py-3 ring-1 ring-white/10 hover:bg-white/10">
              <Smartphone className="h-5 w-5 text-white" />
              <p className="text-sm font-medium text-white">Google Play</p>
            </a>
          </div>
          <div className="flex gap-6 text-gray-500">
            <a href="#" aria-label="Twitter" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
          <p className="text-xs text-gray-600">© 2026 {heading}. Breathe.</p>
        </div>
      </div>
    </footer>
  );
}
