import { MessageCircle, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer033(props: BlockProps) {
  const { theme, heading = "Pine" } = props;
  return (
    <footer className="w-full bg-emerald-50 py-5" style={{ backgroundColor: theme?.background || "#ecfdf5", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold text-emerald-900" style={{ color: theme?.primary }}>{heading}</span>
        <div className="flex items-center gap-4">
          <p className="text-xs text-emerald-900/60">© 2026</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="text-emerald-800 hover:text-emerald-600"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="Github" className="text-emerald-800 hover:text-emerald-600"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
