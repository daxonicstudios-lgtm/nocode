import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer321(props: BlockProps) {
  const {
    theme,
    heading = "Ripple",
    bodyText = "Download the app free.",
  } = props;
  return (
    <footer
      className="w-full bg-[#0e0e10] py-12 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <p className="text-2xl font-bold text-white">{heading}</p>
            <p className="mt-2 max-w-xs text-sm text-gray-400">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><Users className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Product</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Get the app</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-2 rounded bg-black px-3 py-1.5 ring-1 ring-gray-800">
                <Apple className="h-4 w-4 text-white" />
                <span className="text-xs font-semibold text-white">App Store</span>
              </a>
              <a href="#" className="flex items-center gap-2 rounded bg-black px-3 py-1.5 ring-1 ring-gray-800">
                <Smartphone className="h-4 w-4 text-white" />
                <span className="text-xs font-semibold text-white">Google Play</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-900 pt-6 text-center text-xs text-gray-500">
          © 2026 {heading}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
