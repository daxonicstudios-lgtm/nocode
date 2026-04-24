import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Layers } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Layers];

export default function Features351(props: BlockProps) {
  const {
    theme,
    heading = "Why Teams Choose Us",
    subheading = "A platform designed for simplicity and power",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightning Fast", description: "Sub-second load times keep your users engaged and happy." },
      { title: "Enterprise Security", description: "SOC 2 compliant with end-to-end encryption on all data." },
      { title: "Advanced Analytics", description: "Real-time dashboards that surface insights automatically." },
      { title: "Modular Design", description: "Plug-and-play components that scale with your needs." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#e8e8e8", color: theme?.foreground || "#333" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{
                  background: theme?.background || "#e8e8e8",
                  boxShadow: "8px 8px 16px #c5c5c5, -8px -8px 16px #ffffff",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: theme?.background || "#e8e8e8", boxShadow: "inset 4px 4px 8px #c5c5c5, inset -4px -4px 8px #ffffff" }}>
                  <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-full font-medium" style={{ background: theme?.background || "#e8e8e8", boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff", color: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
