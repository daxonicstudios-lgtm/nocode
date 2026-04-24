import type { BlockProps } from "@/blocks/types";
import { BookOpen } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "What We Learned From 500 Customer Interviews", description: "Patterns and insights from three months of intensive user research across West Africa.", label: "Research", imageUrl: "", url: "#" },
  { title: "Optimizing Page Speed for Mobile Networks", description: "How we reduced load times by 60% for users on 3G connections in emerging markets.", label: "Engineering", imageUrl: "", url: "#" },
  { title: "The Future of Website Building Is Conversational", description: "Why telling an AI what you want beats dragging and dropping every time.", label: "Product", imageUrl: "", url: "#" },
];

export default function Blog004(props: BlockProps) {
  const { theme, heading = "Our Blog", items = DEFAULT_ITEMS, buttonText = "Read More" } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl p-6" style={{ backgroundColor: theme?.background ?? "#ffffff" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
                <BookOpen className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
              <h3 className="mt-2 text-lg font-bold leading-snug">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-3">{post.description}</p>
              <a href={post.url ?? "#"} className="mt-4 inline-block text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
