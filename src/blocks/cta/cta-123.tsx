import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta123(props: BlockProps) {
  const { theme, heading = "Build something amazing today", subheading = "Simple setup, powerful results.", buttonText = "Join Now", buttonUrl = "#" } = props;

  return (
    <section className="px-4 py-24" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"} 0%, ${theme?.accent ?? "#a855f7"} 100%)`, color: "#fff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 text-lg opacity-80">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-full font-bold text-sm bg-white" style={{ color: theme?.primary ?? "#6366f1" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
