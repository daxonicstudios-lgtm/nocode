import type { BlockProps } from "@/blocks/types";
import { CircleDollarSign, Plus } from "lucide-react";

const defaultItems = [
  { title: "Essential", description: "$19/mo", label: "per month", value: "Hosting:$6,3 Pages:$4,Basic Templates:$5,Email Support:$4" },
  { title: "Business", description: "$49/mo", label: "per month", value: "Hosting:$6,Unlimited Pages:$12,All Templates:$8,Live Chat:$7,Analytics:$6,SEO Tools:$5,Custom Code:$5" },
  { title: "Agency", description: "$99/mo", label: "per month", value: "Hosting:$6,Unlimited Pages:$12,All Templates:$8,Dedicated Support:$15,Advanced Analytics:$12,SEO Suite:$10,Custom Code:$10,White Label:$14,API:$12" },
];

export default function Pricing053(props: BlockProps) {
  const {
    theme,
    heading = "Transparent Per-Feature Pricing",
    subheading = "Each feature is priced separately — pay for exactly what you use",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: (theme?.primary || "#2563eb") + "15", color: theme?.primary || "#2563eb" }}>
          <CircleDollarSign size={16} /> Per-Feature Pricing
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-lg border-2 p-6 flex flex-col hover:shadow-xl transition-shadow" style={{ borderColor: i === 1 ? theme?.primary || "#2563eb" : theme?.accent || "#e5e7eb" }}>
              {i === 1 && <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme?.primary || "#2563eb" }}>Recommended</span>}
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-4xl font-extrabold my-3" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-sm opacity-50 mb-6">{item.label}</p>
              <div className="flex-1 space-y-1 mb-6">
                {features.map((f, j) => {
                  const [name, price] = f.split(":");
                  return (
                    <div key={j} className="flex justify-between text-sm py-1.5">
                      <span className="flex items-center gap-1"><Plus size={12} style={{ color: theme?.primary || "#2563eb" }} />{name.trim()}</span>
                      <span className="font-semibold">{price?.trim()}</span>
                    </div>
                  );
                })}
              </div>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
