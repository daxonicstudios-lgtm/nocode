import type { BlockProps } from "@/blocks/types";
import { Bookmark, ChevronRight } from "lucide-react";

const POSTS = [
  { title: "Why Your Team Needs a Design System", description: "Consistency, speed, and scale — the case for systematic design.", label: "Design" },
  { title: "GraphQL vs REST in 2026", description: "A practical comparison to help you choose the right API style.", label: "Backend" },
];

export default function Blog204(props: BlockProps) {
  const { theme, heading = "Editor's Picks", subheading = "Hand-selected articles by our editorial team.", buttonText = "View All", buttonUrl = "#", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">{heading}</h2>
            <p className="mt-1 opacity-60">{subheading}</p>
          </div>
          <a href={buttonUrl} className="mt-4 sm:mt-0 flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}<ChevronRight className="w-4 h-4" /></a>
        </div>
        {items.slice(0, 2).map((post, i) => (
          <article key={i} className="flex gap-5 py-6 border-b" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
            <div className="w-28 h-28 shrink-0 rounded-xl" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
              <h3 className="mt-1 text-xl font-bold">{post.title}</h3>
              <p className="mt-1 text-sm opacity-70">{post.description}</p>
            </div>
            <button className="shrink-0 self-start p-2 hover:bg-black/5 rounded-full transition" aria-label="Bookmark"><Bookmark className="w-5 h-5" /></button>
          </article>
        ))}
      </div>
    </section>
  );
}
