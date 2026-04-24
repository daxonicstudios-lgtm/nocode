import type { BlockProps } from "@/blocks/types";
import { Lightbulb, Clock } from "lucide-react";

const TABS = [
  { name: "Ideas", color: "#f59e0b" },
  { name: "Tutorials", color: "#3b82f6" },
  { name: "News", color: "#10b981" },
  { name: "Deep Dives", color: "#ef4444" },
];
const DEFAULTS = [
  { title: "10 Website Ideas for 2026", description: "Profitable niches you can build with no-code today.", label: "Ideas", value: "5 min" },
  { title: "Animation Without JavaScript", description: "CSS transitions and keyframes that bring sites to life.", label: "Tutorials", value: "7 min" },
  { title: "Industry Report: African SaaS", description: "The market is booming. Key numbers and trends.", label: "News", value: "10 min" },
  { title: "Understanding Color Theory", description: "A deep dive into how colors interact and influence perception.", label: "Deep Dives", value: "12 min" },
];

export default function Blog267(props: BlockProps) {
  const { theme, heading = "Learn & Explore", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {TABS.map((tab, i) => (
            <button key={tab.name} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap" style={i === 0 ? { backgroundColor: tab.color, color: "#fff" } : { backgroundColor: theme?.accent ?? "#f3f4f6" }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tab.color }} />
              {tab.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((post, i) => {
            const tabColor = TABS.find(t => t.name === String(post.label))?.color ?? theme?.primary ?? "#6366f1";
            return (
              <article key={i} className="p-5 rounded-xl border-t-4 cursor-pointer hover:shadow-md transition-shadow" style={{ borderTopColor: tabColor, backgroundColor: theme?.accent ?? "#fafafa" }}>
                <span className="text-xs font-bold uppercase" style={{ color: tabColor }}>{String(post.label ?? "")}</span>
                <h3 className="font-semibold mt-2">{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
                <div className="flex items-center gap-1 text-xs opacity-40 mt-3">
                  <Clock className="w-3 h-3" />
                  <span>{String(post.value ?? "")}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
