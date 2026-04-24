import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Micro-Frontend Architecture", description: "Compose independently deployed frontend modules into a unified app.", label: "Architecture" },
  { title: "Designing Effective Notifications", description: "Urgency levels, channels, and user preferences for alerts.", label: "UX" },
  { title: "API Versioning Strategies", description: "URL paths, headers, or content negotiation — pros and cons of each.", label: "Backend" },
];

export default function Blog098(props: BlockProps) {
  const { theme, heading = "Related Posts", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Zap className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
        <div className="space-y-4">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href="#" className="flex items-center gap-5 p-4 rounded-xl border hover:shadow-sm transition-shadow" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <span className="text-3xl font-black opacity-10 w-8 text-center">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{String(post.label)}</span>
                <h3 className="font-bold text-sm">{post.title}</h3>
                <p className="text-xs opacity-60 truncate">{post.description}</p>
              </div>
              <div className="w-16 h-16 shrink-0 rounded-lg hidden sm:block" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
