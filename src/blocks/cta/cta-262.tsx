import type { BlockProps } from "@/blocks/types";
import { Star, ArrowRight } from "lucide-react";

export default function Cta262(props: BlockProps) {
  const {
    theme,
    heading = "5-Star Experience Awaits",
    subheading = "Rated excellent by over 25,000 customers worldwide.",
    buttonText = "Join Them",
    buttonUrl = "#",
  } = props;

  const stars = Array.from({ length: 12 }, (_, i) => ({
    top: `${Math.floor(Math.random() * 80 + 5)}%`,
    left: `${Math.floor(Math.random() * 90 + 5)}%`,
    size: Math.floor(Math.random() * 12 + 8),
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <section className="relative overflow-hidden px-4 py-24" style={{ backgroundColor: theme?.background ?? "#fdf4ff", color: theme?.foreground ?? "#1e1b4b" }}>
      {stars.map((s, i) => (
        <Star key={i} className="absolute" style={{ top: s.top, left: s.left, width: s.size, height: s.size, opacity: s.opacity, color: theme?.primary ?? "#a855f7" }} />
      ))}
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-current" style={{ color: theme?.primary ?? "#a855f7" }} />
          ))}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#a855f7" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
