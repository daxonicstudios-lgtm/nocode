import type { BlockProps } from "@/blocks/types";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Joy of Refactoring", description: "Why cleaning up code is one of the most satisfying parts of engineering.", label: "92 likes", value: "27 comments" },
  { title: "Building Products People Love", description: "Emotional design, delight moments, and the details that matter.", label: "148 likes", value: "43 comments" },
  { title: "Growing a Side Project", description: "From weekend hack to $5K MRR without quitting your day job.", label: "203 likes", value: "61 comments" },
];

export default function Blog090(props: BlockProps) {
  const { theme, heading = "Popular Posts", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        {items.slice(0, 3).map((post, i) => (
          <article key={i} className="flex flex-col sm:flex-row gap-5 py-6 border-b last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60">{post.description}</p>
              <div className="flex items-center gap-4 mt-3 text-xs opacity-50">
                <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" />{String(post.label).replace(" likes", "")}</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" />{String(post.value).replace(" comments", "")}</span>
                <a href="#" className="flex items-center gap-1 ml-auto" style={{ color: theme?.primary ?? "#6366f1" }}>
                  <ExternalLink className="w-3.5 h-3.5" /> Share
                </a>
              </div>
            </div>
            <div className="w-full sm:w-36 h-24 shrink-0 rounded-lg" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
          </article>
        ))}
      </div>
    </section>
  );
}
