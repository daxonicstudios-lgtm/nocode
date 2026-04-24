import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Starter", value: "$9", items: "3 projects,Basic analytics,Email support" },
  { title: "Pro", value: "$29", items: "Unlimited projects,Full analytics,Priority support,API access,Team features" },
  { title: "Max", value: "$69", items: "Everything in Pro,Custom integrations,SLA,Dedicated manager,Advanced security,Audit logs" },
];

export default function Pricing145(props: BlockProps) {
  const { theme, heading = "Our Plans", subheading = "Beautiful plans for beautiful projects", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-4 py-20" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"} 0%, ${theme?.accent ?? "#a855f7"} 100%)`, color: "#fff" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
          <p className="mt-4 opacity-70">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            const featured = i === 1;
            return (
              <div key={i} className={`rounded-2xl p-8 flex flex-col ${featured ? "bg-white text-gray-900 shadow-2xl scale-105" : ""}`} style={featured ? {} : { backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                <h3 className="font-bold text-lg">{tier.title}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${featured ? "" : ""}`} style={featured ? { color: theme?.primary ?? "#6366f1" } : {}}>{tier.value}</span>
                  <span className="text-sm opacity-50">/mo</span>
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 shrink-0 ${featured ? "text-indigo-500" : "text-white/70"}`} /> {f.trim()}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-8 block text-center py-3 rounded-xl font-bold text-sm" style={{ backgroundColor: featured ? theme?.primary ?? "#6366f1" : "rgba(255,255,255,0.2)", color: "#fff" }}>
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
