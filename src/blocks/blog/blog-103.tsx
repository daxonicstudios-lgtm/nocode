import type { BlockProps } from "@/blocks/types";
import { Bookmark } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Serverless at the Edge", description: "How edge computing is changing the way we deploy applications worldwide.", label: "Cloud" },
  { title: "The Art of Code Reviews", description: "Building a culture of constructive feedback within engineering teams.", label: "Culture" },
  { title: "Responsive Typography Guide", description: "Fluid type scales that look perfect on every screen size.", label: "CSS" },
  { title: "API Design Patterns", description: "REST, GraphQL, and tRPC compared for modern web applications.", label: "Backend" },
];

export default function Blog103(props: BlockProps) {
  const {
    theme,
    heading = "Trending Now",
    subheading = "Most popular this week",
    buttonText = "Save",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: theme?.background ?? "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
        color: theme?.foreground ?? "#f1f5f9",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
          <p className="mt-2 opacity-50 text-sm">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.slice(0, 4).map((item, i) => (
            <article
              key={i}
              className="group relative rounded-3xl p-6 backdrop-blur-2xl border border-white/5 hover:border-white/15 transition-all"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: theme?.primary ?? "#6366f1", color: "#fff" }}
                >
                  {String(item.label)}
                </span>
                <button className="opacity-40 group-hover:opacity-80 transition-opacity">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{item.description}</p>
              <div
                className="mt-4 h-1 w-12 rounded-full"
                style={{ background: `linear-gradient(90deg, ${theme?.primary ?? "#6366f1"}, ${theme?.accent ?? "#a855f7"})` }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
