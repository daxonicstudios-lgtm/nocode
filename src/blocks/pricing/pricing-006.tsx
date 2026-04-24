import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$9/mo", label: "per month", value: "5 projects,10GB storage,Email support" },
  { title: "Professional", description: "$29/mo", label: "per month", value: "Unlimited projects,100GB storage,Priority support,Custom domain,Analytics" },
  { title: "Enterprise", description: "$99/mo", label: "per month", value: "Everything in Pro,Dedicated server,SLA guarantee,Phone support" },
];

export default function Pricing006(props: BlockProps) {
  const {
    theme,
    heading = "Choose Your Plan",
    subheading = "Upgrade or downgrade at any time",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item, i) => {
          const featured = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`rounded-2xl p-8 flex flex-col relative ${featured ? "shadow-2xl ring-2" : "border"}`} style={{ borderColor: theme?.accent || "#e5e7eb", }}>
              {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                  <Star className="w-3 h-3" /> Recommended
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-4xl font-black mb-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-sm opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-80">• {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
