import type { BlockProps } from "@/blocks/types";
import { Monitor, Layers, Bell, Settings } from "lucide-react";

const icons = [Monitor, Layers, Bell, Settings];

export default function Features223(props: BlockProps) {
  const {
    theme,
    heading = "See It in Action",
    subheading = "A visual overview paired with detailed feature breakdowns",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Dashboard View", description: "Centralized command center for all your projects." },
      { title: "Stack Builder", description: "Compose your ideal toolset with modular components." },
      { title: "Alert System", description: "Custom notifications via email, Slack, or SMS." },
      { title: "Configuration", description: "Fine-tune every setting without touching code." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden aspect-video flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#f3f4f6" }}>
              {imageUrl ? (
                <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
              ) : (
                <Monitor size={64} style={{ color: theme?.primary ? `${theme.primary}40` : "#d1d5db" }} />
              )}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
            <p className="text-base opacity-70 mb-8">{subheading}</p>
            <div className="space-y-5">
              {items.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: theme?.primary ? `${theme.primary}12` : "#eef2ff", color: theme?.primary || "#6366f1" }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-0.5">{item.title}</h3>
                      <p className="text-sm opacity-60">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {buttonText && (
              <a href={buttonUrl} className="inline-block mt-8 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
