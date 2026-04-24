import { MessageCircle, Camera, Users, Play, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer312(props: BlockProps) {
  const {
    theme,
    heading = "Pulse",
    bodyText = "A better way to move through your day.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0a0a0a] py-12 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-2xl font-bold text-white">{heading}</p>
            <p className="mt-2 text-sm text-gray-400">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-md border border-gray-800 hover:bg-gray-900"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-md border border-gray-800 hover:bg-gray-900"><Camera className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-md border border-gray-800 hover:bg-gray-900"><Users className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-md border border-gray-800 hover:bg-gray-900"><Play className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-3 rounded-lg border border-gray-800 bg-black px-4 py-2.5">
              <Apple className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg border border-gray-800 bg-black px-4 py-2.5">
              <Smartphone className="h-6 w-6 text-white" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-900 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
