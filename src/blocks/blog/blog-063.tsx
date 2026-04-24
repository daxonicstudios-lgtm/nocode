import type { BlockProps } from "@/blocks/types";
import { MoveRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Micro-Animations That Delight", description: "Subtle motion design that makes interfaces feel alive.", label: "Design" },
  { title: "Database Scaling Strategies", description: "From single Postgres to read replicas and connection pooling.", label: "Backend" },
  { title: "Writing Effective Error Messages", description: "Turn frustration into guidance with better copy.", label: "UX Writing" },
];

export default function Blog063(props: BlockProps) {
  const { theme, heading = "Latest Posts", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group relative rounded-2xl overflow-hidden border transition-shadow hover:shadow-xl" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[3/2] overflow-hidden">
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
                <h3 className="mt-2 font-bold text-lg">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: theme?.primary ?? "#6366f1" }}>
                  Read article <MoveRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
