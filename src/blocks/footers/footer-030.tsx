import { Camera, MessageCircle, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer030(props: BlockProps) {
  const { theme } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-4" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-500">© 2026 Parker Co.</p>
        <div className="flex gap-3">
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-800"><Camera className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-800"><MessageCircle className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-800"><Users className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}
