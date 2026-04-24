import { MessageCircle, Code, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer011(props: BlockProps) {
  const { theme, heading = "Forge" } = props;
  return (
    <footer className="w-full bg-white py-8" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-lg font-bold italic text-gray-900" style={{ color: theme?.primary }}>{heading}</p>
        <div className="mt-3 flex justify-center gap-5 text-gray-400">
          <a href="#" aria-label="Twitter" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Github" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
        </div>
        <p className="mt-3 text-xs text-gray-400">© 2026 Forge Inc.</p>
      </div>
    </footer>
  );
}
