import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Features114(props: BlockProps) {
  const {
    theme,
    heading = "Before & After",
    subheading = "See the transformation our platform delivers",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Manual processes", description: "Hours spent on repetitive tasks", label: "Automated workflows", value: "Save 15 hours per week" },
      { title: "Scattered data", description: "Information spread across tools", label: "Unified dashboard", value: "Everything in one place" },
      { title: "Slow load times", description: "Pages taking 5+ seconds to load", label: "Sub-second loads", value: "3x faster page speed" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-center rounded-xl p-6 border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="text-center md:text-left">
                <span className="text-xs font-semibold uppercase tracking-wide text-red-400">Before</span>
                <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                <p className="opacity-60 text-sm">{item.description}</p>
              </div>
              <div className="flex justify-center">
                <ArrowRight size={24} style={{ color: theme?.primary || "#6366f1" }} />
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs font-semibold uppercase tracking-wide text-green-500">After</span>
                <h3 className="text-lg font-semibold mt-1">{item.label}</h3>
                <p className="text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
