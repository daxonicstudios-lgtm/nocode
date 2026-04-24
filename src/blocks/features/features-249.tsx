import type { BlockProps } from "@/blocks/types";
import { MapPin, Plane, Globe } from "lucide-react";

const icons = [MapPin, Plane, Globe];
const stampColors = ["#dc2626", "#1d4ed8", "#15803d", "#9333ea"];
const stampRotations = ["-6deg", "4deg", "-3deg", "5deg"];

export default function Features249(props: BlockProps) {
  const {
    theme,
    heading = "Feature Passport",
    subheading = "Stamps collected from across the platform",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "DEPLOYED", description: "One-click global deployment to 40+ regions.", value: "2024" },
      { title: "SECURED", description: "Enterprise-grade encryption and compliance.", value: "2024" },
      { title: "OPTIMIZED", description: "Auto-tuned performance for peak efficiency.", value: "2025" },
      { title: "CONNECTED", description: "500+ integrations with leading platforms.", value: "2025" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme?.background || "#fefce8", color: theme?.foreground || "#1c1917" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-base opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const color = stampColors[i % stampColors.length];
            return (
              <div key={i} className="text-center" style={{ transform: `rotate(${stampRotations[i % stampRotations.length]})` }}>
                <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full border-4 border-double flex flex-col items-center justify-center p-3" style={{ borderColor: color, color }}>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.value}</span>
                  <span className="text-sm sm:text-base font-black uppercase mt-1">{item.title}</span>
                  <div className="w-8 h-px mt-1" style={{ backgroundColor: color }} />
                </div>
                <p className="text-xs opacity-60 mt-3 leading-relaxed" style={{ transform: `rotate(${stampRotations[i % stampRotations.length].startsWith("-") ? "2deg" : "-2deg"})` }}>{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
