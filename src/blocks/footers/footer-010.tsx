import { ArrowUp } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer010(props: BlockProps) {
  const { theme, bodyText = "© 2026 Lumen Studio." } = props;
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm sm:px-6 lg:px-8">
        <p className="text-gray-600">{bodyText}</p>
        <a href="#top" className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900">
          Back to top <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
