import type { BlockProps } from "@/blocks/types";
import { Check, Quote } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Starter", value: "$15", items: "3 projects,Basic support,5GB storage" },
  { title: "Pro", value: "$39", items: "Unlimited projects,Priority support,100GB storage,Custom domain,API" },
  { title: "Business", value: "$89", items: "Everything in Pro,SSO,Audit logs,SLA,Dedicated manager" },
];

export default function Pricing156(props: BlockProps) {
  const { theme, heading = "Trusted by thousands", subheading = "See why teams choose us", bodyText = "Switching to this platform cut our costs by 40% and saved us 20 hours a week.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="max-w-xl mx-auto mb-12 text-center rounded-xl p-6" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
          <Quote className="w-6 h-6 mx-auto mb-2 opacity-20" />
          <p className="italic opacity-80">{bodyText}</p>
          <p className="mt-3 text-sm font-semibold opacity-60">— Sarah K., CTO at TechStart</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            return (
              <div key={i} className="rounded-2xl border p-7 flex flex-col" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <h3 className="font-bold text-lg">{tier.title}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold" style={{ color: theme?.primary }}>{tier.value}</span>
                  <span className="text-sm opacity-50">/mo</span>
                </div>
                <ul className="mt-5 space-y-2 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary }} /> {f.trim()}</li>
                  ))}
                </ul>
                <a href="#" className="mt-5 block text-center py-2.5 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>Choose Plan</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
