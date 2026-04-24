import type { BlockProps } from "@/blocks/types";
import { Check, Sparkles } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Essential", value: "$19", description: "Everything you need to get started", items: "10 projects,5GB storage,Basic analytics,Email support,API access" },
];

export default function Pricing029(props: BlockProps) {
  const { theme, heading = "One plan. Everything included.", subheading = "No tiers, no confusion. Just one powerful plan.", buttonText = "Get Started", items = DEFAULT_ITEMS } = props;

  const tier = items[0];
  const features = typeof tier?.items === "string" ? tier.items.split(",") : (tier?.items as string[] ?? []);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-10 rounded-3xl p-10 shadow-xl" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
          <h3 className="text-2xl font-bold">{tier?.title ?? "Essential"}</h3>
          <p className="text-sm opacity-60 mt-2">{tier?.description}</p>
          <div className="mt-6 flex items-baseline justify-center gap-1">
            <span className="text-6xl font-black" style={{ color: theme?.primary }}>{tier?.value ?? "$19"}</span>
            <span className="text-lg opacity-50">/mo</span>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-sm mx-auto">
            {features.map((f: string, j: number) => (
              <div key={j} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#22c55e" }} /> {f.trim()}
              </div>
            ))}
          </div>
          <a href="#" className="mt-8 inline-block px-8 py-3 rounded-full font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
