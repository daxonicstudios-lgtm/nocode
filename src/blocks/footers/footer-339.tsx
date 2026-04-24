import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer339(props: BlockProps) {
  const {
    theme,
    heading = "Bloom",
    bodyText = "Mindful living, simplified.",
  } = props;
  return (
    <footer
      className="w-full bg-teal-950 py-14 text-teal-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-3xl font-bold text-white">{heading}</p>
            <p className="mt-2 text-sm text-teal-200/70">{bodyText}</p>
          </div>
          <div className="md:col-span-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-teal-200/70">Connect</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="flex items-center gap-3 text-teal-100 hover:text-white">
                <MessageCircle className="h-4 w-4" /> MessageCircle
              </a>
              <a href="#" className="flex items-center gap-3 text-teal-100 hover:text-white">
                <Camera className="h-4 w-4" /> Camera
              </a>
              <a href="#" className="flex items-center gap-3 text-teal-100 hover:text-white">
                <Users className="h-4 w-4" /> Users
              </a>
              <a href="#" className="flex items-center gap-3 text-teal-100 hover:text-white">
                <Play className="h-4 w-4" /> Play
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-teal-200/70">Download</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-teal-400/30">
                <Apple className="h-5 w-5 text-white" />
                <div>
                  <p className="text-[10px] uppercase text-teal-200/60">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg bg-black px-4 py-2.5 ring-1 ring-teal-400/30">
                <Smartphone className="h-5 w-5 text-white" />
                <div>
                  <p className="text-[10px] uppercase text-teal-200/60">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-teal-400/10 pt-6 text-center text-xs text-teal-200/50">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
