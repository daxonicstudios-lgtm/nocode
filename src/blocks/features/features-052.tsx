import type { BlockProps } from "@/blocks/types";
import { Shield, Zap, Target, Heart } from "lucide-react";

const icons = [Shield, Zap, Target, Heart];

export default function Features052(props: BlockProps) {
  const {
    theme,
    heading = "Built for Modern Teams",
    subheading = "Features that set us apart from the competition",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/540x360",
    items = [
      { title: "Enterprise Security", description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards." },
      { title: "Blazing Performance", description: "Content delivered from edge servers worldwide for sub-100ms load times." },
      { title: "Precision Targeting", description: "Reach the right audience with advanced segmentation and personalization." },
      { title: "Customer Love", description: "24/7 dedicated support from real humans who know our product inside out." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;
            const bg = isEven ? (theme?.accent || "#f1f5f9") : "transparent";
            return (
              <div key={i} className="py-12 px-4 sm:px-8" style={{ backgroundColor: bg }}>
                <div className={`max-w-5xl mx-auto flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
                  <div className="w-full md:w-1/2">
                    <img src={imageUrl} alt={item.title || ""} className="w-full rounded-xl object-cover" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <Icon size={28} style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="opacity-60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
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
