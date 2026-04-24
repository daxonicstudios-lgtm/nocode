import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, Zap, RefreshCw } from "lucide-react";

const icons = [ShieldCheck, Zap, RefreshCw];

export default function Features178(props: BlockProps) {
  const {
    theme,
    heading = "Reliable Infrastructure",
    subheading = "Enterprise features without enterprise complexity",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "DDoS Protection", description: "Automatic traffic filtering blocks malicious requests." },
      { title: "Auto Scaling", description: "Resources scale up during traffic spikes, down when quiet." },
      { title: "Self-Healing", description: "Failed processes restart automatically with zero downtime." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme?.background || "#111827", color: theme?.foreground || "#f9fafb" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${primary}, transparent)` }} />
                <div className="p-8">
                  <Icon size={24} className="mb-5" style={{ color: primary }} />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
