import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";
export default function Banners056(props: BlockProps) {
  const { theme, heading = "Promotional gradient banner", buttonText = "Claim Offer", buttonUrl = "#" } = props;
  return (
    <section className="px-4 py-4" style={{ background: `linear-gradient(90deg, ${theme?.primary ?? "#6366f1"} 0%, ${theme?.accent ?? "#a855f7"} 100%)`, color: "#fff" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <Sparkles className="w-4 h-4 shrink-0" />
        <p className="text-sm font-medium">{heading}</p>
        <a href={buttonUrl} className="px-4 py-1.5 rounded-full text-xs font-bold bg-white shrink-0" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
      </div>
    </section>
  );
}
