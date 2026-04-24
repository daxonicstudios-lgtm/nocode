import type { BlockProps } from "@/blocks/types";
import { Check, X, Mail } from "lucide-react";

const defaultItems = [
  { title: "Growth", description: "$39/mo", label: "billed yearly", value: "10 Team Members,20 Projects,API Access,Standard SLA,Email Support" },
  { title: "Enterprise", description: "Talk to Us", label: "annual contract", value: "Unlimited Members,Unlimited Projects,Premium API,Custom SLA,Dedicated Support,SOC 2 Compliance,Custom Contracts,Onboarding Program" },
];

export default function Pricing059(props: BlockProps) {
  const {
    theme,
    heading = "Simple Plans, Powerful Features",
    subheading = "Need something custom? Our enterprise plan adapts to your requirements",
    buttonText = "Start Trial",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60 max-w-lg mx-auto">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isCustom = !item?.description?.startsWith("$");
          return (
            <div key={i} className="rounded-xl overflow-hidden flex flex-col" style={{ border: `2px solid ${isCustom ? theme?.primary || "#059669" : theme?.accent || "#e5e7eb"}` }}>
              <div className="p-6 text-center" style={{ backgroundColor: isCustom ? theme?.primary || "#059669" : "transparent", color: isCustom ? "#fff" : undefined }}>
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-4xl font-black">{item?.description}</p>
                <p className="text-sm opacity-70 mt-1">{item.label}</p>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <ul className="flex-1 space-y-3 mb-6">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check size={15} className="text-green-500" />{f.trim()}</li>
                  ))}
                </ul>
                {isCustom ? (
                  <a href={`mailto:sales@example.com`} className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: theme?.primary || "#059669" }}>
                    <Mail size={16} /> Contact Our Team
                  </a>
                ) : (
                  <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: theme?.primary || "#059669" }}>{buttonText}</a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
