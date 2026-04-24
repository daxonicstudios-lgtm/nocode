import type { BlockProps } from "@/blocks/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Getting Started with Web Components", description: "Framework-agnostic building blocks for the modern web.", label: "Tutorial" },
  { title: "The Metrics That Matter for SaaS", description: "MRR, churn, LTV — a founder's guide to key numbers.", label: "Business" },
  { title: "Effective 1-on-1 Meetings", description: "Templates and questions that make every check-in count.", label: "Leadership" },
  { title: "Progressive Enhancement in Practice", description: "Build for the baseline, enhance for modern browsers.", label: "Frontend" },
  { title: "Customer Success Playbook", description: "Proactive strategies to reduce churn and increase NPS.", label: "Support" },
];

export default function Blog081(props: BlockProps) {
  const { theme, heading = "Featured Stories", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {items.slice(0, 5).map((post, i) => (
            <article key={i} className="min-w-[280px] sm:min-w-[320px] snap-start shrink-0 rounded-xl border overflow-hidden" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[16/10]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
                <h3 className="mt-1 font-bold text-sm">{post.title}</h3>
                <p className="mt-1 text-xs opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
