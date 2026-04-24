import type { BlockProps } from "@/blocks/types";
import { ThumbsUp, MessageSquare, Bookmark, User } from "lucide-react";

const DEFAULTS = [
  { title: "Behind the Scenes: How We Design Components", description: "Every block starts with a sketch. Here is our process from idea to pixel-perfect code.", label: "Design Team", value: "3h ago" },
  { title: "Weekly Roundup: Top Projects", description: "Check out the five most impressive sites built on our platform this week.", label: "Editorial", value: "8h ago" },
  { title: "Ask Me Anything: CEO Edition", description: "Our CEO answers the community top questions about the platform roadmap.", label: "Community", value: "1d ago" },
];

export default function Blog272(props: BlockProps) {
  const { theme, heading = "Social Updates", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="space-y-5">
          {items.map((post, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[16/9]" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{String(post.label ?? "")}</p>
                    <p className="text-xs opacity-40">{String(post.value ?? "")}</p>
                  </div>
                </div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-xs opacity-50"><ThumbsUp className="w-4 h-4" /> {24 + i * 11}</button>
                    <button className="flex items-center gap-1 text-xs opacity-50"><MessageSquare className="w-4 h-4" /> {5 + i * 3}</button>
                  </div>
                  <button className="opacity-40"><Bookmark className="w-4 h-4" /></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
