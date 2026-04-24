import { MessageCircle, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer020(props: BlockProps) {
  const { theme, heading = "Juno", bodyText = "© 2026 Juno Studio." } = props;
  return (
    <footer className="w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-3 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
        <div className="hidden sm:block" />
        <p className="text-sm font-semibold text-gray-900" style={{ color: theme?.primary }}>{heading}</p>
        <div className="flex justify-center gap-4 sm:justify-end">
          <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-black"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-black"><Camera className="h-4 w-4" /></a>
        </div>
        <p className="col-span-full mt-2 text-xs text-gray-400">{bodyText}</p>
      </div>
    </footer>
  );
}
