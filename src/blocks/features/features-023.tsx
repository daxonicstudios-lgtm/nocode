import type { BlockProps } from "@/blocks/types";
import { Star, Heart, Target } from "lucide-react";

const iconMap = [Star, Heart, Target];

const defaults = [
  { title: "Quality First", description: "Every detail is polished to meet the highest industry standards." },
  { title: "Customer Obsessed", description: "Your success drives every decision we make as a team." },
  { title: "Goal Oriented", description: "Focused tools that help you hit milestones faster than ever." },
];

export default function Features023(props: BlockProps) {
  const {
    theme,
    heading = "What Sets Us Apart",
    subheading = "Three core values that guide everything we build.",
    items = defaults,
  } = props;

  const accent = theme?.accent ?? "#e879f9";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-lg mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {items.slice(0, 3).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="relative flex flex-col items-center">
                <div
                  className="absolute -top-3 w-16 h-16 rounded-full opacity-20"
                  style={{ backgroundColor: accent }}
                />
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: theme?.primary ?? "#7c3aed", color: "#fff" }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title ?? defaults[i]?.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-xs">{item.description ?? defaults[i]?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
