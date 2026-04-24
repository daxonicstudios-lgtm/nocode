import type { BlockProps } from "@/blocks/types";
import { Layers, Globe, TrendingUp } from "lucide-react";

const icons = [Layers, Globe, TrendingUp];

export default function Features232(props: BlockProps) {
  const {
    theme,
    heading = "Elegantly Engineered",
    subheading = "Hover over any card to see the border come alive",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Composable Blocks", description: "Mix and match building blocks to create exactly what you need." },
      { title: "Worldwide CDN", description: "Assets cached and served from the nearest point of presence." },
      { title: "Revenue Insights", description: "Understand your revenue drivers with cohort analysis and funnels." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        .feat232-card {
          position: relative;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        .feat232-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: transparent;
          transition: background 0.5s ease;
          z-index: -1;
          border-radius: 1rem;
        }
        .feat232-card:hover::before {
          background: linear-gradient(135deg, ${primary}, ${theme?.accent || "#f59e0b"});
        }
        .feat232-card:hover {
          border-color: transparent;
        }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="feat232-card rounded-2xl p-8 text-center" style={{ backgroundColor: theme?.background || "#ffffff", border: `2px solid ${primary}25` }}>
                <Icon size={30} className="mx-auto mb-4" style={{ color: primary }} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
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
