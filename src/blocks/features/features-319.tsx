import type { BlockProps } from "@/blocks/types";
import { Cpu, Wifi, Battery } from "lucide-react";

const icons = [Cpu, Wifi, Battery];

export default function Features319(props: BlockProps) {
  const {
    theme,
    heading = "Engineered for Excellence",
    subheading = "Cards with animated gradient borders",
    items = [
      { title: "Smart Processing", description: "Intelligent task scheduling that maximizes throughput and minimizes latency." },
      { title: "Always Connected", description: "Redundant networking ensures your service stays online no matter what." },
      { title: "Energy Efficient", description: "Optimized resource usage that lowers costs and environmental impact." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";
  const accent = theme?.accent || "#ec4899";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="group relative p-[2px] rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(${120 + i * 60}deg, ${primary}, ${accent}, ${primary})`, backgroundSize: "200% 200%", animation: "gradientBorder 3s ease infinite" }}
                />
                <div className="relative rounded-xl p-6 h-full" style={{ backgroundColor: theme?.background || "#fff" }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ color: primary }}>
                    <Icon size={26} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
