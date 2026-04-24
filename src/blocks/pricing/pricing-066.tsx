import type { BlockProps } from "@/blocks/types";
import { BarChart3, ArrowRight } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$0.01", label: "per API call", value: "0-10K:Free,10K-100K:$0.01/call,100K-1M:$0.008/call,1M+:$0.005/call" },
  { title: "Growth", description: "$0.008", label: "per API call", value: "0-50K:Free,50K-500K:$0.008/call,500K-5M:$0.005/call,5M+:$0.003/call" },
  { title: "Scale", description: "$0.003", label: "per API call", value: "0-100K:Free,100K-1M:$0.005/call,1M-10M:$0.003/call,10M+:$0.001/call" },
];

export default function Pricing066(props: BlockProps) {
  const {
    theme,
    heading = "Pay As You Go",
    subheading = "Usage-based pricing that scales with your traffic",
    buttonText = "Start Building",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <BarChart3 size={32} className="mx-auto mb-4" style={{ color: theme?.primary || "#2563eb" }} />
        <h2 className="text-3xl md:text-5xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const tiers = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl border p-6 flex flex-col" style={{ borderColor: i === 1 ? theme?.primary || "#2563eb" : theme?.accent || "#e5e7eb", borderWidth: i === 1 ? 2 : 1 }}>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm opacity-50 mb-4">Starting at</p>
              <p className="text-3xl font-black mb-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-sm opacity-60 mb-6">{item.label}</p>
              <div className="flex-1 space-y-3 mb-6">
                {tiers.map((t, j) => {
                  const [range, price] = t.split(":");
                  const pct = ((j + 1) / tiers.length) * 100;
                  return (
                    <div key={j}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{range.trim()}</span>
                        <span className="font-semibold" style={{ color: theme?.primary || "#2563eb" }}>{price?.trim()}</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: (theme?.primary || "#2563eb") + "15" }}>
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: theme?.primary || "#2563eb" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <a href={buttonUrl} className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText} <ArrowRight size={14} /></a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
