import type { BlockProps } from "@/blocks/types";
import { BarChart3, Users, Clock, Settings, Cpu, Rocket, TrendingUp, Wallet } from "lucide-react";

const icons = [BarChart3, Users, Clock, Settings, Cpu, Rocket, TrendingUp, Wallet];

export default function Features042(props: BlockProps) {
  const {
    theme,
    heading = "Powerful Capabilities",
    subheading = "Designed to scale with your business",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Analytics Dashboard", description: "Track every metric that matters to your growth." },
      { title: "Team Management", description: "Invite members and assign roles effortlessly." },
      { title: "Time Tracking", description: "Automatic logging so you never lose a billable hour." },
      { title: "Custom Workflows", description: "Automate repetitive tasks with drag-and-drop rules." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#e0e5ec", color: theme?.foreground ?? "#333" }} className="py-16 px-4 sm:px-8 lg:py-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 text-lg opacity-70">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={i}
              className="rounded-2xl p-6 text-center"
              style={{
                background: theme?.background ?? "#e0e5ec",
                boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff",
              }}
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff" }}
              >
                <Icon className="w-6 h-6" style={{ color: theme?.primary ?? "#6366f1" }} />
              </div>
              <h3 className="text-base font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="text-center mt-10">
          <a href={buttonUrl} className="inline-block px-6 py-3 rounded-full font-medium" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>{buttonText}</a>
        </div>
      )}
    </section>
  );
}
