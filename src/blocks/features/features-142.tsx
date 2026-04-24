import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features142(props: BlockProps) {
  const {
    theme,
    heading = "The Complete Platform",
    subheading = "Every feature revolves around your success",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Speed", description: "Sub-second page loads on every device." },
      { title: "Security", description: "Enterprise-grade protection as standard." },
      { title: "Analytics", description: "Actionable insights from day one." },
      { title: "Scale", description: "Handles millions of visitors effortlessly." },
      { title: "Design", description: "Professional templates and brand tools." },
      { title: "Support", description: "Expert help available around the clock." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="hidden md:flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
              Core
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="text-center p-5 rounded-xl border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }}>
                    <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
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
