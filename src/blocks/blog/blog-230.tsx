import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const POSTS = [
  { title: "Multi-Tenant Architecture", description: "Isolate data while sharing infrastructure efficiently.", label: "Architecture" },
  { title: "Pixel-Perfect Collaboration", description: "Workflows that keep designers and developers in sync.", label: "Process" },
  { title: "Churn Analysis Framework", description: "Identify why users leave and what to fix first.", label: "Analytics" },
];

export default function Blog230(props: BlockProps) {
  const { theme, heading = "Insights & Ideas", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wide" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
              <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
              <p className="mt-1 text-sm opacity-70">{post.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 group-hover:gap-3" style={{ color: theme?.primary ?? "#6366f1" }}>Read article <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
