import type { BlockProps } from "@/blocks/types";
import { Bell, ArrowRight } from "lucide-react";

export default function Cta201(props: BlockProps) {
  const {
    theme,
    heading = "Never miss an update",
    subheading = "Get real-time notifications when things that matter happen.",
    buttonText = "Enable Notifications",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: `${theme?.primary ?? "#ef4444"}15`, color: theme?.primary ?? "#ef4444" }}>
          <Bell className="w-4 h-4" />
          <span>New alerts available</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary ?? "#ef4444" }}>
            <Bell className="w-4 h-4" /> {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
            {secondaryButtonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
