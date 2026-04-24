import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const icons = [TrendingUp, Clock, DollarSign, Target];

export default function Features127(props: BlockProps) {
  const {
    theme,
    heading = "Return on Investment",
    subheading = "Every feature delivers measurable results",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Conversion Optimizer", description: "A/B test layouts and CTAs automatically.", value: "+34% conversions" },
      { title: "Speed Engine", description: "Faster pages mean lower bounce rates.", value: "+28% retention" },
      { title: "Revenue Tracking", description: "Attribute every dollar to the right campaign.", value: "+41% revenue clarity" },
      { title: "Lead Scoring", description: "Focus on prospects most likely to convert.", value: "+52% close rate" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6 flex items-start gap-4" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }}>
                  <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm mb-2">{item.description}</p>
                  <span className="inline-block text-lg font-bold" style={{ color: theme?.primary || "#6366f1" }}>{item.value}</span>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
