import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta134(props: BlockProps) {
  const {
    theme,
    heading = "Next-Level Performance",
    bodyText = "Built for speed, designed for scale. Experience the difference of truly modern infrastructure.",
    buttonText = "Get Early Access",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#09090b", color: theme?.foreground || "#fafafa" }}>
      <div className="max-w-2xl mx-auto text-center border-t border-b py-12" style={{ borderColor: theme?.primary || "#a855f7" }}>
        <Sparkles className="w-6 h-6 mx-auto mb-4" style={{ color: theme?.primary || "#a855f7" }} />
        <h2 className="text-2xl md:text-4xl font-bold mb-3" style={{ color: theme?.primary || "#a855f7" }}>{heading}</h2>
        <p className="text-sm md:text-base opacity-50 mb-8 max-w-md mx-auto">{bodyText}</p>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-full font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#a855f7", color: "#000" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
