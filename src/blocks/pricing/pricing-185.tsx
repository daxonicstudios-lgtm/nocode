import type { BlockProps } from "@/blocks/types";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const DEFAULT_ITEMS = [
  { title: "Pro", value: "$29", items: "Unlimited projects,Priority support,50GB storage,Custom domain" },
  { title: "Business", value: "$69", items: "Everything in Pro,SSO,Audit logs,SLA,API access,Dedicated manager" },
];

const faqs = [
  { q: "Can I switch plans later?", a: "Yes, upgrade or downgrade at any time. Changes take effect immediately." },
  { q: "Is there a free trial?", a: "Every plan comes with a 14-day free trial. No credit card required." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for annual plans." },
];

export default function Pricing185(props: BlockProps) {
  const { theme, heading = "Simple, transparent pricing", subheading = "No hidden fees. Cancel anytime.", items = DEFAULT_ITEMS } = props;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {items.slice(0, 2).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            return (
              <div key={i} className="rounded-2xl border p-8 flex flex-col" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <h3 className="text-xl font-bold">{tier.title}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-black" style={{ color: theme?.primary }}>{tier.value}</span>
                  <span className="text-sm opacity-50">/mo</span>
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary }} /> {f.trim()}</li>
                  ))}
                </ul>
                <a href="#" className="mt-6 block text-center py-3 rounded-xl font-bold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>Get Started</a>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6 text-center">Frequently asked questions</h3>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left font-medium text-sm">
                  {faq.q} <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-4 pb-4 text-sm opacity-60">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
