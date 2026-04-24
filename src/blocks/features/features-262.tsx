import type { BlockProps } from "@/blocks/types";
import { Star, Package, Eye, Filter } from "lucide-react";

const icons = [Star, Package, Eye, Filter];

export default function Features262(props: BlockProps) {
  const {
    theme,
    heading = "Product Experience Redefined",
    subheading = "Give customers every reason to hit 'Add to Cart'",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Rich Product Pages", description: "Zoomable images, 360° views, and video galleries for every product.", value: "4.9" },
      { title: "Smart Bundles", description: "AI-recommended product bundles increase average order value by 32%.", value: "4.8" },
      { title: "Quick Preview", description: "Modal previews let shoppers browse without leaving the collection page.", value: "4.7" },
      { title: "Advanced Filters", description: "Faceted search by size, color, price, and custom attributes.", value: "4.6" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const rating = parseFloat(item.value || "4.5");
            return (
              <div key={i} className="rounded-xl border p-6 flex items-start gap-4" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#fff7ed", color: theme?.primary || "#ea580c" }}>
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <Star size={14} fill={theme?.primary || "#f59e0b"} style={{ color: theme?.primary || "#f59e0b" }} />
                      <span style={{ color: theme?.primary || "#f59e0b" }}>{rating}</span>
                    </div>
                  </div>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#ea580c" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
