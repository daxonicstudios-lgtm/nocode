import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Standard", value: "$19", description: "For individuals", items: "5 projects,10GB storage,Email support,Basic analytics" },
  { title: "Premium", value: "$49", description: "For professionals", items: "Unlimited projects,100GB storage,Priority support,Advanced analytics,API access,Custom domain" },
];

export default function Pricing059(props: BlockProps) {
  const { theme, heading = "Choose your plan", subheading = "Simple pricing, no hidden fees", buttonText = "Select Plan", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.slice(0, 2).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            const isPremium = i === 1;
            return (
              <div key={i} className="rounded-2xl p-8 flex flex-col" style={{ backgroundColor: isPremium ? theme?.primary ?? "#4f46e5" : theme?.accent ?? "#f8fafc", color: isPremium ? "#fff" : undefined }}>
                <h3 className="text-xl font-bold">{tier.title}</h3>
                <p className={`text-sm mt-1 ${isPremium ? "opacity-70" : "opacity-60"}`}>{tier.description}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-5xl font-black">{tier.value}</span>
                  <span className="text-sm opacity-50">/mo</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" /> {f.trim()}</li>
                  ))}
                </ul>
                <a href="#" className="mt-8 block text-center py-3 rounded-xl font-bold text-sm" style={{ backgroundColor: isPremium ? "#fff" : theme?.primary ?? "#4f46e5", color: isPremium ? theme?.primary ?? "#4f46e5" : "#fff" }}>{buttonText}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
