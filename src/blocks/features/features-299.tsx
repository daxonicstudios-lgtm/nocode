import type { BlockProps } from "@/blocks/types";
import { Users, Download, Globe, Star } from "lucide-react";

const icons = [Users, Download, Globe, Star];

export default function Features299(props: BlockProps) {
  const {
    theme,
    heading = "The Numbers Speak",
    subheading = "Measurable results from teams who made the switch",
    bodyText,
    buttonText = "See Case Studies",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Active Teams", description: "Organizations using the platform daily to build and ship products.", value: "12,000+" },
      { title: "Projects Shipped", description: "Products launched using our tools in the past 12 months.", value: "89,000+" },
      { title: "Countries Reached", description: "Teams on every continent trust us with their critical workflows.", value: "140+" },
      { title: "Satisfaction Score", description: "Average customer satisfaction rating across all plans and regions.", value: "4.9/5" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 text-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}06` : "#f8fafc" }}>
                <Icon size={24} className="mx-auto mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <div className="text-3xl font-bold mb-1" style={{ color: theme?.primary || "#6366f1" }}>{item.value}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
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
