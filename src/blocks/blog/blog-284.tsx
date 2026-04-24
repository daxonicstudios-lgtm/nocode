import type { BlockProps } from "@/blocks/types";
import { Sparkles, Clock } from "lucide-react";

const DEFAULTS = [
  { title: "AI Content Generation: A Practical Guide", description: "Use AI to draft blog posts, product descriptions, and marketing copy that sounds human.", label: "AI", value: "11 min" },
  { title: "Color Palette Generator", description: "Our new tool creates harmonious palettes instantly.", label: "Tool", value: "3 min" },
  { title: "Client Onboarding Template", description: "Streamline your process with this proven workflow.", label: "Business", value: "5 min" },
  { title: "Image Optimization Guide", description: "Compress without losing quality.", label: "Performance", value: "7 min" },
];

export default function Blog284(props: BlockProps) {
  const { theme, heading = "Highlights", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px]" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"}, ${theme?.accent ?? "#a855f7"})`, color: "#fff" }}>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 opacity-80" />
              <span className="text-sm font-bold uppercase tracking-wider opacity-80">{String(featured?.label ?? "")}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{featured?.title}</h3>
              <p className="opacity-80 mt-2">{featured?.description}</p>
              <div className="flex items-center gap-1 text-xs opacity-60 mt-3">
                <Clock className="w-3 h-3" />
                <span>{String(featured?.value ?? "")}</span>
              </div>
            </div>
          </article>
          <div className="space-y-4">
            {rest.map((post, i) => (
              <article key={i} className="p-4 rounded-xl border cursor-pointer hover:shadow-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                <h3 className="font-semibold mt-1">{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
                <span className="text-xs opacity-40 mt-2 block">{String(post.value ?? "")} read</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
