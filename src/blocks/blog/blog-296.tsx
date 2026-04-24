import type { BlockProps } from "@/blocks/types";
import { Clock, Bookmark } from "lucide-react";

const DEFAULTS = [
  { title: "Building Digital Products for Emerging Markets", description: "Connectivity, device constraints, and cultural context shape everything. Here is how we approach product design for Africa.", label: "Deep Dive", value: "18 min" },
  { title: "Component Architecture at Scale", description: "Managing 15,000+ blocks without chaos.", label: "Engineering", value: "12 min" },
  { title: "Startup Funding in Africa", description: "The investment landscape is changing fast.", label: "Business", value: "8 min" },
  { title: "Design System Documentation", description: "Keep your team aligned with living docs.", label: "Design", value: "6 min" },
  { title: "Edge Functions Guide", description: "Run code at the edge for faster responses.", label: "Tutorial", value: "5 min" },
];

export default function Blog296(props: BlockProps) {
  const { theme, heading = "Latest from the Blog", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((post, i) => (
            <article key={i} className="break-inside-avoid rounded-2xl border overflow-hidden cursor-pointer hover:shadow-md transition-shadow" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              {i < 2 && <div className="aspect-video" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                  <Bookmark className="w-4 h-4 opacity-20 cursor-pointer" />
                </div>
                <h3 className={`font-bold ${i === 0 ? "text-xl" : "text-base"}`}>{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
                <div className="flex items-center gap-1 text-xs opacity-40 mt-3">
                  <Clock className="w-3 h-3" />
                  <span>{String(post.value ?? "")} read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
