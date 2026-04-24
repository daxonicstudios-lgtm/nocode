import type { BlockProps } from "@/blocks/types";
import { CheckCircle2, CircleDot, Minus } from "lucide-react";

const statusIcons = [CheckCircle2, CheckCircle2, CircleDot, CheckCircle2, Minus];

export default function Features315(props: BlockProps) {
  const {
    theme,
    heading = "What's Included",
    subheading = "Every plan comes loaded with essentials",
    items = [
      { title: "Unlimited Projects", description: "Create as many projects as you need with no caps.", value: "done" },
      { title: "Custom Domains", description: "Connect your own domain with free SSL certificates.", value: "done" },
      { title: "Priority Support", description: "Jump to the front of the queue when you need help.", value: "partial" },
      { title: "API Access", description: "Build custom integrations with our fully documented API.", value: "done" },
      { title: "White-Label", description: "Remove our branding and make it fully yours.", value: "none" },
    ],
  } = props;

  const getStatusColor = (val: string | undefined) => {
    if (val === "done") return theme?.primary || "#22c55e";
    if (val === "partial") return theme?.accent || "#f59e0b";
    return "#d1d5db";
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10">{subheading}</p>
        <div className="space-y-3">
          {items.map((item, i) => {
            const Icon = statusIcons[i % statusIcons.length];
            const color = getStatusColor(item.value);
            return (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg transition-all duration-200 hover:translate-x-1" style={{ backgroundColor: theme?.accent ? `${theme.accent}06` : "#fafafa" }}>
                <div className="mt-0.5 animate-bounce" style={{ color, animationDelay: `${i * 150}ms`, animationDuration: "2s" }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
