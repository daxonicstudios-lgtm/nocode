import type { BlockProps } from "@/blocks/types";
import { Check, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Basic", value: "$12", description: "Best for individuals", items: "3 projects,5GB storage,Community support" },
  { title: "Team", value: "$36", description: "Best for small teams", items: "20 projects,50GB storage,Priority support,Collaboration tools" },
  { title: "Business", value: "$72", description: "Best for companies", items: "Unlimited projects,500GB storage,24/7 support,Advanced security,Custom branding" },
];

export default function Pricing276(props: BlockProps) {
  const { theme, heading = "Membership Tiers", subheading = "Scale at your own pace", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-4">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            return (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-6 rounded-xl border p-6" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="sm:w-40 shrink-0">
                  <h3 className="font-bold text-lg">{tier.title}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-extrabold" style={{ color: theme?.primary }}>{tier.value}</span>
                    <span className="text-xs opacity-50">/mo</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm opacity-60 mb-2">{tier.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {features.map((f: string, j: number) => (
                      <span key={j} className="flex items-center gap-1 text-sm">
                        <Check className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#22c55e" }} /> {f.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <a href="#" className="inline-flex items-center gap-1 font-semibold text-sm shrink-0" style={{ color: theme?.primary ?? "#6366f1" }}>
                  Select <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
