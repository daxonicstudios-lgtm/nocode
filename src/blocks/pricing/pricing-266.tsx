import type { BlockProps } from "@/blocks/types";
import { Check, Shield, Lock, CreditCard } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$10/mo", label: "per month", value: "5 projects,5GB storage,Email support" },
  { title: "Pro", description: "$30/mo", label: "per month", value: "25 projects,50GB storage,Priority support,Custom domain,Analytics" },
  { title: "Enterprise", description: "$85/mo", label: "per month", value: "Unlimited projects,500GB storage,24/7 support,All features,SLA" },
];

export default function Pricing266(props: BlockProps) {
  const {
    theme,
    heading = "Secure & Transparent Pricing",
    subheading = "Your data is protected with enterprise-grade security",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60 mb-6">{subheading}</p>
        <div className="flex items-center justify-center gap-6 text-xs opacity-50">
          <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> SSL Encrypted</span>
          <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> GDPR Compliant</span>
          <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> PCI DSS Level 1</span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-xl border p-8 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-3xl font-extrabold mb-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#2563eb" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
              <p className="text-center text-xs opacity-40 mt-3 flex items-center justify-center gap-1"><Lock className="w-3 h-3" /> Secure checkout</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
