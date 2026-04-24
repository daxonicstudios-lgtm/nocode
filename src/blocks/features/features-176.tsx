import type { BlockProps } from "@/blocks/types";
import { Megaphone, PieChart, Mail } from "lucide-react";

const icons = [Megaphone, PieChart, Mail];

export default function Features176(props: BlockProps) {
  const {
    theme,
    heading = "Marketing Suite",
    subheading = "Grow your audience with built-in tools",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Campaign Builder", description: "Create multi-channel campaigns with drag-and-drop simplicity." },
      { title: "Audience Insights", description: "Understand who your visitors are and what they want." },
      { title: "Email Automation", description: "Send targeted emails triggered by user behavior." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme?.background || "#111827", color: theme?.foreground || "#f9fafb" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="p-4 flex items-center justify-center" style={{ background: `${primary}15` }}>
                  <Icon size={32} style={{ color: primary }} className="opacity-70" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
