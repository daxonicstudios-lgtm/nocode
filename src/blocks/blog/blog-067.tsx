import type { BlockProps } from "@/blocks/types";
import { Clock, BookOpen } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Zero to Production with Next.js", description: "A step-by-step deployment guide covering CI, preview URLs, and monitoring.", label: "15 min", value: "3200" },
  { title: "Design Tokens Explained", description: "Bridging the gap between design tools and production code.", label: "7 min", value: "1800" },
  { title: "Retention Metrics That Matter", description: "DAU/MAU ratio is just the beginning of understanding stickiness.", label: "9 min", value: "2400" },
];

export default function Blog067(props: BlockProps) {
  const { theme, heading = "Popular This Week", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f9fafb", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-xl p-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-1 text-xs font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                  <Clock className="w-3.5 h-3.5" /> {String(post.label)} read
                </span>
                <span className="flex items-center gap-1 text-xs opacity-40">
                  <BookOpen className="w-3.5 h-3.5" /> {post.value} views
                </span>
              </div>
              <div className="aspect-[16/9] rounded-lg mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <h3 className="font-bold text-base">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60">{post.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 flex-1 rounded-full" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  <div className="h-full rounded-full" style={{ width: "65%", backgroundColor: theme?.primary ?? "#6366f1" }} />
                </div>
                <span className="text-[10px] opacity-40">65% avg completion</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
