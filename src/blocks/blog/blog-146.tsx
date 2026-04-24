import type { BlockProps } from "@/blocks/types";
import { Heart, Stethoscope, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Understanding Sleep Cycles", description: "How circadian rhythms affect your energy, mood, and long-term health outcomes.", label: "Sleep Science" },
  { title: "Gut Health Fundamentals", description: "The microbiome explained: prebiotics, probiotics, and what actually works for digestion.", label: "Nutrition" },
  { title: "Stress Management Techniques", description: "Evidence-based approaches to reducing chronic stress and improving mental resilience.", label: "Mental Health" },
];

export default function Blog146(props: BlockProps) {
  const {
    theme,
    heading = "Health & Wellness",
    subheading = "Science-backed insights for a healthier life",
    buttonText = "Read article",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#f0fdf4", color: theme?.foreground ?? "#14532d" }}>
      <div className="max-w-5xl mx-auto text-center mb-12">
        <Stethoscope className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.accent ?? "#16a34a" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-50">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item, i) => (
          <a
            key={i}
            href={buttonUrl}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className="h-40 flex items-center justify-center"
              style={{ backgroundColor: `${theme?.primary ?? "#16a34a"}10` }}
            >
              <Heart className="w-10 h-10" style={{ color: `${theme?.primary ?? "#16a34a"}40` }} />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#16a34a" }}>
                {String(item.label)}
              </span>
              <h3 className="mt-1 text-lg font-bold group-hover:underline">
                {item.title}
              </h3>
              <p className="mt-1 text-sm opacity-50 line-clamp-2">
                {item.description}
              </p>
              <span
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: theme?.primary ?? "#16a34a" }}
              >
                {buttonText} <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
