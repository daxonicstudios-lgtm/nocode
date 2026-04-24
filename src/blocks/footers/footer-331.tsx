import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer331(props: BlockProps) {
  const {
    theme,
    heading = "Ripple",
    bodyText = "The app that changes everything.",
  } = props;
  return (
    <footer
      className="w-full bg-gradient-to-b from-cyan-950 to-black py-16 text-cyan-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-4xl font-bold text-white sm:text-5xl">{heading}</p>
        <p className="mx-auto mt-3 max-w-md text-sm text-cyan-200/70">{bodyText}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="group flex items-center gap-3 rounded-2xl bg-black px-5 py-3 ring-1 ring-cyan-400/30 transition hover:ring-cyan-400">
            <Apple className="h-7 w-7 text-white" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-cyan-200/70">Download on the</p>
              <p className="text-sm font-bold text-white">App Store</p>
            </div>
          </a>
          <a href="#" className="group flex items-center gap-3 rounded-2xl bg-black px-5 py-3 ring-1 ring-cyan-400/30 transition hover:ring-cyan-400">
            <Smartphone className="h-7 w-7 text-white" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-cyan-200/70">Get it on</p>
              <p className="text-sm font-bold text-white">Google Play</p>
            </div>
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-5">
          <a href="#" aria-label="Twitter" className="text-cyan-300 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram" className="text-cyan-300 hover:text-white"><Camera className="h-5 w-5" /></a>
          <a href="#" aria-label="Facebook" className="text-cyan-300 hover:text-white"><Users className="h-5 w-5" /></a>
          <a href="#" aria-label="YouTube" className="text-cyan-300 hover:text-white"><Play className="h-5 w-5" /></a>
        </div>
        <p className="mt-10 text-xs text-cyan-200/40">© 2026 {heading}. All rights reserved.</p>
      </div>
    </footer>
  );
}
