import type { BlockProps } from "@/blocks/types";
import { Check, Sparkles } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Unlimited projects" }, { title: "100GB storage" }, { title: "Priority support" },
  { title: "Custom domain" }, { title: "API access" }, { title: "Team collaboration" },
];

export default function Pricing136(props: BlockProps) {
  const { theme, heading = "One plan. Everything included.", subheading = "No tiers, no upsells. Just everything you need.", buttonText = "Start Free Trial", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-10 rounded-3xl p-10 shadow-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-6xl font-black" style={{ color: theme?.primary }}>$29</span>
            <span className="text-lg opacity-50">/mo</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-left max-w-sm mx-auto">
            {items.slice(0, 6).map((f, j) => (
              <div key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary }} /> {f.title}</div>
            ))}
          </div>
          <a href="#" className="mt-8 inline-block px-10 py-3.5 rounded-full font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
