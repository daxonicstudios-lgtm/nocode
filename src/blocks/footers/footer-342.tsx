import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer342(props: BlockProps) {
  const {
    theme,
    heading = "Pulse",
    bodyText = "Download free. No credit card required.",
  } = props;
  return (
    <footer
      className="w-full bg-black py-14 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <p className="text-3xl font-bold text-white">{heading}</p>
          <p className="-mt-4 text-sm text-gray-400">{bodyText}</p>
          <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
            <a href="#" className="flex items-center justify-center gap-3 rounded-xl bg-white py-4 text-black hover:bg-gray-100">
              <Apple className="h-7 w-7" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gray-600">Download on the</p>
                <p className="text-base font-bold">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center justify-center gap-3 rounded-xl bg-white py-4 text-black hover:bg-gray-100">
              <Smartphone className="h-7 w-7" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gray-600">Get it on</p>
                <p className="text-base font-bold">Google Play</p>
              </div>
            </a>
          </div>
          <div className="mt-2 flex gap-5">
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white"><Camera className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-white"><Users className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-white"><Play className="h-5 w-5" /></a>
          </div>
          <p className="text-xs text-gray-600">© 2026 {heading}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
