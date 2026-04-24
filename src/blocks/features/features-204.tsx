import type { BlockProps } from "@/blocks/types";
import { Box, Cloud, Database, Settings } from "lucide-react";

const icons = [Box, Cloud, Database, Settings];

export default function Features204(props: BlockProps) {
  const {
    theme,
    heading = "Connected Ecosystem",
    subheading = "Every feature works together seamlessly",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Modular Design", description: "Plug-and-play components that fit your workflow." },
      { title: "Cloud Sync", description: "Access your data from any device, anywhere." },
      { title: "Smart Storage", description: "Intelligent data management that scales automatically." },
      { title: "Custom Config", description: "Fine-tune every detail to match your process." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-16 max-w-xl mx-auto">{subheading}</p>
        <div className="relative">
          <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-dashed" style={{ borderColor: theme?.primary ? `${theme.primary}40` : "#c7d2fe" }} />
          <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="relative p-6 rounded-xl border text-center" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                  <div className="hidden sm:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-4" style={{ backgroundColor: theme?.primary ? `${theme.primary}30` : "#d1d5db" }} />
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#eef2ff", color: theme?.primary || "#6366f1" }}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-14 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
