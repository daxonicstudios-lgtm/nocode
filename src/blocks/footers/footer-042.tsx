import { ArrowUp } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer042(props: BlockProps) {
  const { theme, heading = "Sparrow" } = props;
  return (
    <footer className="w-full bg-gray-50 py-6" style={{ backgroundColor: theme?.background || "#f9fafb", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">{heading}</span> · © 2026</p>
        <a href="#top" aria-label="Back to top" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 hover:border-gray-500">
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
