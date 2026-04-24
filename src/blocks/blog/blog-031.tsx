import type { BlockProps } from "@/blocks/types";
import { Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Future of No-Code Is Conversational", description: "How AI chat interfaces will replace visual editors for website building.", label: "AI", imageUrl: "", url: "#" },
  { title: "Designing Dark Mode That Actually Works", description: "Beyond inverting colors: creating dark themes that are beautiful and accessible.", label: "Design", imageUrl: "", url: "#" },
  { title: "Scaling Infrastructure for Global Users", description: "CDNs, edge functions, and multi-region databases that keep latency low.", label: "DevOps", imageUrl: "", url: "#" },
];

export default function Blog031(props: BlockProps) {
  const { theme, heading = "Latest from the Blog", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#818cf8" }}>{String(post.label ?? "")}</span>
              <h3 className="mt-2 text-lg font-bold leading-snug text-white group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-50 line-clamp-2">{post.description}</p>
              <div className="mt-3 flex items-center gap-1 text-xs opacity-30">
                <Clock className="w-3 h-3" /> 5 min read
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
