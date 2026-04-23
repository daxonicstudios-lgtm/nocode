import { MessageCircle, Camera, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer001(props: BlockProps) {
  const { theme, bodyText = "© 2026 Acme. All rights reserved." } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600">{bodyText}</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-900"><Camera className="h-5 w-5" /></a>
          <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
