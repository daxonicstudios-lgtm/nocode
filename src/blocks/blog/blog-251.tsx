import type { BlockProps } from "@/blocks/types";
import { Pin, Clock, ChevronRight } from "lucide-react";

const DEFAULTS = [
  { title: "Introducing Our New Design System", description: "A unified approach to building beautiful interfaces faster than ever before.", label: "Featured", value: "8 min read" },
  { title: "How We Scaled to 1 Million Users", description: "The infrastructure decisions that made rapid growth possible.", label: "Engineering", value: "5 min read" },
  { title: "The Future of No-Code Platforms", description: "Why visual development is becoming the standard for modern teams.", label: "Opinion", value: "4 min read" },
  { title: "Customer Success Story: Bloom Agency", description: "How a small agency built 200 websites in one quarter.", label: "Case Study", value: "6 min read" },
];

export default function Blog251(props: BlockProps) {
  const { theme, heading = "Our Blog", subheading = "Insights and updates from our team", items = DEFAULTS } = props;
  const featured = items[0];
  const posts = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-8">{subheading}</p>
        <div className="sticky top-0 z-10 rounded-2xl p-6 sm:p-8 mb-8" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>
          <div className="flex items-center gap-2 mb-3">
            <Pin className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>Pinned</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{featured?.title}</h3>
          <p className="opacity-70 mb-3">{featured?.description}</p>
          <div className="flex items-center gap-1 text-xs opacity-50">
            <Clock className="w-3 h-3" />
            <span>{String(featured?.value ?? "5 min read")}</span>
          </div>
        </div>
        <div className="space-y-4">
          {posts.map((post, i) => (
            <article key={i} className="flex items-center justify-between gap-4 p-4 rounded-xl hover:opacity-80 cursor-pointer border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider opacity-50">{String(post.label ?? "")}</span>
                <h3 className="font-semibold mt-1">{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 opacity-30 shrink-0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
