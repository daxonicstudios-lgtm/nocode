import type { BlockProps } from "@/blocks/types";
import { Tag, ArrowUpRight } from "lucide-react";

const CATS = ["All", "Design", "Engineering", "Business"];
const DEFAULTS = [
  { title: "Responsive Images: A Complete Guide", description: "Serve the right image size for every screen.", label: "Engineering", value: "May 5" },
  { title: "Brand Identity in 30 Minutes", description: "Quick exercises to define your visual brand.", label: "Design", value: "May 2" },
  { title: "Subscription Models That Work", description: "Recurring revenue strategies for digital products.", label: "Business", value: "Apr 28" },
  { title: "CSS Grid vs Flexbox", description: "When to use which layout system for best results.", label: "Engineering", value: "Apr 22" },
];

export default function Blog261(props: BlockProps) {
  const { theme, heading = "Browse by Topic", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{heading}</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map((cat, i) => (
            <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium transition-colors" style={i === 0 ? { backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" } : { backgroundColor: theme?.accent ?? "#f3f4f6" }}>
              {cat}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {items.map((post, i) => (
            <article key={i} className="flex items-start justify-between gap-4 p-4 rounded-xl border cursor-pointer hover:shadow-sm transition-shadow" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Tag className="w-3 h-3 opacity-40" />
                  <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
                </div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-30 shrink-0 mt-1" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
