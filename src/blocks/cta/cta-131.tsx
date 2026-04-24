import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta131(props: BlockProps) {
  const {
    theme,
    heading = "The Future Is Now",
    subheading = "Experience next-generation tools built for speed.",
    buttonText = "Enter the Future",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-20 px-4" style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground || "#e0e0e0" }}>
      <div className="max-w-xl mx-auto text-center">
        <Zap className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary || "#00ff88" }} />
        <h2 className="text-3xl md:text-5xl font-bold mb-3" style={{ color: theme?.primary || "#00ff88" }}>{heading}</h2>
        <p className="opacity-60 mb-8">{subheading}</p>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg font-semibold border-2 hover:bg-white/10 transition" style={{ borderColor: theme?.primary || "#00ff88", color: theme?.primary || "#00ff88" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
