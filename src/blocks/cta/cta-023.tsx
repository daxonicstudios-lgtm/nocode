import type { BlockProps } from "@/blocks/types";
import { Award } from "lucide-react";

export default function Cta023(props: BlockProps) {
  const {
    theme,
    heading = "Award-winning platform",
    subheading = "Recognized by industry leaders for innovation, reliability, and user experience.",
    buttonText = "See Why",
    buttonUrl = "#",
    items = [
      { title: "Product of the Year", description: "TechCrunch 2025" },
      { title: "Best Design Tool", description: "Webby Awards" },
      { title: "Top Rated", description: "G2 Reviews" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Award className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary ?? "#7c3aed" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 text-sm opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {items.slice(0, 3).map((badge, i) => (
            <div key={i} className="px-5 py-3 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="font-bold text-sm">{badge.title}</div>
              <div className="text-xs opacity-40 mt-0.5">{badge.description}</div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-10 inline-block px-8 py-3.5 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
