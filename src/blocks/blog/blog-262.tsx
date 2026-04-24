import type { BlockProps } from "@/blocks/types";
import { Clock } from "lucide-react";

const TABS = ["Latest", "Popular", "Tutorials", "Updates"];
const DEFAULTS = [
  { title: "Getting Started with Components", description: "A beginner guide to using pre-built blocks effectively.", label: "Tutorials", value: "8 min" },
  { title: "Version 3.0 Is Here", description: "Faster, smarter, and more beautiful than ever before.", label: "Updates", value: "3 min" },
  { title: "Top 10 Templates This Month", description: "The most popular designs chosen by our community.", label: "Popular", value: "5 min" },
  { title: "Accessibility Checklist", description: "Ensure your site works for everyone with this simple checklist.", label: "Latest", value: "6 min" },
];

export default function Blog262(props: BlockProps) {
  const { theme, heading = "Explore Articles", subheading = "Filter by what interests you most", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="opacity-60 text-sm mt-1 mb-6">{subheading}</p>
        <div className="flex gap-6 border-b mb-8 overflow-x-auto" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {TABS.map((tab, i) => (
            <button key={tab} className="pb-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors" style={i === 0 ? { borderBottomColor: theme?.primary ?? "#6366f1", color: theme?.primary ?? "#6366f1" } : { borderBottomColor: "transparent", opacity: 0.5 }}>
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((post, i) => (
            <article key={i} className="p-5 rounded-xl cursor-pointer hover:shadow-md transition-shadow border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[16/9] rounded-lg mb-3" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <span className="text-xs font-medium uppercase tracking-wider opacity-50">{String(post.label ?? "")}</span>
              <h3 className="font-semibold mt-1">{post.title}</h3>
              <p className="text-sm opacity-60 mt-1">{post.description}</p>
              <div className="flex items-center gap-1 text-xs opacity-40 mt-2">
                <Clock className="w-3 h-3" />
                <span>{String(post.value ?? "")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
