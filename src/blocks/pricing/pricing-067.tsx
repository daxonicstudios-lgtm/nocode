import type { BlockProps } from "@/blocks/types";
import { Activity, Check } from "lucide-react";

const defaultItems = [
  { title: "1K requests", description: "$5", label: "per month", value: "1000 API Calls,1GB Bandwidth,Basic Monitoring,Email Alerts" },
  { title: "10K requests", description: "$29", label: "per month", value: "10000 API Calls,10GB Bandwidth,Advanced Monitoring,Slack Alerts,Custom Endpoints" },
  { title: "100K requests", description: "$99", label: "per month", value: "100000 API Calls,100GB Bandwidth,Real-time Monitoring,All Alerts,Custom Endpoints,Dedicated IP,SLA" },
  { title: "1M+ requests", description: "$299", label: "per month", value: "Unlimited API Calls,Unlimited Bandwidth,Enterprise Monitoring,All Alerts,Custom Endpoints,Dedicated IP,SLA,Priority Routing" },
];

export default function Pricing067(props: BlockProps) {
  const {
    theme,
    heading = "Usage-Based Pricing",
    subheading = "Pick your usage tier — upgrade or downgrade anytime",
    buttonText = "Select Tier",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-8 px-4">
          {items.map((item, i) => {
            const height = 40 + i * 30;
            return (
              <div key={i} className="flex flex-col items-center gap-2 flex-1">
                <span className="text-xs font-bold" style={{ color: theme?.primary || "#8b5cf6" }}>{item.description}</span>
                <div className="w-full max-w-[60px] rounded-t-lg" style={{ height: `${height}px`, backgroundColor: (theme?.primary || "#8b5cf6") + (i === 2 ? "ff" : "60") }} />
                <span className="text-xs font-medium text-center">{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const features = (item.value || "").split(",").filter(Boolean);
            return (
              <div key={i} className="rounded-xl border p-5 flex flex-col" style={{ borderColor: i === 2 ? theme?.primary || "#8b5cf6" : theme?.accent || "#e5e7eb" }}>
                <p className="text-2xl font-black mb-0.5" style={{ color: theme?.primary || "#8b5cf6" }}>{item.description}</p>
                <p className="text-xs opacity-50 mb-4">{item.label}</p>
                <ul className="flex-1 space-y-2 mb-4">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-1.5 text-xs"><Check size={12} className="text-green-500" />{f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-2 rounded-lg font-semibold text-xs text-white" style={{ backgroundColor: theme?.primary || "#8b5cf6" }}>{buttonText}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
