import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const defaultItems = [
  { title: "Developer", description: "$0", label: "Free", value: "API access,1K requests/day,Community" },
  { title: "Startup", description: "$29/mo", label: "per month", value: "10K requests/day,Priority queue,Email support" },
  { title: "Growth", description: "$79/mo", label: "per month", value: "100K requests/day,Webhooks,Chat support,Analytics" },
  { title: "Custom", description: "Contact us", label: "tailored", value: "Unlimited requests,Dedicated infra,SLA,Custom terms" },
];

export default function Pricing014(props: BlockProps) {
  const {
    theme,
    heading = "API Pricing",
    subheading = "Pay for what you use",
    buttonText = "Get API Key",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.slice(0, 4).map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="border-b-4 rounded-lg p-6 flex flex-col shadow-sm" style={{ borderBottomColor: theme?.primary || "#2563eb" }}>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-3xl font-black mb-1">{item.description}</p>
              <p className="text-xs opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-1.5 flex-1 mb-6">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-70">→ {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="flex items-center justify-center gap-1 py-2.5 rounded font-medium text-sm" style={{ color: theme?.primary || "#2563eb" }}>
                {buttonText} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
