import type { BlockProps } from "@/blocks/types";
import { Target } from "lucide-react";

export default function Cta282(props: BlockProps) {
  const {
    theme,
    heading = "Hit Your Targets",
    subheading = "Goal tracking and analytics that drive results.",
    buttonText = "Start Tracking",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-4 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0f172a" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[280, 220, 160, 100].map((size, i) => (
          <div key={i} className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" style={{ width: size, height: size, border: `2px solid ${theme?.primary ?? "#6366f1"}`, opacity: 0.08 + i * 0.04 }} />
        ))}
      </div>
      <div className="relative max-w-lg mx-auto text-center">
        <Target className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#6366f1" }} />
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
