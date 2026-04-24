import type { BlockProps } from "@/blocks/types";
import { Check, Headphones, Lock, Rocket } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$19/mo", label: "per seat", value: "Core Platform,5GB Storage,Community Support,2 Integrations" },
  { title: "Professional", description: "$49/mo", label: "per seat", value: "Everything in Starter,25GB Storage,Priority Support,Unlimited Integrations,Advanced Reports,Custom Roles" },
  { title: "Enterprise", description: "Custom", label: "minimum 50 seats", value: "Everything in Professional,Unlimited Storage,24/7 Dedicated Support,SAML/SCIM SSO,Data Encryption,Custom Compliance,Uptime SLA,Migration Assistance" },
];

export default function Pricing060(props: BlockProps) {
  const {
    theme,
    heading = "Pricing for Every Stage",
    subheading = "Scale confidently with enterprise-grade security at the top tier",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const tierIcons = [Rocket, Rocket, Lock];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 rounded-2xl overflow-hidden border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isCustom = !item?.description?.startsWith("$");
          const Icon = tierIcons[i];
          return (
            <div key={i} className="p-8 flex flex-col border-b md:border-b-0 md:border-r last:border-0" style={{ borderColor: theme?.accent || "#e5e7eb", backgroundColor: isCustom ? (theme?.primary || "#0f172a") : "transparent", color: isCustom ? "#fff" : undefined }}>
              <Icon size={24} className="mb-3" style={{ color: isCustom ? "#fff" : theme?.primary || "#0f172a" }} />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-4xl font-black mt-2 mb-1">{item?.description}</p>
              <p className="text-sm opacity-50 mb-6">{item.label}</p>
              <ul className="flex-1 space-y-2 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check size={14} style={{ color: isCustom ? "#86efac" : theme?.primary || "#0f172a" }} />{f.trim()}</li>
                ))}
              </ul>
              {isCustom ? (
                <a href={buttonUrl} className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                  <Headphones size={16} /> Talk to Sales
                </a>
              ) : (
                <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: theme?.primary || "#0f172a" }}>{buttonText}</a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
