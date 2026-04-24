import type { BlockProps } from "@/blocks/types";
import { Mic, Play, Pause } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why We Bet on Africa", description: "The opportunity, the challenges, and why building here matters.", label: "Ep. 15", value: "32 min" },
  { title: "The Art of Shipping Fast", description: "Velocity without sacrificing quality. How top teams do it.", label: "Ep. 14", value: "28 min" },
  { title: "Open Source Economics", description: "Can you build a business on free software? Yes, and here is how.", label: "Ep. 13", value: "41 min" },
];

export default function Blog192(props: BlockProps) {
  const { theme, heading = "Ship It", subheading = "A podcast about building products", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#fdf4ff", color: theme?.foreground ?? "#1e1b20" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <Mic className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary ?? "#a855f7" }} />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="text-sm opacity-50 mt-2">{subheading}</p>
        </div>
        {items.slice(0, 3).map((item, i) => (
          <article key={i} className="py-6 border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <div className="flex items-start gap-4">
              <button className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: theme?.primary ?? "#a855f7" }}>
                <Play className="w-4 h-4 text-white fill-white" />
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs opacity-50">
                  <span className="font-semibold">{item.label}</span>
                  <span>·</span>
                  <span>{item.value}</span>
                </div>
                <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                <p className="text-sm opacity-60 mt-1">{item.description}</p>
                <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e9d5f5" }}>
                  <div className="h-full rounded-full w-0" style={{ backgroundColor: theme?.primary ?? "#a855f7" }} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
