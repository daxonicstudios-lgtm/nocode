import { Briefcase, MessageCircle, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer015(props: BlockProps) {
  const { theme, bodyText = "© 2026 Flint. All rights reserved." } = props;
  return (
    <footer className="w-full bg-gray-900 py-6 text-gray-300" style={{ backgroundColor: theme?.background || "#111827", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-xs font-light">{bodyText}</p>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Linkedin" className="text-gray-400 hover:text-white"><Briefcase className="h-4 w-4" /></a>
          <a href="#" aria-label="Github" className="text-gray-400 hover:text-white"><Code className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
