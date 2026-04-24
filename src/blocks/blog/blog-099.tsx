import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Incremental Static Regeneration", description: "Update static pages without rebuilding your entire site.", label: "Next.js" },
  { title: "Real-Time Collaboration Architecture", description: "CRDTs, operational transforms, and WebSocket patterns.", label: "Systems" },
  { title: "Product Analytics Setup Guide", description: "From event taxonomy to dashboard design in a weekend.", label: "Analytics" },
  { title: "Testing Strategies for React Apps", description: "Unit, integration, and E2E — finding the right balance.", label: "Testing" },
];

export default function Blog099(props: BlockProps) {
  const { theme, heading = "Keep Reading", subheading = "More articles on similar topics", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fafafa", color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="mt-1 text-sm opacity-50">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group p-5 rounded-xl border hover:border-transparent hover:shadow-md transition-all" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }}>
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
              <h3 className="mt-2 font-bold text-sm">{post.title}</h3>
              <p className="mt-1 text-xs opacity-60 line-clamp-2">{post.description}</p>
              <ArrowUpRight className="w-4 h-4 mt-3 opacity-0 group-hover:opacity-60 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
