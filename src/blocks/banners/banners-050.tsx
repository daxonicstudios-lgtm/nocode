import type { BlockProps } from "@/blocks/types";
import { X } from "lucide-react";
export default function Banners050(props: BlockProps) {
  const { theme, heading = "Announcement top bar", buttonText = "Learn More", buttonUrl = "#" } = props;
  return (
    <section className="px-4 py-3" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm font-medium">{heading}</p>
        <div className="flex items-center gap-3">
          <a href={buttonUrl} className="text-xs font-bold underline shrink-0">{buttonText}</a>
          <button className="opacity-60 hover:opacity-100"><X className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
}
