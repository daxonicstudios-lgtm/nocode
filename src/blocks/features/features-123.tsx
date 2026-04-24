import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe];

export default function Features123(props: BlockProps) {
  const {
    theme,
    heading = "Flexible Pricing",
    subheading = "Features that scale with your budget",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Speed Boost", description: "Optimize load times across all pages.", value: "5", label: "25" },
      { title: "Security Shield", description: "Enterprise-grade protection for your site.", value: "10", label: "50" },
      { title: "Analytics Suite", description: "Deep insights into visitor behavior.", value: "8", label: "40" },
      { title: "Global Reach", description: "Multi-language and multi-region support.", value: "15", label: "60" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const min = Number(item.value) || 0;
            const max = Number(item.label) || 100;
            const pct = (min / max) * 100;
            return (
              <div key={i} className="rounded-xl border p-5 flex flex-col sm:flex-row sm:items-center gap-4" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <Icon size={24} className="flex-shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="opacity-60 text-sm mb-2">{item.description}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold" style={{ color: theme?.primary || "#6366f1" }}>${min}</span>
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: theme?.accent || "#e5e7eb" }}>
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: theme?.primary || "#6366f1" }} />
                    </div>
                    <span className="text-xs font-bold opacity-50">${max}/mo</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
