import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, Eye } from "lucide-react";

const icons = [Zap, Shield, Eye];

export default function Features163(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise Grade",
    subheading = "Security and performance at scale",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightning Performance", description: "Edge-optimized delivery with sub-50ms response times worldwide." },
      { title: "Advanced Security", description: "DDoS protection, WAF, and SOC 2 compliance built in." },
      { title: "Full Observability", description: "Logs, metrics, and traces in a unified dashboard." },
    ],
  } = props;

  const bg = theme?.background || "#0f172a";
  const fg = theme?.foreground || "#f8fafc";

  return (
    <section style={{ backgroundColor: bg, color: fg }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-8" style={{ backgroundColor: `${fg}08` }}>
                <Icon size={28} className="mb-5" style={{ color: theme?.accent || "#f59e0b" }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg font-bold" style={{ backgroundColor: theme?.accent || "#f59e0b", color: bg }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
