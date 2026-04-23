import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, Rocket } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Lightning fast", description: "Pages load in under a second on any device, anywhere in the world." },
  { title: "Secure by default", description: "Every site ships with HTTPS, DDoS protection, and automatic backups." },
  { title: "Ready to scale", description: "From your first visitor to your millionth — no re-architecture needed." },
];

const ICONS = [Zap, Shield, Rocket];

export default function Features001(props: BlockProps) {
  const { theme, heading = "Everything you need to ship", subheading = "Powerful features, simple interface.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-base opacity-70 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.slice(0, 3).map((it, i) => {
            const Icon = ICONS[i % 3];
            return (
              <div key={i} className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4" style={{ backgroundColor: theme?.primary, color: "#fff" }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm opacity-70 leading-relaxed">{it.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
