import type { BlockProps } from "@/blocks/types";
import { ThumbsUp, MessageSquare, Share } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Feature Flags in Production", description: "Gradual rollouts, A/B tests, and kill switches for every deploy.", label: "38", value: "156" },
  { title: "Designing Multi-Tenant Systems", description: "Shared vs isolated databases and the trade-offs of each.", label: "52", value: "210" },
  { title: "Customer Discovery Interviews", description: "Ask the right questions to validate your next product idea.", label: "15", value: "84" },
];

export default function Blog089(props: BlockProps) {
  const { theme, heading = "Reader Engagement", subheading = "Articles sparking the most conversation", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fafafa", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((post, i) => (
          <article key={i} className="rounded-xl p-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
            <div className="aspect-[3/2] rounded-lg mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
            <h3 className="font-bold text-base">{post.title}</h3>
            <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <button className="flex items-center gap-1 text-xs opacity-50">
                <ThumbsUp className="w-3.5 h-3.5" /> {String(post.value)}
              </button>
              <button className="flex items-center gap-1 text-xs opacity-50">
                <MessageSquare className="w-3.5 h-3.5" /> {String(post.label)}
              </button>
              <button className="flex items-center gap-1 text-xs opacity-50">
                <Share className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
