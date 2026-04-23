import { MessageCircle, Code, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer025(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="w-full bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500">© 2026 Riverbend Co.</p>
        <div className="flex items-center gap-1.5">
          <a href="#" aria-label="Twitter" className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"><MessageCircle className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Github" className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"><Code className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Instagram" className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"><Camera className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}
