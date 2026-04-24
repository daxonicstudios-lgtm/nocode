import { Briefcase, MessageCircle } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer035(props: BlockProps) {
  const { theme, heading = "Canopy", bodyText = "© 2026 Canopy Inc." } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-5" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded bg-gray-900" style={{ backgroundColor: theme?.primary }} />
          <span className="text-sm font-semibold text-gray-900">{heading}</span>
        </div>
        <p className="hidden text-xs text-gray-500 sm:block">{bodyText}</p>
        <div className="flex gap-2">
          <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50"><MessageCircle className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50"><Briefcase className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}
