import { Code, MessageCircle, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer039(props: BlockProps) {
  const { theme, heading = "Quill" } = props;
  return (
    <footer className="w-full bg-white py-10" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto flex max-w-lg flex-col items-center gap-3 px-4">
        <p className="text-xl font-bold text-gray-900" style={{ color: theme?.primary }}>{heading}</p>
        <div className="flex gap-4 text-gray-400">
          <a href="#" aria-label="Twitter" className="hover:text-gray-800"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Github" className="hover:text-gray-800"><Code className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-800"><Briefcase className="h-4 w-4" /></a>
        </div>
        <p className="text-xs text-gray-400">© 2026 Quill. All rights reserved.</p>
      </div>
    </footer>
  );
}
