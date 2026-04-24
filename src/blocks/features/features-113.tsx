import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

export default function Features113(props: BlockProps) {
  const {
    theme,
    heading = "Choose Your Plan",
    subheading = "Compare features across tiers",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Basic", description: "For individuals just getting started", value: "$9/mo", label: "5 pages,Basic analytics,Email support" },
      { title: "Pro", description: "For growing teams and businesses", value: "$29/mo", label: "Unlimited pages,Advanced analytics,Priority support,Custom domain" },
      { title: "Enterprise", description: "For large organizations at scale", value: "$99/mo", label: "Everything in Pro,SSO & audit logs,Dedicated manager,SLA guarantee,API access" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const isHighlighted = i === 1;
            const features = (item.label || "").split(",").filter(Boolean);
            return (
              <div key={i} className={`rounded-xl p-6 border ${isHighlighted ? "ring-2 relative" : ""}`} style={{ borderColor: isHighlighted ? (theme?.primary || "#6366f1") : (theme?.accent || "#e5e7eb") }}>
                {isHighlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>Most Popular</span>
                )}
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm mb-3">{item.description}</p>
                <p className="text-3xl font-bold mb-4" style={{ color: theme?.primary || "#6366f1" }}>{item.value}</p>
                <ul className="space-y-2">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check size={16} style={{ color: theme?.primary || "#6366f1" }} />
                      {f.trim()}
                    </li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block mt-6 text-center py-2.5 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: isHighlighted ? theme?.primary || "#6366f1" : theme?.accent || "#64748b" }}>
                  {buttonText || "Get Started"}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
