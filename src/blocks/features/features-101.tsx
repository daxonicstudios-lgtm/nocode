import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Rocket, Layers } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Rocket, Layers];

export default function Features101(props: BlockProps) {
  const {
    theme,
    heading = "Our Journey",
    subheading = "Key milestones that shaped our platform",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Research & Discovery", description: "We identified gaps in the market and designed a solution from the ground up." },
      { title: "Core Engine Built", description: "Our engineering team delivered a blazing-fast rendering engine in record time." },
      { title: "Beta Launch", description: "Over 1,000 early users tested the platform and provided actionable feedback." },
      { title: "Public Release", description: "We opened the doors to everyone with a polished, production-ready product." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`relative flex flex-col md:flex-row items-center mb-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`md:w-5/12 ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full border-4 my-4 md:my-0" style={{ borderColor: theme?.primary || "#6366f1", backgroundColor: theme?.background || "#fff" }}>
                  <Icon size={16} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <div className="md:w-5/12" />
              </div>
            );
          })}
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
