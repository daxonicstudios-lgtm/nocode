import type { BlockProps } from "@/blocks/types";
import { Zap, Target, Clock, Shield } from "lucide-react";

const icons = [Zap, Target, Clock, Shield];
const underlineColors = ["#6366f1", "#ec4899", "#f59e0b", "#10b981"];

export default function Features285(props: BlockProps) {
  const {
    theme,
    heading = "Why Teams Love Us",
    subheading = "Simple, powerful features that make a real difference",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Blazing Speed", description: "Every interaction responds in under 100ms for a snappy experience." },
      { title: "Laser Focus", description: "Distraction-free workspace keeps your team in the zone." },
      { title: "Time Saver", description: "Automate repetitive tasks and save 10+ hours per week per team member." },
      { title: "Always Secure", description: "Enterprise security features included at every pricing tier." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#111827" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const color = theme?.primary || underlineColors[i % underlineColors.length];
            return (
              <div key={i} className="text-center">
                <Icon size={28} className="mx-auto mb-4" style={{ color }} />
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <div className="w-12 h-0.5 mx-auto my-3 rounded-full" style={{ backgroundColor: color }} />
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
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
