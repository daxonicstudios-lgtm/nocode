import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$12/mo", label: "billed monthly", value: "3 users,5GB,Basic support" },
  { title: "Growth", description: "$39/mo", label: "billed monthly", value: "15 users,50GB,Priority support,API access,Integrations" },
  { title: "Scale", description: "$79/mo", label: "billed monthly", value: "Unlimited users,500GB,24/7 support,Custom integrations" },
];

export default function Pricing007(props: BlockProps) {
  const {
    theme,
    heading = "Pricing That Scales With You",
    subheading = "All plans include a 14-day free trial",
    buttonText = "Start Trial",
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
            <div key={i} className={`rounded-xl p-8 flex flex-col ${featured ? "shadow-xl border-t-4" : "border"}`} style={{ borderColor: featured ? (theme?.primary || "#10b981") : (theme?.accent || "#e5e7eb") }}>
              {featured && <span className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: theme?.primary || "#10b981" }}>Most Popular</span>}
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-4xl font-extrabold mb-1">{item.description}</p>
              <p className="text-sm opacity-50 mb-8">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: theme?.primary || "#10b981" }} />
                    {f.trim()}
                  </li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold" style={{ backgroundColor: featured ? (theme?.primary || "#10b981") : "transparent", color: featured ? "#fff" : (theme?.primary || "#10b981"), border: featured ? "none" : `2px solid ${theme?.primary || "#10b981"}` }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
