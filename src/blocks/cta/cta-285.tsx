import type { BlockProps } from "@/blocks/types";
import { Layers } from "lucide-react";

export default function Cta285(props: BlockProps) {
  const {
    theme,
    heading = "Built in Layers",
    subheading = "Composable architecture that fits any workflow.",
    buttonText = "See How It Works",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-4 py-24" style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#171717" }}>
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden sm:block">
        {[180, 140, 100, 60].map((s, i) => (
          <div key={i} className="absolute rounded-full" style={{ width: s, height: s, top: -s / 2, left: -s / 2, border: `2px solid ${theme?.primary ?? "#6366f1"}`, opacity: 0.08 + i * 0.05 }} />
        ))}
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden sm:block">
        {[180, 140, 100, 60].map((s, i) => (
          <div key={i} className="absolute rounded-full" style={{ width: s, height: s, top: -s / 2, right: -s / 2, border: `2px solid ${theme?.primary ?? "#6366f1"}`, opacity: 0.08 + i * 0.05 }} />
        ))}
      </div>
      <div className="relative max-w-lg mx-auto text-center">
        <Layers className="w-9 h-9 mx-auto mb-4" style={{ color: theme?.primary ?? "#6366f1" }} />
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
