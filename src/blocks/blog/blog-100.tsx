import type { BlockProps } from "@/blocks/types";
import { Layers, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Web Performance Optimization Checklist", description: "A practical list of techniques to speed up your site.", label: "Performance" },
  { title: "Setting Up a Monorepo with Turborepo", description: "Shared packages, task orchestration, and remote caching.", label: "Tooling" },
  { title: "Effective Sprint Planning", description: "Estimate better, commit to less, and deliver more consistently.", label: "Agile" },
];

export default function Blog100(props: BlockProps) {
  const { theme, heading = "Related Content", items = DEFAULT_ITEMS, buttonText = "Explore the blog" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Layers className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
              <div className="aspect-[16/9]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="p-5">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>{String(post.label)}</span>
                <h3 className="mt-3 font-bold text-base">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
