import type { BlockProps } from "@/blocks/types";
import { Award, Star, Medal, Trophy } from "lucide-react";

const icons = [Award, Star, Medal, Trophy];
const badgeLabels = ["Best in Class 2025", "Top Rated", "Editor's Choice", "Industry Leader"];

export default function Features329(props: BlockProps) {
  const {
    theme,
    heading = "Award-Winning Features",
    subheading = "Recognized by industry leaders and analysts",
    items = [
      { title: "Intelligent Automation", description: "Named best-in-class by Forrester for workflow automation capabilities.", label: "Best in Class 2025" },
      { title: "User Experience", description: "Rated 4.9/5 on G2 with over 2,000 verified enterprise reviews.", label: "Top Rated" },
      { title: "Data Platform", description: "Selected as editor's choice by TechCrunch for data management innovation.", label: "Editor's Choice" },
      { title: "Market Position", description: "Positioned as a leader in the Gartner Magic Quadrant for two consecutive years.", label: "Industry Leader" },
    ],
  } = props;

  const primary = theme?.primary || "#475569";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-60 text-center mb-12">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex gap-4 p-6 rounded-xl" style={{ backgroundColor: `${primary}05` }}>
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center" style={{ borderColor: primary, color: primary }}>
                    <Icon size={22} />
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2" style={{ backgroundColor: `${primary}12`, color: primary }}>
                    {item.label || badgeLabels[i % badgeLabels.length]}
                  </span>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
