import type { BlockProps } from "@/blocks/types";
import { Star, Cpu, Lock, Rocket } from "lucide-react";

const icons = [Star, Cpu, Lock, Rocket];

export default function Features202(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need",
    subheading = "A comprehensive platform designed to scale with your ambition",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Premium Quality", description: "Crafted with pixel-perfect precision for a polished user experience." },
      { title: "AI-Powered", description: "Smart suggestions and automation that save hours every week." },
      { title: "Bank-Level Security", description: "256-bit encryption and SOC 2 compliance keep your data safe." },
      { title: "Instant Deployment", description: "Push to production in seconds with zero-downtime releases." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
          <Star size={30} className="text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <Icon size={28} className="mx-auto mb-4" style={{ color: theme?.accent || "#f59e0b" }} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
