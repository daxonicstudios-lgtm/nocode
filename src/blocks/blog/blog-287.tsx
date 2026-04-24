import type { BlockProps } from "@/blocks/types";
import { Star, ArrowRight } from "lucide-react";

const DEFAULTS = [
  { title: "The Ultimate Guide to Website Speed", description: "From server optimization to asset compression, learn every technique to make your site lightning fast.", label: "Performance", value: "20 min read" },
  { title: "Choosing Brand Colors", description: "A systematic approach to picking colors that represent your brand.", label: "Branding", value: "6 min" },
  { title: "Forms That Users Love", description: "Multi-step, single-column, and progressive disclosure patterns.", label: "UX", value: "8 min" },
  { title: "Webhook Integrations", description: "Connect your site to Zapier, Make, and other automation tools.", label: "Integration", value: "5 min" },
  { title: "Content Strategy 101", description: "Plan your blog content for maximum impact.", label: "Content", value: "7 min" },
];

export default function Blog287(props: BlockProps) {
  const { theme, heading = "Editor's Choice", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <article className="rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#f9fafb" }}>
              <div className="aspect-video" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#f59e0b" }}>{String(featured?.label ?? "")}</span>
                </div>
                <h3 className="text-xl font-bold">{featured?.title}</h3>
                <p className="opacity-70 mt-2">{featured?.description}</p>
                <span className="text-xs opacity-40 mt-3 block">{String(featured?.value ?? "")}</span>
              </div>
            </article>
          </div>
          <div className="space-y-3">
            {rest.map((post, i) => (
              <article key={i} className="flex items-center justify-between gap-4 p-4 rounded-xl border cursor-pointer hover:shadow-sm transition-shadow" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div>
                  <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
                  <h3 className="font-semibold mt-0.5">{post.title}</h3>
                  <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 opacity-30 shrink-0" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
