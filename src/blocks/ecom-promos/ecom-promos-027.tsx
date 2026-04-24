import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";
export default function EcomPromos027(props: BlockProps) {
  const { theme, heading = "Promotional sale banner", subheading = "Use code SAVE20 at checkout", buttonText = "Shop Now", buttonUrl = "#" } = props;
  return (
    <section className="px-4 py-16" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"} 0%, ${theme?.accent ?? "#a855f7"} 100%)`, color: "#fff" }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 shrink-0" />
          <div><h2 className="text-2xl font-bold">{heading}</h2><p className="text-sm opacity-80 mt-1">{subheading}</p></div>
        </div>
        <a href={buttonUrl} className="px-8 py-3 rounded-full font-bold text-sm bg-white shrink-0" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
      </div>
    </section>
  );
}
