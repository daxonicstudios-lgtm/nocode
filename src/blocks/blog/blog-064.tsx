import type { BlockProps } from "@/blocks/types";
import { Plus } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Typography Rules for Web", description: "Line height, measure, and scale — the foundations of readable text.", label: "Design Systems" },
  { title: "GraphQL vs REST in 2026", description: "An honest comparison for teams choosing their API layer.", label: "Architecture" },
  { title: "Onboarding Email Sequences", description: "The seven emails that reduce churn by 40 percent.", label: "Marketing" },
  { title: "Accessible Color Contrast", description: "Tools and techniques for meeting WCAG 2.2 standards.", label: "Accessibility" },
];

export default function Blog064(props: BlockProps) {
  const { theme, heading = "Knowledge Base", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group relative overflow-hidden rounded-xl cursor-pointer" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
              <div className="flex items-start gap-4 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:rotate-90 transition-transform duration-300" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                  <Plus className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{String(post.label)}</span>
                  <h3 className="mt-1 font-bold text-base">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-60">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
