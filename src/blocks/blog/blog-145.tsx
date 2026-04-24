import type { BlockProps } from "@/blocks/types";
import { Dumbbell, Timer, Flame } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "30-Minute HIIT Workout", description: "A full-body high-intensity session you can do anywhere with no equipment.", label: "HIIT", value: "450 cal" },
  { title: "Mobility Routine for Desk Workers", description: "Counteract hours of sitting with these 10 daily stretches.", label: "Mobility", value: "15 min" },
  { title: "Progressive Overload Explained", description: "The fundamental principle behind building strength over time.", label: "Strength", value: "Guide" },
];

export default function Blog145(props: BlockProps) {
  const { theme, heading = "Fitness Blog", subheading = "Train smarter, recover better", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#ecfdf5", color: theme?.foreground ?? "#064e3b" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Dumbbell className="w-7 h-7" style={{ color: theme?.accent ?? "#059669" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-50 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{ backgroundColor: `${theme?.primary ?? "#059669"}15`, color: theme?.primary ?? "#059669" }}>
                  {String(item.label)}
                </span>
                <div className="flex items-center gap-1 text-xs opacity-40">
                  {i === 0 ? <Flame className="w-3 h-3" /> : <Timer className="w-3 h-3" />}
                  {String(item.value)}
                </div>
              </div>
              <h3 className="text-lg font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-2 text-sm opacity-50 line-clamp-2">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
