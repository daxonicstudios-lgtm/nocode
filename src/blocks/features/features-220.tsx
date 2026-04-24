import type { BlockProps } from "@/blocks/types";
import { Palette, Code, Shield, Truck, Headphones, Server } from "lucide-react";

const icons = [Palette, Code, Shield, Truck, Headphones, Server];
const colors = ["#6366f1", "#ec4899", "#10b981", "#f59e0b", "#3b82f6", "#8b5cf6"];

export default function Features220(props: BlockProps) {
  const {
    theme,
    heading = "Full-Stack Platform",
    subheading = "Six departments, one unified tool",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Design System", description: "Consistent UI components and tokens.", label: "Design" },
      { title: "API Builder", description: "RESTful and GraphQL endpoints.", label: "Engineering" },
      { title: "Compliance Hub", description: "Automated regulatory checks.", label: "Security" },
      { title: "Release Manager", description: "Staged rollouts with flags.", label: "DevOps" },
      { title: "Help Center", description: "Self-service knowledge base.", label: "Support" },
      { title: "Infrastructure", description: "Auto-scaling cloud resources.", label: "Platform" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-base opacity-70 mb-10 max-w-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const color = theme?.primary || colors[i % colors.length];
            return (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg border-l-3" style={{ borderLeftWidth: "3px", borderLeftColor: color, backgroundColor: `${color}06` }}>
                <Icon size={16} className="mt-0.5 shrink-0" style={{ color }} />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-xs opacity-50 mt-0.5">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
