import type { BlockProps } from "@/blocks/types";
import { Home, Eye, Calculator, MapPin, Camera, Key } from "lucide-react";

const icons = [Home, Eye, Calculator, MapPin, Camera, Key];

export default function Features096(props: BlockProps) {
  const {
    theme,
    heading = "Real Estate Tools",
    subheading = "Close more deals with a smarter property platform",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Property Listings", description: "Beautiful listing pages with photo galleries, floor plans, and neighborhood details." },
      { title: "Virtual Tours", description: "360-degree virtual walkthroughs that let buyers explore properties from anywhere." },
      { title: "Mortgage Calculator", description: "Interactive calculator showing monthly payments, interest, and amortization schedules." },
      { title: "Map Integration", description: "Properties displayed on interactive maps with nearby schools, shops, and transit." },
      { title: "Photo Management", description: "Upload, reorder, and enhance property photos with built-in editing tools." },
      { title: "Lead Capture", description: "Smart forms capture buyer interest with automatic agent assignment and follow-ups." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 text-white" style={{ backgroundColor: theme?.primary || "#8b5cf6" }}>Real Estate</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl" style={{ backgroundColor: theme?.accent || "#f5f3ff" }}>
                <Icon size={24} className="shrink-0 mt-1" style={{ color: theme?.primary || "#8b5cf6" }} />
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#8b5cf6" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
