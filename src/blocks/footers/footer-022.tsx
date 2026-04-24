import { Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer022(props: BlockProps) {
  const { theme, heading = "Hazel" } = props;
  return (
    <footer className="w-full bg-[#fafafa] py-6" style={{ backgroundColor: theme?.background || "#fafafa", color: theme?.foreground }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-700"><span className="font-semibold">{heading}</span> <span className="mx-1 text-gray-300">/</span> <span className="text-gray-500">© 2026</span></p>
        <a href="#" className="inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800">
          <Code className="h-3.5 w-3.5" /> Star on Code
        </a>
      </div>
    </footer>
  );
}
