import type { BlockProps } from "@/blocks/types";
import { Workflow, Users, Clock, Award } from "lucide-react";

const icons = [Workflow, Users, Clock, Award];

export default function Features206(props: BlockProps) {
  const {
    theme,
    heading = "Platform Highlights",
    subheading = "Four pillars that drive exceptional outcomes",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Automation", description: "Eliminate repetitive tasks with intelligent workflow automation." },
      { title: "Collaboration", description: "Real-time editing and commenting across unlimited team members." },
      { title: "Time Savings", description: "Cut project timelines by up to 60% with smart templates." },
      { title: "Award-Winning", description: "Recognized by industry leaders for design and reliability." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-6 max-w-xl mx-auto">{subheading}</p>
        <div className="w-24 h-0.5 mx-auto mb-14" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="border-t-2 pt-6 text-center" style={{ borderColor: theme?.primary || "#6366f1" }}>
                <Icon size={28} className="mx-auto mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
