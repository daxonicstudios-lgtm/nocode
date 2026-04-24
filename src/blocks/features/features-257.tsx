import type { BlockProps } from "@/blocks/types";
import { Zap, ArrowRightLeft, Clock, Repeat } from "lucide-react";

const icons = [Zap, ArrowRightLeft, Clock, Repeat];

export default function Features257(props: BlockProps) {
  const {
    theme,
    heading = "Automate the Boring Stuff",
    subheading = "Set up workflows once and let them run forever",
    bodyText,
    buttonText = "Start Automating",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Trigger Actions", description: "Define triggers based on events, schedules, or data changes." },
      { title: "Multi-Step Flows", description: "Chain actions together with conditional logic and branching paths." },
      { title: "Scheduled Tasks", description: "Run recurring jobs at any interval without managing cron." },
      { title: "Retry Logic", description: "Failed steps auto-retry with exponential backoff and alerts." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-center gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#ede9fe", color: theme?.primary || "#7c3aed" }}>
                    <Icon size={20} />
                  </div>
                  {i < items.length - 1 && (
                    <div className="w-px h-8 mt-1" style={{ backgroundColor: theme?.primary ? `${theme.primary}30` : "#c4b5fd" }} />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
