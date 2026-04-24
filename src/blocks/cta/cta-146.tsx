import type { BlockProps } from "@/blocks/types";
import { Shield, Lock, RefreshCw } from "lucide-react";

export default function Cta146(props: BlockProps) {
  const {
    theme,
    heading = "Your Data Is Safe With Us",
    subheading = "Enterprise-grade security so you can focus on building.",
    buttonText = "Start Secure",
    buttonUrl = "#",
    items = [
      { title: "256-bit SSL Encryption" },
      { title: "30-Day Money Back" },
      { title: "99.9% Uptime SLA" },
    ],
  } = props;

  const icons = [Lock, RefreshCw, Shield];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-8">{subheading}</p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {items.slice(0, 3).map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-center gap-2 text-sm">
                <Icon className="w-5 h-5" style={{ color: theme?.primary || "#2563eb" }} />
                <span className="font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
