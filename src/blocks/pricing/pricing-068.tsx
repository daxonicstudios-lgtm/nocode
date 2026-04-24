import type { BlockProps } from "@/blocks/types";
import { Gauge, ArrowUpRight } from "lucide-react";

const defaultItems = [
  { title: "Pay As You Go", description: "$0.05", label: "per GB transferred", value: "First 10GB Free,No Monthly Minimum,Standard Support,99.9% Uptime" },
  { title: "Reserved", description: "$49/mo", label: "includes 1TB", value: "1TB Included,Overage at $0.03/GB,Priority Support,99.95% Uptime,CDN Included" },
  { title: "Committed", description: "$199/mo", label: "includes 10TB", value: "10TB Included,Overage at $0.01/GB,Dedicated Support,99.99% Uptime,Global CDN,Custom Rules" },
];

export default function Pricing068(props: BlockProps) {
  const {
    theme,
    heading = "Bandwidth Pricing",
    subheading = "Only pay for the data you actually transfer",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <Gauge size={36} className="mx-auto mb-4" style={{ color: theme?.primary || "#0891b2" }} />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl p-7 flex flex-col" style={{ backgroundColor: theme?.accent || "#f0fdfa", border: i === 1 ? `2px solid ${theme?.primary || "#0891b2"}` : "none" }}>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <div className="mb-1">
                <span className="text-4xl font-black" style={{ color: theme?.primary || "#0891b2" }}>{item.description}</span>
              </div>
              <p className="text-sm opacity-60 mb-6">{item.label}</p>
              <div className="flex-1 mb-6">
                <div className="w-full h-3 rounded-full mb-4" style={{ backgroundColor: (theme?.primary || "#0891b2") + "20" }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${30 + i * 25}%`, backgroundColor: theme?.primary || "#0891b2" }} />
                </div>
                <ul className="space-y-2">
                  {features.map((f, j) => (
                    <li key={j} className="text-sm flex items-center gap-2">
                      <ArrowUpRight size={13} style={{ color: theme?.primary || "#0891b2" }} />{f.trim()}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary || "#0891b2" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
