import { MessageCircle, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer049(props: BlockProps) {
  const { theme, heading = "Aurora" } = props;
  return (
    <footer className="w-full bg-white py-5" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-tight text-gray-900" style={{ color: theme?.primary }}>{heading}</span>
          <span className="hidden h-4 w-px bg-gray-300 sm:block" />
          <span className="hidden text-xs text-gray-500 sm:inline">Built for focus.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Linkedin" className="text-gray-400 hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
          <span className="text-xs text-gray-400">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
