import { Camera, Play, MessageCircle } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer037(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="w-full bg-[#fafafa] py-6" style={{ backgroundColor: theme?.background || "#fafafa", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex gap-2">
          <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center bg-white text-gray-700 shadow-sm hover:shadow"><Camera className="h-4 w-4" /></a>
          <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center bg-white text-gray-700 shadow-sm hover:shadow"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Youtube" className="flex h-8 w-8 items-center justify-center bg-white text-gray-700 shadow-sm hover:shadow"><Play className="h-4 w-4" /></a>
        </div>
        <p className="text-xs text-gray-500">© 2026 Fable Goods Co.</p>
      </div>
    </footer>
  );
}
