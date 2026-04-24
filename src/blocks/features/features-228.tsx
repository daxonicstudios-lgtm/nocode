import type { BlockProps } from "@/blocks/types";
import { Hexagon, Triangle, Circle } from "lucide-react";

const icons = [Hexagon, Triangle, Circle];

export default function Features228(props: BlockProps) {
  const {
    theme,
    heading = "Geometric Precision",
    subheading = "Every feature engineered with mathematical accuracy",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Structured Data", description: "Organize information with schema-driven models that enforce consistency." },
      { title: "Balanced Load", description: "Traffic distributed evenly across clusters for optimal performance." },
      { title: "Circular Workflows", description: "Feedback loops that continuously improve your processes over time." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";
  const accent = theme?.accent || "#f59e0b";

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: primary }} />
      <div className="absolute bottom-20 left-5 w-20 h-20 opacity-5 rotate-45" style={{ backgroundColor: accent, borderRadius: "4px" }} />
      <div className="absolute top-1/2 right-1/4 w-0 h-0 opacity-5" style={{ borderLeft: "30px solid transparent", borderRight: "30px solid transparent", borderBottom: `52px solid ${primary}` }} />
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/5 lg:text-right lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
            <p className="text-base opacity-70">{subheading}</p>
          </div>
          <div className="lg:w-3/5 space-y-6 lg:order-1">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border" style={{ borderColor: `${primary}20` }}>
                  <Icon size={24} style={{ color: primary }} className="shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {buttonText && (
          <div className="mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
