import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Feature", value: "free,pro,business" },
  { title: "Projects", value: "3,Unlimited,Unlimited" },
  { title: "Storage", value: "1GB,50GB,Unlimited" },
  { title: "Custom Domain", value: "no,yes,yes" },
  { title: "Analytics", value: "Basic,Advanced,Advanced" },
  { title: "Priority Support", value: "no,yes,yes" },
  { title: "API Access", value: "no,yes,yes" },
  { title: "SSO/SAML", value: "no,no,yes" },
  { title: "SLA", value: "no,no,yes" },
];

export default function Pricing101(props: BlockProps) {
  const { theme, heading = "Compare all features", subheading = "Find the plan that fits", items = DEFAULT_ITEMS } = props;

  const plans = ["Free", "Pro", "Business"];
  const prices = ["$0", "$29", "$79"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <div className="grid grid-cols-4 gap-0 p-4 border-b" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.accent ?? "#f8fafc" }}>
            <div />
            {plans.map((p, i) => (
              <div key={i} className="text-center">
                <div className="font-bold">{p}</div>
                <div className="text-2xl font-black mt-1" style={{ color: theme?.primary }}>{prices[i]}</div>
                <div className="text-xs opacity-40">/month</div>
              </div>
            ))}
          </div>
          {items.slice(1).map((row, i) => {
            const vals = (row.value ?? "").split(",");
            return (
              <div key={i} className="grid grid-cols-4 gap-0 px-4 py-3 border-b last:border-0 text-sm" style={{ borderColor: theme?.secondary ?? "#f3f4f6" }}>
                <div className="font-medium">{row.title}</div>
                {vals.map((v, j) => (
                  <div key={j} className="text-center">
                    {v.trim() === "yes" ? <Check className="w-4 h-4 mx-auto text-green-500" /> : v.trim() === "no" ? <X className="w-4 h-4 mx-auto opacity-20" /> : <span>{v.trim()}</span>}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
