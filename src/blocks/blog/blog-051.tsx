import type { BlockProps } from "@/blocks/types";
import { Filter } from "lucide-react";

const TAGS = ["All", "Design", "Engineering", "Product", "Growth"];
const DEFAULT_ITEMS = [
  { title: "Scaling Design Systems Across Teams", description: "How we unified 12 product squads under one visual language.", label: "Design" },
  { title: "Building for Offline-First Users", description: "Why progressive web apps changed our mobile strategy.", label: "Engineering" },
  { title: "From Zero to 10K Users in 90 Days", description: "The growth playbook that actually worked for us.", label: "Growth" },
  { title: "Product-Led Onboarding Patterns", description: "Reduce time-to-value with smart onboarding flows.", label: "Product" },
  { title: "Performance Budgets That Stick", description: "Setting guardrails your team will actually follow.", label: "Engineering" },
  { title: "The Art of Design Critiques", description: "Structured feedback sessions that improve every project.", label: "Design" },
];

export default function Blog051(props: BlockProps) {
  const { theme, heading = "Our Blog", subheading = "Insights from the team", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
        <div className="flex items-center gap-2 mt-8 flex-wrap">
          <Filter className="w-4 h-4 opacity-50" />
          {TAGS.map((tag, i) => (
            <button key={i} className="px-4 py-1.5 rounded-full text-xs font-medium border transition-colors" style={{ borderColor: theme?.primary ?? "#6366f1", color: i === 0 ? "#fff" : theme?.foreground, backgroundColor: i === 0 ? (theme?.primary ?? "#6366f1") : "transparent" }}>
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {items.slice(0, 6).map((post, i) => (
            <article key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[16/10]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="p-5">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: theme?.accent ?? "#f0fdf4", color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
                <h3 className="mt-3 font-semibold text-base leading-snug">{post.title}</h3>
                <p className="mt-1.5 text-sm opacity-60 line-clamp-2">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
