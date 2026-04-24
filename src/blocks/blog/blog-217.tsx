import type { BlockProps } from "@/blocks/types";
import { Clock, Signal } from "lucide-react";

const POSTS = [
  { title: "Caching Strategies Explained", description: "From browser cache to CDN to application-level caching.", label: "Advanced", value: "11 min" },
  { title: "HTML Semantics Matter", description: "Why choosing the right elements improves accessibility and SEO.", label: "Beginner", value: "4 min" },
  { title: "Error Handling in Node.js", description: "Graceful degradation and structured error responses.", label: "Intermediate", value: "8 min" },
  { title: "Design Handoff Best Practices", description: "Bridge the gap between designers and developers.", label: "Beginner", value: "5 min" },
];

export default function Blog217(props: BlockProps) {
  const { theme, heading = "Posts by Level", items = POSTS } = props;
  const barWidth = (l: string) => l === "Advanced" ? "100%" : l === "Intermediate" ? "66%" : "33%";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{heading}</h2>
        <div className="space-y-4">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="p-4 rounded-xl border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">{post.title}</h3>
                <span className="text-xs opacity-40 flex items-center gap-1 shrink-0 ml-2"><Clock className="w-3 h-3" />{post.value}</span>
              </div>
              <p className="text-sm opacity-70 mb-3">{post.description}</p>
              <div className="flex items-center gap-2">
                <Signal className="w-3 h-3 shrink-0" style={{ color: theme?.primary ?? "#6366f1" }} />
                <div className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                  <div className="h-full rounded-full" style={{ width: barWidth(post.label ?? ""), backgroundColor: theme?.primary ?? "#6366f1" }} />
                </div>
                <span className="text-xs font-medium shrink-0">{post.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
