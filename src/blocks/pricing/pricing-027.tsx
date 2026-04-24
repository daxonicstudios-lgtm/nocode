import type { BlockProps } from "@/blocks/types";
import { Check, Star } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Monthly", value: "$19", label: "Billed monthly", items: "All core features,5 team members,20GB storage,Email support" },
  { title: "Annual", value: "$15", label: "Billed as $180/year", items: "All core features,5 team members,20GB storage,Priority support,Save 21%" },
];

export default function Pricing027(props: BlockProps) {
  const { theme, heading = "One plan, two ways to pay", subheading = "Save more with annual billing", buttonText = "Subscribe Now", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60 mb-10">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 2).map((tier, i) => {
            const features = typeof tier.items === "string" ? tier.items.split(",") : (tier.items as string[]);
            const isAnnual = i === 1;
            return (
              <div key={i} className={`rounded-2xl p-8 text-left relative ${isAnnual ? "shadow-xl" : "shadow-md"}`} style={{ backgroundColor: isAnnual ? theme?.primary ?? "#0f172a" : theme?.accent ?? "#f8fafc", color: isAnnual ? "#fff" : undefined }}>
                {isAnnual && <Star className="absolute top-4 right-4 w-5 h-5 text-yellow-400 fill-yellow-400" />}
                <h3 className="font-bold text-lg">{tier.title}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{tier.value}</span>
                  <span className="text-sm opacity-60">/mo</span>
                </div>
                <p className="text-xs opacity-50 mt-1">{tier.label}</p>
                <ul className="mt-6 space-y-2.5">
                  {features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 shrink-0" /> {f.trim()}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-6 block text-center py-2.5 rounded-xl font-semibold text-sm" style={{ backgroundColor: isAnnual ? "#fff" : theme?.primary ?? "#0f172a", color: isAnnual ? theme?.primary ?? "#0f172a" : "#fff" }}>
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
