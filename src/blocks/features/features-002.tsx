import type { BlockProps } from "@/blocks/types";
import { Sparkles, Globe, Lock, Cpu } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Smart automation", description: "Let AI handle the repetitive work so you can focus on growth." },
  { title: "Global edge network", description: "150+ data centers deliver your content close to every visitor." },
  { title: "Enterprise security", description: "SOC 2 Type II, GDPR, and HIPAA compliance out of the box." },
  { title: "Built for speed", description: "Real-time builds, instant rollbacks, zero-downtime deploys." },
];

const ICONS = [Sparkles, Globe, Lock, Cpu];

export default function Features002(props: BlockProps) {
  const { theme, heading = "Built for serious builders", subheading = "A complete platform for teams that ship.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.foreground ?? "#0a0a0a", color: theme?.background ?? "#ffffff" }} className="px-5 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">{heading}</h2>
          <p className="mt-4 text-lg opacity-70">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.slice(0, 4).map((it, i) => {
            const Icon = ICONS[i % 4];
            return (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <Icon className="w-6 h-6 mb-4" style={{ color: theme?.accent ?? "#a855f7" }} />
                <h3 className="text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm opacity-70 leading-relaxed">{it.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
