import type { BlockProps } from "@/blocks/types";
import { Shield, Award, Lock, CheckCircle } from "lucide-react";
const icons = [Shield, Award, Lock, CheckCircle];
const DEFAULT_ITEMS = [
  { title: "SSL Secured", description: "256-bit encryption" },
  { title: "GDPR Compliant", description: "Full data protection" },
  { title: "SOC 2 Certified", description: "Enterprise security" },
  { title: "99.9% Uptime", description: "Reliable service" },
];
export default function Trust032(props: BlockProps) {
  const { theme, heading = "Trust badges with icons", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-medium opacity-40 mb-8">{heading}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.slice(0, 4).map((badge, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <Icon className="w-8 h-8 mx-auto mb-2" style={{ color: theme?.primary }} />
                <div className="font-semibold text-sm">{badge.title}</div>
                <div className="text-xs opacity-50 mt-1">{badge.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
