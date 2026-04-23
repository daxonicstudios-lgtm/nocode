import { MessageCircle, Camera, Users, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer304(props: BlockProps) {
  const {
    theme,
    heading = "Dash",
    bodyText = "Now available on iOS and Android.",
  } = props;
  return (
    <footer
      className="w-full bg-zinc-900 py-12 text-zinc-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-2xl font-bold text-white">{heading}</p>
            <p className="mt-3 max-w-sm text-sm text-zinc-400">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Twitter" className="text-zinc-400 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-zinc-400 hover:text-white"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-zinc-400 hover:text-white"><Users className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-zinc-400 hover:text-white"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Company</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Get the app</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-3 rounded-lg border border-zinc-700 bg-black px-3 py-2">
                <Apple className="h-5 w-5 text-white" />
                <div>
                  <p className="text-[9px] uppercase text-zinc-400">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg border border-zinc-700 bg-black px-3 py-2">
                <Smartphone className="h-5 w-5 text-white" />
                <div>
                  <p className="text-[9px] uppercase text-zinc-400">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
