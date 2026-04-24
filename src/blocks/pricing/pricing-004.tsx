import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Free", value: "$0", description: "For individuals getting started", items: "3 projects,Basic analytics,Community support,1GB storage" },
  { title: "Starter", value: "$12", description: "For freelancers and creators", items: "10 projects,Advanced analytics,Email support,10GB storage,Custom domain" },
  { title: "Growth", value: "$39", description: "For growing businesses", items: "Unlimited projects,Full analytics,Priority support,100GB storage,Custom domain,API access,Team collaboration" },
  { title: "Enterprise", value: "$99", description: "For large organizations", items: "Unlimited everything,Dedicated manager,Phone support,Unlimited storage,SSO & SAML,SLA guarantee,Custom integrations,Audit logs" },
];

export default function Pricing004(props: BlockProps) {
  const { theme, heading = "Plans for every stage", subheading = "Start free and scale as you grow. No credit card required.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{heading}</h2>
          <p className="mt-4 text-lg opacity-60 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.slice(0, 4).map((tier, i) => {
            const featured = i === 2;
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            return (
              <div key={i} className={`rounded-2xl p-6 flex flex-col ${featured ? "ring-2 shadow-2xl relative" : "border"}`} style={{ borderColor: theme?.secondary ?? "#e5e7eb", ...(featured ? { ringColor: theme?.primary } : {}) }}>
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>Popular</span>
                )}
                <h3 className="text-lg font-bold">{tier.title}</h3>
                <p className="text-sm opacity-60 mt-1">{tier.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{tier.value}</span>
                  <span className="text-sm opacity-50">/mo</span>
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#22c55e" }} />
                      {f.trim()}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-6 block text-center rounded-xl py-2.5 text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: featured ? theme?.primary ?? "#6366f1" : "transparent", color: featured ? "#fff" : theme?.primary ?? "#6366f1", border: featured ? "none" : `2px solid ${theme?.primary ?? "#6366f1"}` }}>
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
