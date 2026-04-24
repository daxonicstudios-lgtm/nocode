import type { BlockProps } from "@/blocks/types";
import { Check, ArrowRight } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$9/mo", label: "For individuals", value: "5 projects,10GB storage,Email support" },
  { title: "Professional", description: "$29/mo", label: "For growing teams", value: "Unlimited projects,100GB,Priority support,Custom domain" },
  { title: "Enterprise", description: "$79/mo", label: "For large organizations", value: "Unlimited everything,500GB,Dedicated support,SLA,SSO" },
];

export default function Pricing211(props: BlockProps) {
  const { theme, heading = "Straightforward Pricing", subheading = "No surprises, no hidden fees", buttonText = "Select", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#2563eb";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 rounded-xl border p-6" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="md:w-48 shrink-0">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm opacity-50">{item.label}</p>
              </div>
              <div className="md:w-28 shrink-0">
                <p className="text-2xl font-extrabold" style={{ color: primary }}>{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-3 flex-1">
                {features.map((f, j) => (
                  <span key={j} className="flex items-center gap-1 text-sm opacity-70"><Check className="w-3 h-3" style={{ color: primary }} />{f.trim()}</span>
                ))}
              </div>
              <a href={buttonUrl} className="shrink-0 flex items-center gap-1 px-5 py-2 rounded-lg font-medium text-white text-sm" style={{ backgroundColor: primary }}>{buttonText} <ArrowRight className="w-3 h-3" /></a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
