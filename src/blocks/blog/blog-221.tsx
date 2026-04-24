import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const POSTS = [
  { title: "Optimizing Web Fonts", description: "Reduce layout shift and speed up text rendering.", label: "Performance" },
  { title: "Component Library Architecture", description: "Structuring a scalable design system from scratch.", label: "Engineering" },
  { title: "Growth Hacking for SaaS", description: "Low-cost strategies that drive sustainable user growth.", label: "Marketing" },
];

export default function Blog221(props: BlockProps) {
  const { theme, heading = "Latest Insights", subheading = "Hover to explore our latest thinking.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-2 text-center opacity-60">{subheading}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="aspect-[3/2] rounded-xl mb-4 transition-transform duration-300 group-hover:scale-[1.02]" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
              <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
              <p className="mt-1 text-sm opacity-70">{post.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: theme?.primary ?? "#6366f1" }}>Read more <ArrowRight className="w-3 h-3" /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
