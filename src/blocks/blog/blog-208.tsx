import type { BlockProps } from "@/blocks/types";
import { Bookmark, Tag } from "lucide-react";

const POSTS = [
  { title: "Scaling Customer Support with AI", description: "Chatbots, triage automation, and keeping the human touch.", label: "AI", value: "Support" },
  { title: "Building Trust Through Transparency", description: "Open-source your roadmap, share your metrics, win loyalty.", label: "Culture", value: "Leadership" },
  { title: "API Rate Limiting Strategies", description: "Protect your services without frustrating your users.", label: "Backend", value: "Security" },
];

export default function Blog208(props: BlockProps) {
  const { theme, heading = "Blog", subheading = "Insights from the team.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="text-center mt-2 opacity-60">{subheading}</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="border rounded-xl p-5 flex flex-col" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-xs opacity-50"><Tag className="w-3 h-3" />{post.value}</div>
                <button className="p-1 rounded hover:bg-black/5 transition" aria-label="Bookmark"><Bookmark className="w-4 h-4" /></button>
              </div>
              <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
              <h3 className="mt-2 font-bold text-lg">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70 flex-1">{post.description}</p>
              <div className="mt-4 w-10 h-10 rounded-full" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
