import type { BlockProps } from "@/blocks/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Passwordless Authentication", description: "Magic links, passkeys, and biometric auth for modern apps.", label: "Security" },
  { title: "Responsive Images Deep Dive", description: "srcset, sizes, picture element, and image CDN optimization.", label: "Performance" },
  { title: "Design Principles That Stick", description: "Crafting memorable principles that guide real decisions.", label: "Design" },
  { title: "Server-Sent Events vs WebSockets", description: "Choosing the right real-time communication protocol.", label: "Backend" },
  { title: "CSS Logical Properties", description: "Writing direction-agnostic styles for international audiences.", label: "CSS" },
  { title: "Remix Data Loading Patterns", description: "Nested routes and parallel data fetching explained.", label: "Remix" },
];

export default function Blog138(props: BlockProps) {
  const { theme, heading = "Posts", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {items.slice(0, 6).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex gap-4 p-4 rounded-xl border hover:bg-white/5 transition-colors" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="w-16 h-16 rounded-lg flex-shrink-0" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"}40, ${theme?.accent ?? "#06b6d4"}20)` }} />
              <div className="min-w-0">
                <span className="text-xs font-medium opacity-40">{String(item.label)}</span>
                <h3 className="font-bold group-hover:underline truncate">{item.title}</h3>
                <p className="text-sm opacity-40 truncate">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="px-3 py-1.5 rounded-md border text-sm flex items-center gap-1" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <ChevronLeft className="w-3 h-3" /> Prev
          </button>
          <span className="text-sm opacity-50">Page <strong>1</strong> of 8</span>
          <button className="px-3 py-1.5 rounded-md text-sm flex items-center gap-1" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
            Next <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
