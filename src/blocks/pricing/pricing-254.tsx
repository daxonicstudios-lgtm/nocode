import type { BlockProps } from "@/blocks/types";
import { Check, Zap } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "forever", value: "1 site,500MB storage,Community forum" },
  { title: "Plus", description: "$19", label: "per month", value: "5 sites,20GB storage,Email support,Remove branding,Custom domain" },
  { title: "Premium", description: "$49", label: "per month", value: "50 sites,200GB storage,Live chat,White-label,API access,Priority queue" },
];

export default function Pricing254(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Perfect Plan",
    subheading = "Upgrade or downgrade at any time",
    buttonText = "Choose Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isPopular = i === 1;
          return (
            <div key={i} className="relative rounded-xl border-2 p-8 flex flex-col" style={{ borderColor: isPopular ? theme?.primary || "#f59e0b" : "transparent", boxShadow: isPopular ? "0 8px 30px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)" }}>
              {isPopular && (
                <div className="absolute -top-px left-0 right-0 h-1 rounded-t-xl" style={{ backgroundColor: theme?.primary || "#f59e0b" }} />
              )}
              {isPopular && (
                <span className="inline-flex items-center gap-1 self-start mb-4 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: theme?.primary || "#f59e0b" }}>
                  <Zap className="w-3 h-3" /> MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold" style={{ color: theme?.primary || "#f59e0b" }}>{item.description}</span>
                <span className="text-sm opacity-50">/{item.label}</span>
              </div>
              <div className="h-px my-6 opacity-20" style={{ backgroundColor: theme?.foreground || "#000" }} />
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#f59e0b" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: theme?.primary || "#f59e0b" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
