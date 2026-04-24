import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Basic", value: "$9", description: "Essential features for small teams", items: "5 users,10GB storage,Email support,Basic reporting" },
  { title: "Professional", value: "$29", description: "Advanced features for growing teams", items: "25 users,100GB storage,Priority support,Advanced reporting,Integrations,Custom workflows" },
];

export default function Pricing026(props: BlockProps) {
  const { theme, heading = "Simple two-tier pricing", subheading = "Choose the plan that fits your needs", buttonText = "Get Started", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 text-base opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.slice(0, 2).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            return (
              <div key={i} className="rounded-3xl border-2 p-8 flex flex-col" style={{ borderColor: i === 1 ? theme?.primary ?? "#6366f1" : theme?.secondary ?? "#e5e7eb" }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{tier.title}</h3>
                  {i === 1 && <span className="text-xs font-bold uppercase px-2 py-0.5 rounded-md text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>Best Value</span>}
                </div>
                <p className="text-sm opacity-60 mt-2">{tier.description}</p>
                <div className="mt-6 mb-6">
                  <span className="text-5xl font-black">{tier.value}</span>
                  <span className="text-base opacity-50">/month</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#f0fdf4" }}>
                        <Check className="w-3 h-3" style={{ color: theme?.primary ?? "#22c55e" }} />
                      </div>
                      {f.trim()}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-8 block text-center py-3 rounded-2xl font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
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
