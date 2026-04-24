import { Code, MessageCircle } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer004(props: BlockProps) {
  const { theme, heading = "Orbit", bodyText = "© 2026 Orbit Labs." } = props;
  return (
    <footer className="w-full bg-[#0a0a0a] py-6 text-gray-300" style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" style={{ backgroundColor: theme?.accent }} />
          <span className="font-mono text-sm">{heading}</span>
        </div>
        <p className="text-xs text-gray-500">{bodyText}</p>
        <div className="flex gap-3">
          <a href="#" aria-label="Github" className="hover:text-white"><Code className="h-4 w-4" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
