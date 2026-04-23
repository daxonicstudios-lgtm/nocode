import { MessageCircle, Briefcase, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer027(props: BlockProps) {
  const { theme, heading = "Arcade" } = props;
  return (
    <footer className="w-full border-t border-gray-800 bg-[#0a0a0a] py-6 text-gray-300" style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-500" style={{ backgroundColor: theme?.accent }} />
          <span className="text-sm font-semibold tracking-wide">{heading}</span>
          <span className="text-xs text-gray-500">© 2026</span>
        </div>
        <div className="flex gap-3">
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Linkedin" className="text-gray-400 hover:text-white"><Briefcase className="h-4 w-4" /></a>
          <a href="#" aria-label="Youtube" className="text-gray-400 hover:text-white"><Play className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
