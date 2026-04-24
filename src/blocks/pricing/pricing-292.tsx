import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Basic", value: "$29", description: "Getting started", items: "Core features,Standard support,Basic reporting" },
  { title: "Professional", value: "$59", description: "Most popular", items: "All Basic features,Priority support,Advanced reporting,Custom branding,Integrations" },
  { title: "Premium", value: "$99", description: "Full access", items: "All Pro features,Dedicated support,Custom solutions,API access,White-label,SLA guarantee" },
];

export default function Pricing292(props: BlockProps) {
  const { theme, heading = "Church Pricing", subheading = "Professional plans tailored for church", buttonText = "Get Started", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            const featured = i === 1;
            return (
              <div key={i} className={`rounded-2xl p-8 flex flex-col ${featured ? "shadow-lg border-2" : "border"}`} style={{ borderColor: featured ? theme?.primary ?? "#6366f1" : theme?.secondary ?? "#e5e7eb" }}>
                {featured && <span className="text-xs font-bold uppercase px-3 py-1 rounded-full text-white self-start mb-3" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>Popular</span>}
                <h3 className="text-lg font-bold">{tier.title}</h3>
                <p className="text-sm opacity-50 mt-1">{tier.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold" style={{ color: theme?.primary }}>{tier.value}</span>
                  <span className="text-sm opacity-50">/mo</span>
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary }} /> {f.trim()}</li>
                  ))}
                </ul>
                <a href="#" className="mt-6 block text-center py-3 rounded-xl font-bold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
