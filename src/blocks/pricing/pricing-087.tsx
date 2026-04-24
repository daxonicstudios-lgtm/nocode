import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Starter", value: "$15", items: "5 projects,10GB storage,Email support,Basic analytics" },
  { title: "Professional", value: "$45", items: "Unlimited projects,100GB storage,Priority support,Advanced analytics,Custom domain,Integrations" },
  { title: "Enterprise", value: "$99", items: "Everything unlimited,Dedicated support,SLA guarantee,Custom development,Onboarding assistance,API access" },
];

export default function Pricing087(props: BlockProps) {
  const { theme, heading = "Pricing Made Simple", subheading = "Powerful features at every level", buttonText = "Choose Plan", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            const featured = i === 1;
            return (
              <div key={i} className={`rounded-2xl p-8 flex flex-col ${featured ? "bg-white text-gray-900" : ""}`} style={featured ? {} : { backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 className="font-bold text-lg">{tier.title}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-black">{tier.value}</span>
                  <span className="text-sm opacity-50">/mo</span>
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 shrink-0 ${featured ? "text-indigo-600" : "text-indigo-400"}`} /> {f.trim()}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-8 block text-center py-3 rounded-xl font-semibold text-sm" style={{ backgroundColor: featured ? theme?.primary ?? "#4f46e5" : "rgba(255,255,255,0.1)", color: featured ? "#fff" : "#fff" }}>
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
