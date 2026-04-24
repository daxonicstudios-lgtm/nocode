import type { BlockProps } from "@/blocks/types";
import { Wifi, Battery, Signal, Monitor } from "lucide-react";

const icons = [Wifi, Battery, Signal, Monitor];
const tints = ["#dbeafe", "#fce7f3", "#d1fae5", "#fef3c7"];

export default function Features355(props: BlockProps) {
  const {
    theme,
    heading = "Stay Connected Everywhere",
    subheading = "Reliable infrastructure that never sleeps",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Always Online", description: "99.99% uptime guarantee with instant failover." },
      { title: "Long Lasting", description: "Optimized for low battery consumption on mobile." },
      { title: "Strong Signal", description: "Edge computing brings data closer to your users." },
      { title: "Multi-Screen", description: "Seamless experience across all your devices." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#eaecef", color: theme?.foreground || "#1f2937" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const tint = tints[i % tints.length];
            return (
              <div key={i} className="rounded-2xl p-6" style={{ background: tint, boxShadow: "6px 6px 14px #c0c2c5, -6px -6px 14px #ffffff" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: tint, boxShadow: "inset 3px 3px 6px rgba(0,0,0,0.1), inset -3px -3px 6px rgba(255,255,255,0.7)" }}>
                  <Icon size={22} style={{ color: theme?.primary || "#3b82f6" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: theme?.foreground || "#1f2937" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: theme?.foreground || "#1f2937", opacity: 0.6 }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
