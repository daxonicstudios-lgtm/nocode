import type { BlockProps } from "@/blocks/types";
import { Clock, BarChart3 } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "A Complete Guide to Flexbox", description: "Everything you need to know about CSS flexible box layout.", label: "12 min read", value: "80" },
  { title: "Writing Clean TypeScript", description: "Patterns and anti-patterns for maintainable TS codebases.", label: "8 min read", value: "55" },
  { title: "Email Marketing That Converts", description: "Subject lines, timing, and segmentation strategies.", label: "6 min read", value: "30" },
];

export default function Blog066(props: BlockProps) {
  const { theme, heading = "Long Reads", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <BarChart3 className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <div className="space-y-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="p-6 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex items-center gap-2 text-xs opacity-50 mb-2">
                <Clock className="w-3.5 h-3.5" /> {String(post.label)}
              </div>
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60">{post.description}</p>
              <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${post.value ?? 50}%`, backgroundColor: theme?.primary ?? "#6366f1" }} />
              </div>
              <p className="mt-1 text-[10px] opacity-40">{post.value}% of readers finish this article</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
