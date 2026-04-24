import type { BlockProps } from "@/blocks/types";
import { Smartphone, Tablet, Star } from "lucide-react";

export default function Cta082(props: BlockProps) {
  const {
    theme,
    heading = "Rated 4.9 stars by 50K+ users",
    subheading = "The highest-rated productivity app in both app stores.",
    buttonText = "App Store",
    secondaryButtonText = "Google Play",
    buttonUrl = "#",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#1e293b", color: "#ffffff" }} className="px-5 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" style={{ color: theme?.accent ?? "#facc15" }} />
          ))}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white font-semibold text-sm" style={{ color: theme?.primary ?? "#1e293b" }}>
            <Smartphone className="w-5 h-5" />
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 font-semibold text-sm">
            <Tablet className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
