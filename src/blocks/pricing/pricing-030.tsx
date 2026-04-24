import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Feature", value: "free,pro,enterprise" },
  { title: "Users", value: "Up to 5,Up to 50,Unlimited" },
  { title: "Storage", value: "1GB,50GB,Unlimited" },
  { title: "Custom Domain", value: "no,yes,yes" },
  { title: "Analytics", value: "Basic,Advanced,Advanced" },
  { title: "Priority Support", value: "no,no,yes" },
  { title: "SSO", value: "no,no,yes" },
  { title: "API Access", value: "no,yes,yes" },
];

export default function Pricing030(props: BlockProps) {
  const { theme, heading = "Compare Plans", subheading = "See which plan is right for you", items = DEFAULT_ITEMS } = props;

  const plans = ["Free", "Pro", "Enterprise"];
  const prices = ["$0", "$29", "$99"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-4 pr-4 font-normal opacity-50">Features</th>
                {plans.map((p, i) => (
                  <th key={i} className="text-center py-4 px-4">
                    <div className="font-bold text-base">{p}</div>
                    <div className="text-2xl font-extrabold mt-1" style={{ color: theme?.primary }}>{prices[i]}</div>
                    <div className="text-xs opacity-50">/month</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.slice(1).map((row, i) => {
                const vals = (row.value ?? "").split(",");
                return (
                  <tr key={i} className="border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                    <td className="py-3 pr-4 font-medium">{row.title}</td>
                    {vals.map((v, j) => (
                      <td key={j} className="text-center py-3 px-4">
                        {v.trim() === "yes" ? <Check className="w-4 h-4 mx-auto text-green-500" /> : v.trim() === "no" ? <X className="w-4 h-4 mx-auto opacity-30" /> : v.trim()}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
