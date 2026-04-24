import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Monthly", value: "$29", description: "Billed monthly", items: "Full platform access,Unlimited projects,Priority support,All integrations,API access" },
];

export default function Pricing225(props: BlockProps) {
  const { theme, heading = "Our Plans", subheading = "One straightforward plan with everything you need.", buttonText = "Start Now", items = DEFAULT_ITEMS } = props;

  const plan = items[0];
  const features = typeof plan?.items === "string" ? plan.items.split(",") : (plan?.items as string[] ?? []);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-24">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-10 rounded-2xl border p-10" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <h3 className="text-xl font-bold">{plan?.title}</h3>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-5xl font-black" style={{ color: theme?.primary }}>{plan?.value}</span>
            <span className="text-sm opacity-50">/mo</span>
          </div>
          <p className="text-xs opacity-40 mt-1">{plan?.description}</p>
          <ul className="mt-8 space-y-3 text-left">
            {features.map((f: string, j: number) => (
              <li key={j} className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#22c55e" }} /> {f.trim()}
              </li>
            ))}
          </ul>
          <a href="#" className="mt-8 block py-3 rounded-xl font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
