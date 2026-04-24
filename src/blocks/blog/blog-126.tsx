import type { BlockProps } from "@/blocks/types";
import { Search, BookOpen, Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Mastering Git Workflows", description: "Branch strategies for teams of every size, from solo devs to enterprise.", label: "Beginner", value: "5 min" },
  { title: "Introduction to WebSockets", description: "Building real-time features with persistent connections.", label: "Intermediate", value: "8 min" },
  { title: "Advanced Caching Strategies", description: "CDN, browser, and application-level caching for maximum performance.", label: "Advanced", value: "12 min" },
];

export default function Blog126(props: BlockProps) {
  const { theme, heading = "Learning Center", subheading = "Tutorials and guides for every skill level", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  const levelColor = (level: string) => {
    if (level === "Beginner") return "#22c55e";
    if (level === "Intermediate") return "#f59e0b";
    return "#ef4444";
  };

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1e293b" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <BookOpen className="w-8 h-8 mx-auto mb-3 opacity-30" />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-50">{subheading}</p>
        </div>
        <div className="max-w-lg mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" />
          <input type="text" placeholder="What do you want to learn?" className="w-full pl-11 pr-4 py-3 rounded-full border text-sm outline-none" style={{ borderColor: `${theme?.foreground ?? "#1e293b"}12`, color: theme?.foreground ?? "#1e293b" }} />
        </div>
        <div className="space-y-4">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex items-center gap-5 p-5 rounded-2xl border hover:shadow-sm transition-shadow" style={{ borderColor: `${theme?.foreground ?? "#1e293b"}08` }}>
              <div className="w-2 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: levelColor(String(item.label)) }} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold" style={{ color: levelColor(String(item.label)) }}>{String(item.label)}</span>
                  <span className="flex items-center gap-1 text-xs opacity-30"><Clock className="w-3 h-3" />{String(item.value)}</span>
                </div>
                <h3 className="font-bold group-hover:underline">{item.title}</h3>
                <p className="text-sm opacity-50 mt-0.5">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
