import type { BlockProps } from "@/blocks/types";
import { Database } from "lucide-react";

export default function Pricing116(props: BlockProps) {
  const {
    theme,
    heading = "Usage-Based Pricing",
    subheading = "Pay for what you use",
    bodyText,
    buttonText = "Start Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Free", value: "$0", label: "10", description: "10 GB included" },
      { title: "Growth", value: "$25", label: "55", description: "100 GB included" },
      { title: "Scale", value: "$75", label: "80", description: "500 GB included" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Database className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary }} />
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
          <p className="opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const pct = parseInt(item.label || "0", 10);
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.accent }}>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 mb-4">{item.description}</p>
                <div className="w-full h-3 rounded-full overflow-hidden mb-4" style={{ backgroundColor: theme?.accent }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: theme?.primary }} />
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold" style={{ color: theme?.primary }}>{item.value}<span className="text-sm font-normal opacity-50">/mo</span></span>
                  <a href={buttonUrl} className="text-sm font-medium rounded-lg px-4 py-2 text-white" style={{ backgroundColor: theme?.primary }}>{buttonText}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
