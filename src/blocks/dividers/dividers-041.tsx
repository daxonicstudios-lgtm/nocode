import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";
export default function Dividers041(props: BlockProps) {
  const { theme } = props;
  return (
    <section style={{ backgroundColor: theme?.background }} className="px-4 py-6">
      <div className="max-w-5xl mx-auto flex items-center gap-4">
        <div className="flex-1 h-px" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <Star className="w-4 h-4 shrink-0" style={{ color: theme?.primary }} />
        <div className="flex-1 h-px" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
      </div>
    </section>
  );
}
