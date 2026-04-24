import type { BlockProps } from "@/blocks/types";
import { Rocket, Target, TrendingUp, Gauge, PieChart, Lightbulb } from "lucide-react";

const icons = [Rocket, Target, TrendingUp, Gauge, PieChart, Lightbulb];

export default function Features063(props: BlockProps) {
  const {
    theme,
    heading = "Scale Without Limits",
    subheading = "Enterprise features at startup speed",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Rapid Deployment", description: "Ship features in hours, not weeks. Our platform handles the infrastructure so you can focus on your product." },
      { title: "Smart Targeting", description: "Deliver personalized content to every user based on behavior and preferences." },
      { title: "Growth Engine", description: "Built-in tools for SEO, social sharing, and email capture drive organic growth." },
      { title: "Performance Monitoring", description: "Track page speed, uptime, and core web vitals from a single dashboard." },
      { title: "Revenue Analytics", description: "Understand your revenue streams with visual charts and actionable insights." },
      { title: "AI Suggestions", description: "Get intelligent recommendations for improving engagement and conversions." },
    ],
  } = props;

  const sizes = ["lg:col-span-2 lg:row-span-2", "", "", "lg:col-span-2", "", ""];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className={`rounded-2xl p-6 ${sizes[i] || ""}`} style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${theme?.primary || "#6366f1"}20` }}>
                  <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
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
