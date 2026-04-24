import type { BlockProps } from "@/blocks/types";
import { Check, Shield, MessageSquare } from "lucide-react";

const defaultItems = [
  { title: "Professional", description: "$59/mo", label: "per user / month", value: "Project Management,Time Tracking,Reporting,Email Support,5 Integrations" },
  { title: "Business", description: "$119/mo", label: "per user / month", value: "Everything in Pro,Resource Planning,Custom Fields,Phone Support,Unlimited Integrations,Admin Console" },
  { title: "Enterprise", description: "Custom Pricing", label: "volume discounts available", value: "Everything in Business,Advanced Security,HIPAA Compliance,Dedicated Infrastructure,Custom Onboarding,Executive Reviews,99.99% SLA" },
];

export default function Pricing058(props: BlockProps) {
  const {
    theme,
    heading = "Built for Teams of Every Size",
    subheading = "Enterprise security and compliance included at the top tier",
    buttonText = "Try Free",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const features = (item.value || "").split(",").filter(Boolean);
            const isCustom = !item?.description?.startsWith("$");
            return (
              <div key={i} className={`rounded-2xl p-8 flex flex-col ${isCustom ? "ring-2" : "border"}`} style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div className="flex items-center gap-2 mb-4">
                  {isCustom && <Shield size={18} style={{ color: theme?.primary || "#2563eb" }} />}
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-3xl font-black mb-1" style={{ color: theme?.primary || "#2563eb" }}>{item?.description}</p>
                <p className="text-sm opacity-50 mb-6">{item.label}</p>
                <ul className="flex-1 space-y-3 mb-8">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check size={15} className="text-green-500 flex-shrink-0" />{f.trim()}</li>
                  ))}
                </ul>
                {isCustom ? (
                  <a href={buttonUrl} className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                    <MessageSquare size={16} /> Contact Sales
                  </a>
                ) : (
                  <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold border-2 transition-colors" style={{ borderColor: theme?.primary || "#2563eb", color: theme?.primary || "#2563eb" }}>{buttonText}</a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
