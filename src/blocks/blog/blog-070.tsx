import type { BlockProps } from "@/blocks/types";
import { Clock, Zap } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Quick Wins for Page Speed", description: "Image optimization, lazy loading, and font subsetting in 10 minutes.", label: "3 min", value: "quick" },
  { title: "Deep Dive: Event Sourcing", description: "An architectural pattern for audit trails and temporal queries.", label: "22 min", value: "deep" },
  { title: "Figma Plugin Development", description: "Build custom tools that integrate directly into your design workflow.", label: "12 min", value: "deep" },
];

export default function Blog070(props: BlockProps) {
  const { theme, heading = "Read by Time", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="p-1.5">
                <div className="aspect-[16/10] rounded-xl relative" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold" style={{ backgroundColor: post.value === "quick" ? "#fef3c7" : (theme?.primary ?? "#6366f1"), color: post.value === "quick" ? "#92400e" : "#fff" }}>
                    {post.value === "quick" ? <Zap className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {String(post.label)}
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3">
                <h3 className="font-bold text-base">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
