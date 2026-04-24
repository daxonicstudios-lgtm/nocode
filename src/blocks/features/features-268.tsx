import type { BlockProps } from "@/blocks/types";
import { Package, Box, ScanLine, ClipboardList } from "lucide-react";

const icons = [Package, Box, ScanLine, ClipboardList];

export default function Features268(props: BlockProps) {
  const {
    theme,
    heading = "Inventory Under Control",
    subheading = "Real-time stock management across all your sales channels",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Multi-Warehouse", description: "Track stock levels across multiple warehouses with automatic reorder points." },
      { title: "Batch Tracking", description: "Full lot and batch traceability from supplier to customer doorstep." },
      { title: "Barcode Scanning", description: "Scan to receive, pick, pack, and ship with mobile barcode support." },
      { title: "Stock Forecasting", description: "AI predicts demand so you order the right quantities at the right time." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center border-2 border-dashed" style={{ borderColor: theme?.primary || "#6366f1", color: theme?.primary || "#6366f1" }}>
                  <Icon size={26} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
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
