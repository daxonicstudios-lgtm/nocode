import type { BlockProps } from "@/blocks/types";
import { Layers, Globe, TrendingUp, Cpu, Shield } from "lucide-react";

const icons = [Layers, Globe, TrendingUp, Cpu, Shield];

export default function Features230(props: BlockProps) {
  const {
    theme,
    heading = "Cascading Benefits",
    subheading = "Each feature amplifies the next, creating compounding value",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Modular Architecture", description: "Build with interchangeable components that snap together." },
      { title: "Global Distribution", description: "Content delivered from 200+ edge locations worldwide." },
      { title: "Predictive Analytics", description: "Forecast trends before they happen with ML-powered insights." },
      { title: "Smart Automation", description: "Rules engine that eliminates repetitive manual work." },
      { title: "Compliance Shield", description: "Stay audit-ready with automated regulatory tracking." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-base opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const indent = i * 2;
            return (
              <div key={i} className="flex" style={{ paddingLeft: `${indent}%` }}>
                <div className="flex-1 flex items-start gap-4 p-5 rounded-xl border" style={{ borderColor: `${primary}${15 + i * 5}`, backgroundColor: `${primary}0${2 + i}` }}>
                  <Icon size={22} className="shrink-0 mt-0.5" style={{ color: primary }} />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-60">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
