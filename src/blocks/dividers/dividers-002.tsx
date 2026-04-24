import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Dividers002(props: BlockProps) {
  const { theme } = props;

  return (
    <div className="px-5 py-10" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <div className="flex-1 h-px" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <Sparkles className="w-5 h-5 opacity-40" />
        <div className="flex-1 h-px" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
      </div>
    </div>
  );
}
