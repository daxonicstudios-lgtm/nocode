import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$12/mo", label: "per month", value: "3 projects,5GB storage,Email support" },
  { title: "Professional", description: "$39/mo", label: "per month", value: "20 projects,50GB storage,Priority support,Custom domain,Analytics" },
  { title: "Enterprise", description: "$99/mo", label: "per month", value: "Unlimited projects,500GB storage,24/7 support,Custom domain,Advanced analytics,API access" },
];

export default function Pricing251(props: BlockProps) {
  const {
    theme,
    heading = "Choose Your Plan",
    subheading = "Scale as your business grows",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isRecommended = i === 1;
          return (
            <div key={i} className="relative rounded-xl border p-8 flex flex-col" style={{ borderColor: isRecommended ? theme?.primary || "#2563eb" : theme?.accent || "#e5e7eb", borderWidth: isRecommended ? 2 : 1 }}>
              {isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-3xl font-bold mb-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-sm opacity-60 mb-6">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#2563eb" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
