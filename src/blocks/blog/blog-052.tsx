import type { BlockProps } from "@/blocks/types";
import { Tag } from "lucide-react";

const TAGS = ["Latest", "Tutorials", "Case Studies", "Company News"];
const DEFAULT_ITEMS = [
  { title: "Why Mobile-First Design Matters", description: "Over 60% of web traffic now comes from mobile devices.", label: "Tutorials" },
  { title: "Our Series A Journey", description: "What we learned raising our first institutional round.", label: "Company News" },
  { title: "How Acme Corp Doubled Conversions", description: "A deep dive into the redesign that changed everything.", label: "Case Studies" },
  { title: "Getting Started with Components", description: "A beginner-friendly guide to building with blocks.", label: "Tutorials" },
];

export default function Blog052(props: BlockProps) {
  const { theme, heading = "Latest Articles", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <div className="flex gap-2 flex-wrap">
            {TAGS.map((t, i) => (
              <span key={i} className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium cursor-pointer" style={{ backgroundColor: i === 0 ? (theme?.primary ?? "#6366f1") : (theme?.secondary ?? "#f1f5f9"), color: i === 0 ? "#fff" : theme?.foreground }}>
                <Tag className="w-3 h-3" />{t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="flex gap-4">
              <div className="w-24 h-24 shrink-0 rounded-lg" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">{String(post.label)}</span>
                <h3 className="mt-1 font-semibold text-sm leading-snug">{post.title}</h3>
                <p className="mt-1 text-xs opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
