import type { BlockProps } from "@/blocks/types";
import { Check, Crown } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Starter", value: "$9", items: "1 user,5 projects,2GB storage,Community support" },
  { title: "Professional", value: "$29", items: "10 users,50 projects,50GB storage,Email support,Integrations" },
  { title: "Enterprise", value: "Custom", items: "Unlimited users,Unlimited projects,Unlimited storage,24/7 phone support,Custom integrations,SLA,Dedicated manager" },
];

export default function Pricing031(props: BlockProps) {
  const { theme, heading = "Transparent pricing", subheading = "No hidden fees, no surprises", buttonText = "Get Started", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
          <p className="mt-4 text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            const isEnterprise = i === 2;
            return (
              <div key={i} className="rounded-2xl p-8 flex flex-col" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-2 mb-4">
                  {isEnterprise && <Crown className="w-5 h-5 text-yellow-400" />}
                  <h3 className="font-bold text-lg">{tier.title}</h3>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{tier.value}</span>
                  {!isEnterprise && <span className="text-sm opacity-50">/mo</span>}
                </div>
                <ul className="space-y-3 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm opacity-80">
                      <Check className="w-4 h-4 shrink-0 text-emerald-400" /> {f.trim()}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-8 block text-center py-3 rounded-xl font-semibold text-sm" style={{ backgroundColor: isEnterprise ? "transparent" : "#fff", color: isEnterprise ? "#fff" : theme?.primary ?? "#0f172a", border: isEnterprise ? "1px solid rgba(255,255,255,0.3)" : "none" }}>
                  {isEnterprise ? "Contact Sales" : buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
