import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why Speed Matters More Than You Think", description: "Every 100ms of latency costs you conversions. Here is the data and how to fix it.", label: "Performance", imageUrl: "", url: "#" },
  { title: "Component-Driven Development Explained", description: "Building UIs from small, reusable pieces that scale with your product.", label: "Frontend", imageUrl: "", url: "#" },
  { title: "Customer Story: Kampala Creative Studio", description: "How a design agency built client websites 10x faster using our platform.", label: "Case Study", imageUrl: "", url: "#" },
  { title: "Understanding Web Vitals in 2026", description: "Google's latest performance metrics and what they mean for your site.", label: "SEO", imageUrl: "", url: "#" },
];

export default function Blog032(props: BlockProps) {
  const { theme, heading = "Explore", subheading = "Deep dives and quick reads from our team.", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#1e1b4b", color: theme?.foreground ?? "#c7d2fe" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 4).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group flex gap-5 p-5 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="w-36 h-28 rounded-xl shrink-0 overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#818cf8" }}>{String(post.label ?? "")}</span>
                <h3 className="mt-1 font-bold text-white group-hover:underline line-clamp-2">{post.title}</h3>
                <p className="mt-1 text-sm opacity-50 line-clamp-1">{post.description}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium" style={{ color: theme?.primary ?? "#818cf8" }}>
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
