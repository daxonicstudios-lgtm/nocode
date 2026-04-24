import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Starter", value: "$0", description: "For side projects.", items: ["1 project", "Community support", "500MB storage"] },
  { title: "Pro", value: "$19", description: "For growing teams.", items: ["Unlimited projects", "Priority support", "100GB storage", "Custom domains"] },
  { title: "Business", value: "$49", description: "For serious builders.", items: ["Everything in Pro", "SSO & audit logs", "Dedicated support", "99.9% SLA"] },
];

export default function Pricing001(props: BlockProps) {
  const { theme, heading = "Simple, honest pricing", subheading = "No hidden fees. Cancel any time.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-base opacity-70">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const featured = i === 1;
            return (
              <div key={i} className={`p-8 rounded-2xl border ${featured ? "shadow-xl scale-100 md:scale-105" : ""}`} style={{ borderColor: featured ? theme?.primary : theme?.secondary ?? "#e5e7eb", backgroundColor: featured ? theme?.primary : "transparent", color: featured ? "#fff" : undefined }}>
                <h3 className="text-sm font-medium uppercase tracking-wider opacity-70">{tier.title}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">{tier.value}</span>
                  <span className="text-sm opacity-70">/ month</span>
                </div>
                <p className="mt-2 text-sm opacity-70">{tier.description}</p>
                <ul className="mt-6 space-y-3">
                  {(tier.items as string[]).map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-8 block text-center rounded-full px-5 py-2.5 text-sm font-medium" style={{ backgroundColor: featured ? "#fff" : theme?.primary, color: featured ? theme?.primary : "#fff" }}>
                  Get {tier.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
