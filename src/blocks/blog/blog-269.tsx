import type { BlockProps } from "@/blocks/types";
import { Search, X } from "lucide-react";

const TAGS = ["All Posts", "Product", "Engineering", "Design", "Culture"];
const DEFAULTS = [
  { title: "Our Design Philosophy", description: "Simple, functional, and beautiful. The three pillars of our approach.", label: "Design", value: "May 10" },
  { title: "Scaling Node.js in Production", description: "Lessons learned from handling millions of requests per day.", label: "Engineering", value: "May 7" },
  { title: "Remote Work Culture at Scale", description: "How our team stays connected across three time zones.", label: "Culture", value: "May 3" },
  { title: "Launching Premium Templates", description: "A new marketplace for professionally designed website templates.", label: "Product", value: "Apr 30" },
];

export default function Blog269(props: BlockProps) {
  const { theme, heading = "Blog", subheading = "Stories from our team", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold">{heading}</h2>
        <p className="opacity-60 mt-1 mb-6">{subheading}</p>
        <div className="flex items-center gap-3 p-3 rounded-xl mb-6 border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <Search className="w-4 h-4 opacity-40" />
          <span className="text-sm opacity-40">Search articles...</span>
        </div>
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {TAGS.map((tag, i) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap cursor-pointer flex items-center gap-1" style={i === 0 ? { backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" } : { border: `1px solid ${theme?.secondary ?? "#d1d5db"}` }}>
              {tag}
              {i === 0 && <X className="w-3 h-3" />}
            </span>
          ))}
        </div>
        <div className="divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.map((post, i) => (
            <article key={i} className="py-5 cursor-pointer hover:opacity-80">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>{String(post.label ?? "")}</span>
                <span className="text-xs opacity-40">{String(post.value ?? "")}</span>
              </div>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm opacity-60 mt-1">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
