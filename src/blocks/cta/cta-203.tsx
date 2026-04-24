import type { BlockProps } from "@/blocks/types";
import { Bell, ChevronRight } from "lucide-react";

export default function Cta203(props: BlockProps) {
  const {
    theme,
    heading = "Important announcement",
    bodyText = "We just launched a brand-new feature that will change how you work. Turn on notifications so you never miss what comes next.",
    buttonText = "Turn On Alerts",
    buttonUrl = "#",
    secondaryButtonText = "Dismiss",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border" style={{ borderColor: theme?.primary ?? "#6366f1" }}>
        <div className="px-5 py-3 flex items-center gap-2 text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          <Bell className="w-4 h-4" /> Notification Center
        </div>
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-70 leading-relaxed">{bodyText}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={buttonUrl} className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
              {buttonText} <ChevronRight className="w-4 h-4" />
            </a>
            <a href={secondaryButtonUrl} className="px-5 py-2.5 rounded-lg font-medium text-sm opacity-60 hover:opacity-100">
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
