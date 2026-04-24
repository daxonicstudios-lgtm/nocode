import type { BlockProps } from "@/blocks/types";
import { Crown } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0/mo", label: "always free", value: "2 projects,Community forum,1GB storage" },
  { title: "Standard", description: "$19/mo", label: "per month", value: "20 projects,Email support,25GB storage,Custom themes,Export data" },
  { title: "Premium", description: "$59/mo", label: "per month", value: "Unlimited projects,Phone support,Unlimited storage,White-label" },
];

export default function Pricing009(props: BlockProps) {
  const {
    theme,
    heading = "Plans for Every Stage",
    subheading = "Begin free, upgrade when you need more power",
    buttonText = "Select Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item, i) => {
          const featured = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`rounded-2xl p-8 flex flex-col border-2 transition-all ${featured ? "scale-105 shadow-lg" : ""}`} style={{ borderColor: featured ? (theme?.primary || "#f59e0b") : (theme?.accent || "#e5e7eb") }}>
              <div className="flex items-center gap-2 mb-4">
                {featured && <Crown className="w-5 h-5" style={{ color: theme?.primary || "#f59e0b" }} />}
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              {featured && <span className="inline-block text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 self-start text-white" style={{ backgroundColor: theme?.primary || "#f59e0b" }}>Best Value</span>}
              <p className="text-4xl font-black mb-1" style={{ color: theme?.primary || "#f59e0b" }}>{item.description}</p>
              <p className="text-sm opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-2 flex-1 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="text-sm">• {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-bold text-white" style={{ backgroundColor: theme?.primary || "#f59e0b" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
