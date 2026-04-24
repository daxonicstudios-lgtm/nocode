import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer323(props: BlockProps) {
  const {
    theme,
    heading = "Glow",
    bodyText = "Get glowing skin, on the go.",
  } = props;
  return (
    <footer
      className="w-full bg-rose-950 py-14 text-rose-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-3xl font-serif text-white">{heading}</p>
            <p className="mt-2 text-sm text-rose-200/70">{bodyText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-rose-950 hover:bg-rose-100">
              <Apple className="h-5 w-5" />
              <p className="text-sm font-semibold">App Store</p>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-rose-950 hover:bg-rose-100">
              <Smartphone className="h-5 w-5" />
              <p className="text-sm font-semibold">Google Play</p>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-rose-500/20 pt-6 sm:flex-row">
          <p className="text-xs text-rose-200/50">© 2026 {heading}. Radiant since day one.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-rose-200/70 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-rose-200/70 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-rose-200/70 hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
