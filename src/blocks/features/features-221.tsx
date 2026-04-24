import type { BlockProps } from "@/blocks/types";
import { Cpu, Zap, Shield, BarChart3 } from "lucide-react";

const icons = [Cpu, Zap, Shield, BarChart3];

export default function Features221(props: BlockProps) {
  const {
    theme,
    heading = "Next-Gen Technology",
    subheading = "Powered by the infrastructure trusted by Fortune 500 companies",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Processing", description: "Parallel computing that handles complex tasks in milliseconds." },
      { title: "Edge Delivery", description: "Content served from the closest node to your users." },
      { title: "Encrypted Storage", description: "All data encrypted at rest and in transit by default." },
      { title: "Live Metrics", description: "Monitor every aspect of your system in real time." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse gap-12">
        <div className="lg:w-1/3 lg:text-right">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-base opacity-70 mb-6">{subheading}</p>
          {buttonText && (
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
              {buttonText}
            </a>
          )}
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6 rounded-xl border" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <Icon size={24} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
