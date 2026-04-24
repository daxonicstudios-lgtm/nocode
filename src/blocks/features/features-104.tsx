import type { BlockProps } from "@/blocks/types";
import { Settings, Users, TrendingUp, Award, Cpu, Heart } from "lucide-react";

const icons = [Settings, Users, TrendingUp, Award, Cpu, Heart];

export default function Features104(props: BlockProps) {
  const {
    theme,
    heading = "Feature Timeline",
    subheading = "Every feature built with purpose",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Automation", description: "Automate repetitive tasks and free up your team for creative work." },
      { title: "Team Collaboration", description: "Real-time editing and commenting keeps everyone in sync." },
      { title: "Growth Tools", description: "SEO, email capture, and analytics baked right in." },
      { title: "Award-Winning Support", description: "Our support team responds in under 5 minutes on average." },
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
          <div className="absolute left-5 top-0 bottom-0 w-px opacity-30" style={{ backgroundColor: theme?.foreground || "#333" }} />
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative flex items-start mb-10 pl-14">
                <div className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className="rounded-xl p-5 border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-6">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
