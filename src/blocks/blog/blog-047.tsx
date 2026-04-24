import type { BlockProps } from "@/blocks/types";
import { Clock, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Five Design Patterns Every Builder Should Know", description: "Proven layouts and interactions that work across industries and use cases.", label: "Design · 8 min", imageUrl: "", url: "#" },
  { title: "How to Write Headlines That Convert", description: "Data-backed formulas for crafting headlines that get clicks without resorting to clickbait.", label: "Copywriting · 5 min", imageUrl: "", url: "#" },
  { title: "Our Approach to Continuous Integration", description: "How automated testing and deployment pipelines help us ship with confidence every day.", label: "DevOps · 7 min", imageUrl: "", url: "#" },
];

export default function Blog047(props: BlockProps) {
  const { theme, heading = "Latest Articles", items = DEFAULT_ITEMS, buttonText = "Join Newsletter" } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="space-y-6 mb-12">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group flex flex-col sm:flex-row gap-5 p-5 rounded-xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="w-full sm:w-48 h-36 rounded-xl shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-lg font-bold group-hover:underline">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs opacity-40">
                    <Clock className="w-3 h-3" /> {String(post.label ?? "")}
                  </div>
                  <span className="flex items-center gap-1 text-xs font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          <div className="flex-1 text-white">
            <h3 className="text-xl font-bold">Never miss a post</h3>
            <p className="mt-1 text-sm opacity-80">Weekly insights delivered to your inbox. Unsubscribe anytime.</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input type="email" placeholder="you@email.com" className="flex-1 sm:w-56 px-4 py-2.5 rounded-lg text-sm" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }} />
            <button className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white shrink-0" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
