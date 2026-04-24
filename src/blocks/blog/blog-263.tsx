import type { BlockProps } from "@/blocks/types";
import { ChevronRight, Layers } from "lucide-react";

const DEFAULTS = [
  { title: "No-Code for Startups", description: "Launch your MVP without hiring a dev team.", label: "Startups", value: "Apr 15" },
  { title: "Building Multi-Page Sites", description: "Go beyond single-page with proper navigation and structure.", label: "Tutorials", value: "Apr 12" },
  { title: "Optimizing for Core Web Vitals", description: "Speed matters. Here is how to score 90+ on PageSpeed.", label: "Performance", value: "Apr 8" },
  { title: "Client Management Tips", description: "Keep projects on track with clear communication.", label: "Business", value: "Apr 5" },
];

export default function Blog263(props: BlockProps) {
  const { theme, heading = "Knowledge Base", items = DEFAULTS } = props;
  const categories = [...new Set(items.map(p => String(p.label ?? "General")))];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Layers className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
        <div className="space-y-3">
          {categories.map((cat) => (
            <details key={cat} className="group rounded-xl border overflow-hidden" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold">
                {cat}
                <ChevronRight className="w-4 h-4 opacity-40 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-4 pb-4 space-y-3">
                {items.filter(p => String(p.label ?? "General") === cat).map((post, j) => (
                  <article key={j} className="p-3 rounded-lg cursor-pointer hover:opacity-80" style={{ backgroundColor: theme?.accent ?? "#f9fafb" }}>
                    <h3 className="font-medium">{post.title}</h3>
                    <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
                  </article>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
