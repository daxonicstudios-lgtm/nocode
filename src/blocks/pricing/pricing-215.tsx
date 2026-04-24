import type { BlockProps } from "@/blocks/types";
import { Check, Minus } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$10/mo", label: "Essential tools", value: "yes:5 projects,yes:10GB,yes:Email support,no:API access,no:Analytics" },
  { title: "Plus", description: "$30/mo", label: "Power features", value: "yes:Unlimited projects,yes:100GB,yes:Priority support,yes:API access,no:Custom domain" },
  { title: "Premium", description: "$60/mo", label: "Full platform", value: "yes:Unlimited projects,yes:500GB,yes:24/7 support,yes:API access,yes:Custom domain" },
];

export default function Pricing215(props: BlockProps) {
  const { theme, heading = "Feature-by-Feature Comparison", subheading = "See exactly what you get", buttonText = "Choose", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-3">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-xl border p-5" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-36 shrink-0">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-xl font-extrabold" style={{ color: primary }}>{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 flex-1">
                  {features.map((f, j) => {
                    const [status, name] = f.includes(":") ? f.split(":") : ["yes", f];
                    const included = status.trim() === "yes";
                    return (
                      <span key={j} className={`flex items-center gap-1 text-xs ${included ? "opacity-80" : "opacity-40 line-through"}`}>
                        {included ? <Check className="w-3 h-3" style={{ color: primary }} /> : <Minus className="w-3 h-3" />}
                        {name.trim()}
                      </span>
                    );
                  })}
                </div>
                <a href={buttonUrl} className="shrink-0 px-5 py-2 rounded-lg font-medium text-sm text-white" style={{ backgroundColor: primary }}>{buttonText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
