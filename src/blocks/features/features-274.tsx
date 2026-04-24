import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, Globe, Cpu } from "lucide-react";

const icons = [Zap, Shield, Globe, Cpu];
const neonColors = ["#06b6d4", "#a855f7", "#22c55e", "#f43f5e"];

export default function Features274(props: BlockProps) {
  const {
    theme,
    heading = "Next-Gen Platform Features",
    subheading = "Cutting-edge tools for teams that refuse to settle",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Edge Computing", description: "Run logic at the edge for sub-10ms response times globally." },
      { title: "Zero Trust Security", description: "Every request authenticated and authorized, no exceptions." },
      { title: "Multi-Region", description: "Deploy to any region with automatic data residency compliance." },
      { title: "GPU Acceleration", description: "Hardware-accelerated processing for compute-intensive workloads." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#09090b", color: theme?.foreground || "#fafafa" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const neon = neonColors[i % neonColors.length];
            return (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#18181b", border: `1px solid ${theme?.primary || neon}40`, boxShadow: `0 0 20px ${theme?.primary || neon}15` }}>
                <Icon size={24} className="mb-4" style={{ color: theme?.primary || neon }} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg font-medium" style={{ backgroundColor: theme?.primary || neonColors[0], color: "#09090b" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
