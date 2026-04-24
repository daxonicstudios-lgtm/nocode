import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Pricing124(props: BlockProps) {
  const {
    theme,
    heading = "Pricing for Creators",
    subheading = "Start building today",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Hobby", value: "$0", description: "Basic tools for creators" },
      { title: "Creator", value: "$15/mo", description: "Monetization & analytics" },
      { title: "Studio", value: "$45/mo", description: "Team workflows & API" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Sparkles className="w-6 h-6 mx-auto mb-2" style={{ color: theme?.primary }} />
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
          <p className="opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden border p-6 transition-shadow duration-300 hover:shadow-2xl" style={{ borderColor: theme?.accent }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundColor: theme?.primary }} />
              <div className="relative">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 mb-5">{item.description}</p>
                <p className="text-3xl font-extrabold mb-6" style={{ color: theme?.primary }}>{item.value}</p>
                <a href={buttonUrl} className="block text-center rounded-xl py-3 font-semibold text-white transition-transform duration-300 group-hover:scale-105" style={{ backgroundColor: theme?.primary }}>
                  {buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
