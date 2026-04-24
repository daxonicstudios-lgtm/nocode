import type { BlockProps } from "@/blocks/types";
import { Check, Star } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$12", label: "per month", value: "1 user,10GB,Basic analytics,Email support" },
  { title: "Growth", description: "$39", label: "per month", value: "5 users,100GB,Advanced analytics,Priority support,Integrations,API access" },
  { title: "Scale", description: "$79", label: "per month", value: "Unlimited users,500GB,Custom reports,Dedicated manager" },
];

export default function Pricing202(props: BlockProps) {
  const { theme, heading = "Plans That Grow With You", subheading = "No hidden fees, cancel anytime", buttonText = "Get Started", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {items.map((item, i) => {
          const center = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`rounded-xl p-8 flex flex-col border-2 ${center ? "md:-mt-4 md:mb-0 md:py-10 shadow-xl" : ""}`} style={{ borderColor: center ? (theme?.primary || "#6366f1") : (theme?.accent || "#e5e7eb") }}>
              <div className="flex items-center gap-2 mb-4">
                {center && <Star className="w-5 h-5" style={{ color: theme?.primary || "#6366f1" }} />}
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-5xl font-extrabold mb-1" style={{ color: theme?.primary || "#6366f1" }}>{item.description}</p>
              <p className="text-sm opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: center ? (theme?.primary || "#6366f1") : (theme?.accent || "#94a3b8") }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
