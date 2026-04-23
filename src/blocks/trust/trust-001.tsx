import type { BlockProps } from "@/blocks/types";
import { Shield, Lock, Award, BadgeCheck } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "SOC 2 Type II" },
  { title: "GDPR compliant" },
  { title: "ISO 27001" },
  { title: "PCI DSS Level 1" },
];

const ICONS = [Shield, Lock, Award, BadgeCheck];

export default function Trust001(props: BlockProps) {
  const { theme, heading = "Compliance & security", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm uppercase tracking-widest opacity-60 mb-8">{heading}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.slice(0, 4).map((b, i) => {
            const Icon = ICONS[i % 4];
            return (
              <div key={i} className="flex flex-col items-center gap-2 p-6 rounded-xl border text-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <Icon className="w-7 h-7 opacity-70" />
                <p className="text-sm font-semibold">{b.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
