import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Reduced Bundle Size by 60%", description: "Tree shaking, code splitting, and lazy loading in practice.", label: "Performance" },
  { title: "Building a Design Token Pipeline", description: "From Figma variables to CSS custom properties automatically.", label: "Design Ops" },
  { title: "Writing RFCs That Get Approved", description: "Structure, clarity, and the right level of detail.", label: "Process" },
  { title: "Edge Functions for Real-Time Features", description: "Low-latency compute at the CDN layer.", label: "Serverless" },
];

export default function Blog082(props: BlockProps) {
  const { theme, heading = "Scroll to Explore", items = DEFAULT_ITEMS, buttonText = "See all" } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="min-w-[260px] sm:min-w-[300px] snap-start shrink-0 rounded-2xl p-5" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="aspect-square rounded-xl mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{String(post.label)}</span>
              <h3 className="mt-1 font-bold text-base">{post.title}</h3>
              <p className="mt-1 text-xs opacity-60">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
