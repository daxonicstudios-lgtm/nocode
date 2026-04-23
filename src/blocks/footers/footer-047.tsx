import { MessageCircle, Users, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer047(props: BlockProps) {
  const { theme, heading = "Cipher" } = props;
  return (
    <footer className="w-full bg-gray-100 py-6" style={{ backgroundColor: theme?.background || "#f3f4f6", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm font-mono text-gray-700">{heading}.io</p>
        <div className="flex gap-3">
          <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-700 hover:text-black"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-700 hover:text-black"><Users className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-700 hover:text-black"><Camera className="h-4 w-4" /></a>
        </div>
        <p className="text-xs text-gray-500">© 2026</p>
      </div>
    </footer>
  );
}
