import type { BlockProps } from "@/blocks/types";
import { Info } from "lucide-react";
export default function Banners118(props: BlockProps) {
  const { theme, heading = "Info notice banner" } = props;
  return (
    <section className="px-4 py-3" style={{ backgroundColor: theme?.accent ?? "#eff6ff", color: theme?.foreground }}>
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <Info className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#3b82f6" }} />
        <p className="text-sm">{heading}</p>
      </div>
    </section>
  );
}
