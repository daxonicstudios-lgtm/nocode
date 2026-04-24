import type { BlockProps } from "@/blocks/types";
import { Layers, MessageCircle } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Rise of AI Copilots", description: "Are developer productivity tools living up to the hype? We measured it.", label: "AI", value: "42 comments" },
  { title: "CSS Container Queries Ship", description: "After years of waiting, responsive components are finally here.", label: "CSS", value: "28 comments" },
  { title: "Rust for Web Developers", description: "A gentle introduction to Rust through building web servers.", label: "Rust", value: "35 comments" },
];

export default function Blog109(props: BlockProps) {
  const { theme, heading = "Community Highlights", items = DEFAULT_ITEMS } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: theme?.background ?? "linear-gradient(135deg, #0a0e1a, #162036)",
        color: theme?.foreground ?? "#cbd5e1",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <Layers className="w-5 h-5" style={{ color: theme?.accent ?? "#34d399" }} />
          <h2 className="text-3xl font-black">{heading}</h2>
        </div>
        {items.slice(0, 3).map((item, i) => (
          <article
            key={i}
            className="mb-4 rounded-2xl backdrop-blur-xl border border-white/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-white/5 transition-colors"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>
                {String(item.label)}
              </span>
              <h3 className="text-lg font-bold mt-1">{item.title}</h3>
              <p className="text-sm opacity-50 mt-1">{item.description}</p>
            </div>
            <div className="flex items-center gap-1 text-xs opacity-40 flex-shrink-0">
              <MessageCircle className="w-3.5 h-3.5" />
              {String(item.value)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
