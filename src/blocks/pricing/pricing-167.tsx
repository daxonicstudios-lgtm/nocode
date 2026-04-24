import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const allFeatures = ["Custom domain", "SSL", "Analytics", "A/B testing", "CDN", "API access", "SSO", "Support SLA"];

const defaultItems = [
  { title: "Free", description: "$0", label: "per month", value: "Custom domain,SSL" },
  { title: "Pro", description: "$24/mo", label: "per month", value: "Custom domain,SSL,Analytics,A/B testing,CDN" },
  { title: "Scale", description: "$64/mo", label: "per month", value: "Custom domain,SSL,Analytics,A/B testing,CDN,API access,SSO,Support SLA" },
];

export default function Pricing167(props: BlockProps) {
  const { theme, heading = "Compare Plans", subheading = "See exactly what each plan includes", buttonText = "Choose", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const included = (item.value || "").split(",").map(s => s.trim());
          return (
            <div key={i} className="rounded-xl border p-6 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-3xl font-black my-2" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-4">{item.label}</p>
              <div className="grid grid-cols-2 gap-2 flex-1 mb-6">
                {allFeatures.map((f, j) => {
                  const has = included.includes(f);
                  return (
                    <div key={j} className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs" style={{ backgroundColor: has ? (theme?.accent || "#f0fdf4") : "transparent" }}>
                      {has ? <Check className="w-3.5 h-3.5 shrink-0" style={{ color: theme?.primary || "#22c55e" }} /> : <X className="w-3.5 h-3.5 shrink-0 opacity-25" />}
                      <span className={has ? "font-medium" : "opacity-40"}>{f}</span>
                    </div>
                  );
                })}
              </div>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
