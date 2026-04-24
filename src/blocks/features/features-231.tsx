import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3 } from "lucide-react";

const icons = [Zap, Shield, BarChart3];

export default function Features231(props: BlockProps) {
  const {
    theme,
    heading = "Hover to Discover",
    subheading = "Interactive cards that reveal more as you explore",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Processing", description: "Handle millions of requests per second with adaptive load balancing." },
      { title: "Fortified Security", description: "Multi-layer protection including WAF, DDoS mitigation, and encryption." },
      { title: "Smart Reporting", description: "Custom dashboards that surface the metrics that matter most to your team." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        .feat231-card { position: relative; overflow: hidden; }
        .feat231-desc {
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        .feat231-card:hover .feat231-desc {
          transform: translateY(0);
        }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="feat231-card rounded-2xl border p-8 min-h-[220px] flex flex-col items-center justify-center" style={{ borderColor: `${primary}20` }}>
                <Icon size={32} className="mb-4" style={{ color: primary }} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className="feat231-desc absolute bottom-0 left-0 right-0 p-6 rounded-b-2xl" style={{ backgroundColor: primary }}>
                  <p className="text-sm text-white leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
