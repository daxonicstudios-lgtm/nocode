import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer335(props: BlockProps) {
  const {
    theme,
    heading = "Zen",
    bodyText = "A gentler internet experience.",
  } = props;
  return (
    <footer
      className="w-full bg-[#141414] py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <p className="text-xl font-semibold text-white">{heading}</p>
            <p className="mt-2 text-sm text-gray-400">{bodyText}</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-xl">
            <div>
              <p className="mb-3 text-sm font-semibold text-white">Product</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-white">Company</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-white">Download</p>
              <div className="flex flex-col gap-2">
                <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                  <Apple className="h-4 w-4" /> App Store
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                  <Smartphone className="h-4 w-4" /> Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">© 2026 {heading}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-white"><Users className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
