import type { BlockProps } from "@/blocks/types";
import { Check, ShieldCheck, KeyRound, BadgeCheck } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$14/mo", label: "monthly", value: "3 users,10GB,Basic reports,Email support" },
  { title: "Professional", description: "$44/mo", label: "monthly", value: "15 users,100GB,Advanced reports,Priority support,SSO" },
  { title: "Enterprise", description: "$119/mo", label: "monthly", value: "Unlimited users,1TB,Custom reports,24/7 support,SSO,Audit logs" },
];

export default function Pricing267(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by 10,000+ Companies",
    subheading = "Bank-level security with every plan",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const badges = [
    { icon: ShieldCheck, text: "SOC 2 Certified" },
    { icon: KeyRound, text: "256-bit Encryption" },
    { icon: BadgeCheck, text: "99.9% Uptime SLA" },
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="flex justify-center gap-8 mb-14">
        {badges.map((b, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
            <b.icon className="w-4 h-4" style={{ color: theme?.primary || "#059669" }} />{b.text}
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl border p-8 flex flex-col" style={{ borderColor: i === 1 ? theme?.primary || "#059669" : theme?.accent || "#e5e7eb", borderWidth: i === 1 ? 2 : 1 }}>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-4xl font-black mb-1" style={{ color: theme?.primary || "#059669" }}>{item.description}</p>
              <p className="text-xs opacity-40 mb-6">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#059669" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: theme?.primary || "#059669" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
