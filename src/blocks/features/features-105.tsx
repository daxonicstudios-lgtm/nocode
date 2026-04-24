import type { BlockProps } from "@/blocks/types";
import { Calendar, Zap, Globe, Rocket } from "lucide-react";

const icons = [Calendar, Zap, Globe, Rocket];

export default function Features105(props: BlockProps) {
  const {
    theme,
    heading = "Platform Evolution",
    subheading = "Major updates along the way",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Core Platform", description: "Shipped the first version with drag-and-drop editing.", label: "Jan 2024" },
      { title: "AI Assistant", description: "Added intelligent content generation powered by AI.", label: "Apr 2024" },
      { title: "Global CDN", description: "Deployed to 50+ edge locations for sub-second loads.", label: "Jul 2024" },
      { title: "Mobile App", description: "Launched the companion app for building on the go.", label: "Oct 2024" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ backgroundColor: theme?.accent || "#e5e7eb" }} />
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative pl-14 mb-10">
                <div className="absolute left-1 w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                  <Icon size={14} />
                </div>
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 text-white" style={{ backgroundColor: theme?.accent || "#8b5cf6" }}>
                  {item.label || `Step ${i + 1}`}
                </span>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
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
