import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Our Most-Read Post of 2026", description: "A retrospective on the article that resonated with 50,000 readers.", label: "Featured" },
  { title: "Introduction to Motion Design", description: "Principles of animation that bring interfaces to life.", label: "Design" },
  { title: "Managing Technical Debt", description: "A pragmatic approach to keeping your codebase healthy.", label: "Engineering" },
  { title: "Brand Storytelling Framework", description: "Connect emotionally with your audience through narrative.", label: "Marketing" },
];

export default function Blog085(props: BlockProps) {
  const { theme, heading = "Editor's Picks", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="min-w-[300px] sm:min-w-[350px] snap-start shrink-0 rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
              <div className="aspect-[2/1]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
                <h3 className="mt-2 font-bold text-base">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
