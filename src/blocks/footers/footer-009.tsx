import { Heart } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer009(props: BlockProps) {
  const { theme, heading = "Noble" } = props;
  return (
    <footer className="w-full border-t border-gray-100 bg-white py-6" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-600 sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-1.5">
          Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> by {heading} · © 2026
        </p>
      </div>
    </footer>
  );
}
