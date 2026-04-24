import type { BlockProps } from "@/blocks/types";
import { Waves, Play, Bookmark, Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "API Design Best Practices", description: "RESTful conventions, versioning, and documentation that developers love.", label: "Tech Talk", value: "31 min" },
  { title: "Building for Offline", description: "Service workers, caching, and sync strategies for unreliable networks.", label: "Deep Dive", value: "44 min" },
  { title: "The Accessibility Imperative", description: "Why accessibility is not a nice-to-have but a business requirement.", label: "Interview", value: "27 min" },
  { title: "Scaling Customer Support", description: "From inbox zero to a full help desk: the tools and processes that work.", label: "Operations", value: "35 min" },
];

export default function Blog199(props: BlockProps) {
  const { theme, heading = "Signal", subheading = "Cutting through the noise", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#f5f3ff", color: theme?.foreground ?? "#1e1b4b" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Waves className="w-5 h-5" style={{ color: theme?.primary ?? "#7c3aed" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-50 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.slice(0, 4).map((item, i) => (
            <article key={i} className="rounded-xl p-5 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: theme?.accent ?? "#ede9fe", color: theme?.primary ?? "#7c3aed" }}>{item.label}</span>
                <button className="opacity-30 hover:opacity-60"><Bookmark className="w-4 h-4" /></button>
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm opacity-50 mt-1">{item.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="flex items-center gap-1 text-xs opacity-40"><Clock className="w-3 h-3" />{item.value}</span>
                <a href={buttonUrl} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}>
                  <Play className="w-3 h-3 text-white fill-white" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
