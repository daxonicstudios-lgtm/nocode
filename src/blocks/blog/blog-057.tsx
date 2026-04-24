import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Seed Round Closed", description: "We raised $2M to build the future of no-code in Africa.", label: "Q1 2026" },
  { title: "Marketplace Beta", description: "Third-party designers can now sell templates on our platform.", label: "Q2 2026" },
  { title: "Enterprise Tier Launched", description: "Custom domains, SSO, and dedicated support for teams.", label: "Q3 2026" },
  { title: "100K Users Milestone", description: "Growing faster than expected across 14 countries.", label: "Q4 2026" },
];

export default function Blog057(props: BlockProps) {
  const { theme, heading = "Milestones", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">{heading}</h2>
        <div className="space-y-0">
          {items.slice(0, 4).map((post, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
                {i < items.length - 1 && <div className="w-0.5 flex-1 min-h-[60px]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />}
              </div>
              <div className="pb-10">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
                <h3 className="mt-1 text-lg font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60">{post.description}</p>
                <a href="#" className="inline-flex items-center gap-1 mt-2 text-xs font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
                  Read more <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
