import { MessageCircle, Camera, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer336(props: BlockProps) {
  const {
    theme,
    heading = "Brew",
    bodyText = "For coffee lovers, by coffee lovers.",
  } = props;
  return (
    <footer
      className="relative w-full bg-[#100906] py-16 text-amber-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-red-500" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="text-4xl font-black italic text-amber-50">{heading}</p>
          <p className="max-w-md text-sm text-amber-100/60">{bodyText}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-full bg-amber-50 px-5 py-2.5 text-amber-950 hover:bg-amber-100">
              <Apple className="h-5 w-5" />
              <p className="text-sm font-bold uppercase tracking-wide">App Store</p>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-full bg-amber-50 px-5 py-2.5 text-amber-950 hover:bg-amber-100">
              <Smartphone className="h-5 w-5" />
              <p className="text-sm font-bold uppercase tracking-wide">Google Play</p>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-amber-100/60 hover:text-amber-50"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-amber-100/60 hover:text-amber-50"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-amber-100/60 hover:text-amber-50"><Play className="h-5 w-5" /></a>
          </div>
          <p className="text-xs text-amber-100/40">© 2026 {heading}. Brewed daily.</p>
        </div>
      </div>
    </footer>
  );
}
