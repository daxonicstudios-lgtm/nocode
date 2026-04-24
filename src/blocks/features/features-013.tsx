import type { BlockProps } from "@/blocks/types";
import { Rocket, Users, HeadphonesIcon } from "lucide-react";

const iconMap = [Rocket, Users, HeadphonesIcon];

const defaults = [
  { title: "Quick Onboarding", description: "Get your team up and running in under 5 minutes with guided setup.", icon: "rocket" },
  { title: "Team Collaboration", description: "Work together in real time with built-in comments and approvals.", icon: "users" },
  { title: "24/7 Support", description: "Our support team is always available to help you succeed.", icon: "headphones" },
];

export default function Features013(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need to Grow",
    subheading = "Powerful features with clear next steps",
    buttonText = "Learn More",
    buttonUrl = "#",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60 mb-12 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div
                key={i}
                className="rounded-xl p-8 flex flex-col items-center text-center"
                style={{ border: `1px solid ${theme?.accent || "#e5e7eb"}` }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary || "#10b981", color: "#fff" }}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 mb-6 leading-relaxed">{item.description}</p>
                <a
                  href={buttonUrl}
                  className="mt-auto inline-block rounded-lg px-5 py-2 text-sm font-medium text-white"
                  style={{ backgroundColor: theme?.primary || "#10b981" }}
                >
                  {buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
