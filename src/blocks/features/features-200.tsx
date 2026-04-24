import type { BlockProps } from "@/blocks/types";
import { PackageSearch, Route, Warehouse } from "lucide-react";

const icons = [PackageSearch, Route, Warehouse];

export default function Features200(props: BlockProps) {
  const {
    theme,
    heading = "Logistics Simplified",
    subheading = "End-to-end supply chain visibility and control",
    bodyText,
    buttonText = "Request Demo",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Shipment Tracking", description: "Real-time GPS tracking for every package with automated status updates and delivery ETAs." },
      { title: "Route Optimization", description: "AI-powered routing reduces fuel costs and delivery times across your entire fleet." },
      { title: "Warehouse Management", description: "Inventory levels, bin locations, and pick-pack-ship workflows in one unified system." },
    ],
  } = props;

  const primary = theme?.primary || "#0369a1";

  return (
    <section style={{ backgroundColor: theme?.background || "#f0f9ff", color: theme?.foreground || "#0c4a6e" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-8 bg-white shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${primary}15` }}>
                    <Icon size={20} style={{ color: primary }} />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
