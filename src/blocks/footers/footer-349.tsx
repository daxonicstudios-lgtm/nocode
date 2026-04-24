import { MessageCircle, Camera, Play, Users, Apple, Smartphone } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer349(props: BlockProps) {
  const {
    theme,
    heading = "Bloom",
    bodyText = "Mobile-first. Always free.",
  } = props;
  return (
    <footer
      className="w-full bg-[#02150e] py-14 text-green-100/80"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-3xl font-bold text-white">{heading}</p>
            <p className="mt-2 max-w-sm text-sm text-green-200/70">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-md border border-green-500/30 hover:bg-green-500/10"><MessageCircle className="h-4 w-4 text-green-100" /></a>
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-md border border-green-500/30 hover:bg-green-500/10"><Camera className="h-4 w-4 text-green-100" /></a>
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-md border border-green-500/30 hover:bg-green-500/10"><Users className="h-4 w-4 text-green-100" /></a>
              <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-md border border-green-500/30 hover:bg-green-500/10"><Play className="h-4 w-4 text-green-100" /></a>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-3 rounded-xl bg-green-500 px-5 py-3 text-green-950 hover:bg-green-400">
              <Apple className="h-6 w-6" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-green-800">Download on the</p>
                <p className="text-sm font-bold">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl bg-green-500 px-5 py-3 text-green-950 hover:bg-green-400">
              <Smartphone className="h-6 w-6" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-green-800">Get it on</p>
                <p className="text-sm font-bold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-green-500/10 pt-6 text-center text-xs text-green-200/50">
          © 2026 {heading}. Keep growing.
        </div>
      </div>
    </footer>
  );
}
