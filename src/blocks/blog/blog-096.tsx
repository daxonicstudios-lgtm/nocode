import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Server-Side Rendering vs Static Generation", description: "When to use each approach and how to decide for your project.", label: "Frontend" },
  { title: "CI/CD Pipeline Best Practices", description: "Automated testing, deployment gates, and rollback strategies.", label: "DevOps" },
  { title: "Color Theory for Digital Products", description: "How to create palettes that are both beautiful and accessible.", label: "Design" },
];

export default function Blog096(props: BlockProps) {
  const { theme, heading = "Related Articles", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <a href="#" className="flex items-center gap-1 text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group rounded-xl overflow-hidden border transition-shadow hover:shadow-md" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[16/10]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
                <h3 className="mt-2 font-bold text-sm group-hover:underline">{post.title}</h3>
                <p className="mt-1 text-xs opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
