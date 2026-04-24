import type { BlockProps } from "@/blocks/types";
import { Sparkles, Clock, Palette } from "lucide-react";

const icons = [Sparkles, Clock, Palette];

export default function Features153(props: BlockProps) {
  const {
    theme,
    heading = "Simple by Design",
    subheading = "Features that just work",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "AI-Powered", description: "Intelligent suggestions that learn your preferences." },
      { title: "Real-Time Sync", description: "Changes appear instantly across all devices." },
      { title: "Custom Themes", description: "Match your brand with one-click theming." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-2">{heading}</h2>
        <p className="opacity-50 mb-16">{subheading}</p>
        <div className="space-y-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-center justify-center gap-4">
                <Icon size={18} style={{ color: theme?.primary || "#6366f1" }} className="shrink-0" />
                <span className="font-medium text-sm">{item.title}</span>
                <span className="opacity-30">—</span>
                <span className="opacity-50 text-sm">{item.description}</span>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{buttonText}</a>
        )}
      </div>
    </section>
  );
}
