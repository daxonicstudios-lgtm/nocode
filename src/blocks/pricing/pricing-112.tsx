import type { BlockProps } from "@/blocks/types";
import { Shield, Flame, Globe } from "lucide-react";

const icons = [Shield, Flame, Globe];

export default function Pricing112(props: BlockProps) {
  const {
    theme,
    heading = "Security-First Pricing",
    subheading = "Every plan includes SSL and backups",
    bodyText,
    buttonText = "Start Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Protect", value: "$14/mo", description: "SSL, daily backups, firewall" },
      { title: "Defend", value: "$34/mo", description: "WAF, DDoS protection, monitoring" },
      { title: "Fortress", value: "$74/mo", description: "SOC2, custom policies, SLA" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: theme?.accent }}>
                <Icon className="w-8 h-8 mb-4 mx-auto" style={{ color: theme?.primary }} />
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 mb-4">{item.description}</p>
                <p className="text-3xl font-bold mb-5" style={{ color: theme?.primary }}>{item.value}</p>
                <a href={buttonUrl} className="inline-block rounded-lg px-6 py-2.5 font-medium text-white" style={{ backgroundColor: theme?.primary }}>
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
