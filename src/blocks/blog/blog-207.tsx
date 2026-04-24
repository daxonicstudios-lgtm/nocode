import type { BlockProps } from "@/blocks/types";
import { Heart, Eye } from "lucide-react";

const POSTS = [
  { title: "Microfrontends in Practice", description: "Breaking monolithic frontends into manageable pieces.", label: "Architecture", value: "1.2k views" },
  { title: "Data-Driven Product Decisions", description: "How to use analytics without losing your creative instinct.", label: "Product", value: "890 views" },
];

export default function Blog207(props: BlockProps) {
  const { theme, heading = "Trending Now", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        {items.slice(0, 2).map((post, i) => (
          <article key={i} className="flex flex-col sm:flex-row gap-6 mb-8 p-6 rounded-2xl" style={{ backgroundColor: theme?.accent ? `${theme.accent}22` : "#f9fafb" }}>
            <div className="w-full sm:w-48 h-36 shrink-0 rounded-xl" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wide" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
              <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70">{post.description}</p>
              <div className="mt-4 flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm opacity-60 hover:opacity-100 transition"><Heart className="w-4 h-4" /> Save</button>
                <span className="flex items-center gap-1 text-sm opacity-40"><Eye className="w-4 h-4" />{post.value}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
