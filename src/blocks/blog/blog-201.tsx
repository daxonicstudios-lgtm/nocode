import type { BlockProps } from "@/blocks/types";
import { Heart, Clock, ArrowRight } from "lucide-react";

const POSTS = [
  { title: "Mastering Remote Work", description: "Proven strategies to stay productive when working from anywhere.", label: "Productivity", value: "5 min read" },
  { title: "The Future of AI in Design", description: "How generative AI is reshaping creative workflows.", label: "Technology", value: "7 min read" },
  { title: "Building a Personal Brand", description: "Stand out in a crowded market with authentic storytelling.", label: "Marketing", value: "4 min read" },
];

export default function Blog201(props: BlockProps) {
  const { theme, heading = "Latest Articles", subheading = "Curated reads worth bookmarking.", buttonText = "Read More", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-3 text-center opacity-60 max-w-xl mx-auto">{subheading}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl border p-5 flex flex-col" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>{post.label}</span>
                <button className="p-1.5 rounded-full hover:bg-black/5 transition" aria-label="Save">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-lg font-bold leading-snug">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70 flex-1">{post.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs opacity-50 flex items-center gap-1"><Clock className="w-3 h-3" />{post.value}</span>
                <span className="text-sm font-medium flex items-center gap-1" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}<ArrowRight className="w-3 h-3" /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
