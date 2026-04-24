import type { BlockProps } from "@/blocks/types";
import { Crown, Sparkles, Gem, Star } from "lucide-react";

const icons = [Sparkles, Gem, Star, Crown];

export default function Features317(props: BlockProps) {
  const {
    theme,
    heading = "Featured Capabilities",
    subheading = "Our most popular feature glows for a reason",
    items = [
      { title: "AI Writer", description: "Generate compelling copy for any page in seconds." },
      { title: "Design Tokens", description: "One change updates your entire site's look and feel.", value: "featured" },
      { title: "Form Builder", description: "Collect leads with drag-and-drop forms and instant notifications." },
      { title: "SEO Toolkit", description: "Built-in optimization ensures search engines love your site." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isFeatured = item.value === "featured";
            return (
              <div
                key={i}
                className="relative rounded-xl p-6 border transition-all duration-300"
                style={{
                  borderColor: isFeatured ? primary : `${primary}15`,
                  boxShadow: isFeatured ? `0 0 20px ${primary}30, 0 0 40px ${primary}15` : "none",
                }}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold text-white" style={{ backgroundColor: primary }}>
                    Popular
                  </div>
                )}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${isFeatured ? "animate-pulse" : ""}`} style={{ backgroundColor: `${primary}15`, color: primary }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
