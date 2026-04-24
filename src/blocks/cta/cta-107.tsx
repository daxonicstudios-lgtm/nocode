import type { BlockProps } from "@/blocks/types";
import { Cloud, Lock, Settings, Users, Cpu, Mail } from "lucide-react";

export default function Cta107(props: BlockProps) {
  const {
    theme,
    heading = "Powerful Features, Simple Setup",
    subheading = "Get access to all tools your team needs.",
    buttonText = "Try Free for 14 Days",
    buttonUrl = "#",
    items = [
      { title: "Cloud Storage" },
      { title: "Team Access" },
      { title: "Automation" },
      { title: "Security" },
      { title: "API Access" },
      { title: "Email Support" },
    ],
  } = props;

  const icons = [Cloud, Users, Settings, Lock, Cpu, Mail];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
          <p className="opacity-70">{subheading}</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {items.slice(0, 6).map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex flex-col items-center gap-1 p-3 rounded-lg border text-center">
                <Icon className="w-5 h-5" style={{ color: theme?.primary || "#2563eb" }} />
                <span className="text-xs font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
