import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer346(props: BlockProps) {
  const {
    theme,
    heading = "Brew",
    bodyText = "⭐ 4.9 · 1M+ cups · 80+ cities",
  } = props;
  return (
    <footer
      className="w-full bg-[#1a0a0a] py-14 text-red-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-4xl font-extrabold uppercase tracking-tight text-white">{heading}</p>
          <p className="text-sm font-medium text-red-200/70">{bodyText}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="flex items-center gap-3 rounded-xl bg-red-600 px-5 py-3 hover:bg-red-500">
              <Apple className="h-6 w-6 text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-red-100">Download on the</p>
                <p className="text-sm font-bold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl bg-red-600 px-5 py-3 hover:bg-red-500">
              <Smartphone className="h-6 w-6 text-white" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-red-100">Get it on</p>
                <p className="text-sm font-bold text-white">Google Play</p>
              </div>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-red-200/70 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-red-200/70 hover:text-white"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="text-red-200/70 hover:text-white"><Users className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-red-200/70 hover:text-white"><Play className="h-5 w-5" /></a>
          </div>
          <p className="text-xs text-red-200/50">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
