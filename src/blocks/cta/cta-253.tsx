import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Shield } from "lucide-react";

export default function Cta253(props: BlockProps) {
  const {
    theme,
    heading = "Secure. Fast. Reliable.",
    subheading = "Enterprise-grade infrastructure you can count on.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = [
      { title: "99.9% Uptime" },
      { title: "SOC2 Compliant" },
      { title: "24/7 Support" },
    ],
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.background ?? "#e0e5ec", color: theme?.foreground ?? "#334155" }}>
      <div
        className="max-w-3xl mx-auto rounded-3xl px-6 py-12 sm:px-12 sm:py-16"
        style={{ boxShadow: "10px 10px 20px #c1c6cc, -10px -10px 20px #ffffff" }}
      >
        <div className="flex items-center gap-3 justify-center mb-4">
          <Shield className="w-6 h-6" style={{ color: theme?.primary ?? "#6366f1" }} />
          <span className="text-sm font-semibold uppercase tracking-widest opacity-60">Trusted Platform</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">{heading}</h2>
        <p className="mt-3 text-center opacity-60">{subheading}</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {items.map((item, i) => (
            <span key={i} className="px-4 py-2 rounded-xl text-xs font-semibold" style={{ boxShadow: "inset 3px 3px 6px #c1c6cc, inset -3px -3px 6px #ffffff" }}>
              {item.title}
            </span>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1", boxShadow: "4px 4px 8px #c1c6cc" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
