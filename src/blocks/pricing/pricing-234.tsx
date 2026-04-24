import type { BlockProps } from "@/blocks/types";
import { Check,Layers } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Personal", value: "$7", description: "For individuals", items: "1 project,Basic support,1GB storage" },
  { title: "Business", value: "$24", description: "For small teams", items: "10 projects,Priority support,50GB storage,Custom domain,Integrations" },
  { title: "Agency", value: "$69", description: "For organizations", items: "Unlimited projects,24/7 support,Unlimited storage,Custom domain,API access,SSO,Dedicated manager" },
];

export default function Pricing234(props: BlockProps) {
  const { theme, heading = "Budget-Friendly Plans", subheading = "Pay monthly or save with annual.", buttonText = "Get Started", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            const featured = i === 0;
            return (
              <div key={i} className={`rounded-2xl p-7 flex flex-col ${featured ? "shadow-xl ring-2" : "border"}`} style={{ borderColor: theme?.secondary ?? "#e5e7eb", ...(featured ? { boxShadow: `0 0 0 2px ${theme?.primary ?? "#6366f1"}` } : {}) }}>
                {featured && <span className="text-xs font-bold uppercase px-3 py-1 rounded-full text-white self-start mb-4" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>Recommended</span>}
                <h3 className="text-lg font-bold">{tier.title}</h3>
                <p className="text-sm opacity-50 mt-1">{tier.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold" style={{ color: featured ? theme?.primary : undefined }}>{tier.value}</span>
                  <span className="text-sm opacity-50">/mo</span>
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#22c55e" }} /> {f.trim()}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-6 block text-center py-2.5 rounded-2xl font-semibold text-sm" style={{ backgroundColor: featured ? theme?.primary ?? "#6366f1" : "transparent", color: featured ? "#fff" : theme?.primary ?? "#6366f1", border: featured ? "none" : `1px solid ${theme?.primary ?? "#6366f1"}` }}>
                  {buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
