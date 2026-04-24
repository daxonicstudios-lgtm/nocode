import type { BlockProps } from "@/blocks/types";
import { AudioLines, Play, Rss } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Hiring Your First Engineer", description: "What to look for, how to interview, and when to make the offer.", label: "S2 E12", value: "40 min" },
  { title: "Metrics That Matter", description: "Cutting through vanity metrics to find the numbers that drive growth.", label: "S2 E11", value: "35 min" },
  { title: "Design Sprints Demystified", description: "Running a five-day design sprint with a remote team.", label: "S2 E10", value: "48 min" },
];

export default function Blog196(props: BlockProps) {
  const { theme, heading = "Sound Bytes", subheading = "Bite-sized wisdom for builders", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#f0fdf4", color: theme?.foreground ?? "#14532d" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <AudioLines className="w-5 h-5" style={{ color: theme?.primary ?? "#16a34a" }} />
              <h2 className="text-3xl font-bold">{heading}</h2>
            </div>
            <p className="text-sm opacity-50">{subheading}</p>
          </div>
          <a href={buttonUrl} className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2" style={{ borderColor: theme?.primary ?? "#16a34a", color: theme?.primary ?? "#16a34a" }}>
            <Rss className="w-4 h-4" /> Subscribe
          </a>
        </div>
        <div className="space-y-4">
          {items.slice(0, 3).map((item, i) => (
            <article key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm">
              <button className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: theme?.primary ?? "#16a34a" }}>
                <Play className="w-5 h-5 text-white fill-white" />
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs opacity-50">
                  <span className="font-bold">{item.label}</span>
                  <span>·</span>
                  <span>{item.value}</span>
                </div>
                <h3 className="font-bold mt-0.5">{item.title}</h3>
                <p className="text-sm opacity-50 mt-0.5 truncate">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
