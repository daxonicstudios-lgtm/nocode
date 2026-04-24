import type { BlockProps } from "@/blocks/types";
import { Quote, ArrowRight, Building, ShoppingCart, Landmark } from "lucide-react";

const icons = [Building, ShoppingCart, Landmark];

export default function Features324(props: BlockProps) {
  const {
    theme,
    heading = "Proven in the Field",
    subheading = "B2B features backed by real case studies",
    buttonText = "Read Case Study",
    buttonUrl = "#",
    items = [
      { title: "Supply Chain Optimization", description: "Reduced logistics costs by 28% for a Fortune 100 manufacturer through automated routing and real-time tracking.", label: "Manufacturing" },
      { title: "E-Commerce Integration", description: "Helped a mid-market retailer increase online revenue by 45% with unified inventory and checkout workflows.", label: "Retail" },
      { title: "Regulatory Compliance", description: "Enabled a regional bank to pass three audits in a row with zero findings using our automated compliance engine.", label: "Financial Services" },
    ],
  } = props;

  const primary = theme?.primary || "#475569";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-60 text-center mb-12">{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 sm:p-8 border" style={{ borderColor: `${primary}12` }}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} style={{ color: primary }} />
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-50">{item.label}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex gap-2 items-start mb-4">
                  <Quote size={14} className="shrink-0 mt-1 opacity-30" />
                  <p className="text-sm opacity-60 leading-relaxed italic">{item.description}</p>
                </div>
                <a href={buttonUrl} className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: primary }}>
                  {buttonText} <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
