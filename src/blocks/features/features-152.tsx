import type { BlockProps } from "@/blocks/types";
import { Layers, Globe, Lock, Cpu } from "lucide-react";

const icons = [Layers, Globe, Lock, Cpu];

export default function Features152(props: BlockProps) {
  const {
    theme,
    heading = "Core Features",
    subheading = "Built for performance and reliability",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Modular Architecture", description: "Compose your stack from independent, reusable modules." },
      { title: "Global CDN", description: "Serve content from edge locations worldwide." },
      { title: "End-to-End Encryption", description: "Data is encrypted at rest and in transit." },
      { title: "Edge Computing", description: "Run logic closer to your users for faster responses." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const borderClass = i % 2 === 0 ? "sm:border-r" : "";
            const topBorder = i >= 2 ? "border-t" : "";
            return (
              <div key={i} className={`p-8 ${borderClass} ${topBorder}`} style={{ borderColor: theme?.foreground ? `${theme.foreground}15` : "#e5e7eb" }}>
                <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} className="mb-4" />
                <h3 className="text-base font-medium mb-1">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
