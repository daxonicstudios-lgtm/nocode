import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";
import { useState } from "react";

const DEFAULT_ITEMS = [
  { title: "Basic", value: "$12", label: "$9", description: "For individuals", items: "5 projects,5GB storage,Email support" },
  { title: "Pro", value: "$29", label: "$23", description: "For professionals", items: "Unlimited projects,50GB storage,Priority support,Custom domain" },
  { title: "Team", value: "$59", label: "$47", description: "For teams", items: "Everything in Pro,Team management,SSO,Audit logs,Dedicated support" },
];

export default function Pricing084(props: BlockProps) {
  const { theme, heading = "Flexible pricing", subheading = "Save 20% with annual billing", items = DEFAULT_ITEMS } = props;
  const [annual, setAnnual] = useState(false);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full p-1" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
            <button onClick={() => setAnnual(false)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-white shadow text-gray-900" : "opacity-60"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${annual ? "bg-white shadow text-gray-900" : "opacity-60"}`}>Annual <span className="text-xs font-bold" style={{ color: theme?.primary }}>-20%</span></button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            const price = annual ? tier.label ?? tier.value : tier.value;
            const featured = i === 1;
            return (
              <div key={i} className={`rounded-2xl p-8 flex flex-col ${featured ? "shadow-lg border-2" : "border"}`} style={{ borderColor: featured ? theme?.primary ?? "#6366f1" : theme?.secondary ?? "#e5e7eb" }}>
                <h3 className="text-lg font-bold">{tier.title}</h3>
                <p className="text-sm opacity-50 mt-1">{tier.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{price}</span>
                  <span className="text-sm opacity-50">/mo</span>
                </div>
                {annual && <p className="text-xs mt-1 font-medium" style={{ color: theme?.primary }}>Save 20% vs monthly</p>}
                <ul className="mt-6 space-y-2.5 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#22c55e" }} /> {f.trim()}</li>
                  ))}
                </ul>
                <a href="#" className="mt-6 block text-center py-3 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>Get Started</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
