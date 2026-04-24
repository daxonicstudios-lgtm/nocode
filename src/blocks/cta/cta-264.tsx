import type { BlockProps } from "@/blocks/types";
import { Heart } from "lucide-react";

export default function Cta264(props: BlockProps) {
  const {
    theme,
    heading = "Made With Love",
    subheading = "Crafted for teams who care about quality.",
    buttonText = "Try Free",
    buttonUrl = "#",
    secondaryButtonText = "See Pricing",
    secondaryButtonUrl = "#",
  } = props;

  const dots = Array.from({ length: 20 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 6 + 3,
  }));

  return (
    <section className="relative overflow-hidden px-4 py-20" style={{ backgroundColor: theme?.background ?? "#fff1f2", color: theme?.foreground ?? "#1c1917" }}>
      {dots.map((d, i) => (
        <div key={i} className="absolute rounded-full" style={{ top: d.top, left: d.left, width: d.size, height: d.size, backgroundColor: theme?.primary ?? "#e11d48", opacity: 0.15 }} />
      ))}
      <div className="relative max-w-xl mx-auto text-center">
        <Heart className="w-8 h-8 mx-auto mb-4 fill-current" style={{ color: theme?.primary ?? "#e11d48" }} />
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="px-8 py-3.5 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#e11d48" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-8 py-3.5 rounded-full font-bold text-sm border-2" style={{ borderColor: theme?.primary ?? "#e11d48", color: theme?.primary ?? "#e11d48" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
