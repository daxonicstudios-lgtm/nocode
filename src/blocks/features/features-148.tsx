import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features148(props: BlockProps) {
  const {
    theme,
    heading = "Platform Capabilities",
    subheading = "Tools designed to accelerate your growth",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Cache", description: "Automatic cache invalidation when content changes." },
      { title: "Access Logs", description: "Full audit trail of every action on your workspace." },
      { title: "A/B Testing", description: "Test variations and let data pick the winner." },
      { title: "Multi-Site", description: "Manage multiple websites from one dashboard." },
      { title: "Design Tokens", description: "Centralized style variables for consistent branding." },
      { title: "Scheduled Publish", description: "Queue content to go live at a specific date and time." },
    ],
  } = props;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
      <div className="absolute bottom-20 right-16 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: theme?.accent || "#8b5cf6" }} />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full opacity-5" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl backdrop-blur-sm border p-6" style={{ borderColor: theme?.accent || "#e5e7eb", backgroundColor: `${theme?.background || "#ffffff"}cc` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }}>
                  <Icon size={18} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
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
