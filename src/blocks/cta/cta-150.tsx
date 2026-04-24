import type { BlockProps } from "@/blocks/types";
import { Shield, Lock, Eye, Server, CheckCircle } from "lucide-react";

export default function Cta150(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise-Grade Protection",
    bodyText = "We take security seriously so you don't have to worry. Your data is encrypted, backed up, and monitored 24/7.",
    buttonText = "See Security Details",
    buttonUrl = "#",
    secondaryButtonText = "Start Free Trial",
    secondaryButtonUrl = "#",
    items = [
      { title: "End-to-End Encryption" },
      { title: "24/7 Monitoring" },
      { title: "Daily Backups" },
      { title: "Global Infrastructure" },
      { title: "99.99% Uptime" },
    ],
  } = props;

  const icons = [Lock, Eye, Shield, Server, CheckCircle];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#e2e8f0" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Shield className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary || "#3b82f6" }} />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
          <p className="text-sm opacity-60 max-w-md mx-auto">{bodyText}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {items.slice(0, 5).map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm">
                <Icon className="w-4 h-4" style={{ color: theme?.primary || "#3b82f6" }} />
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={secondaryButtonUrl} className="px-8 py-3 rounded-lg text-white font-semibold text-center hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#3b82f6" }}>
            {secondaryButtonText}
          </a>
          <a href={buttonUrl} className="px-8 py-3 rounded-lg border font-semibold text-center hover:bg-white/5 transition" style={{ borderColor: theme?.primary || "#3b82f6", color: theme?.primary || "#3b82f6" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
