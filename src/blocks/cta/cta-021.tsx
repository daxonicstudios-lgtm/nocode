import type { BlockProps } from "@/blocks/types";
import { Users, Globe, Shield } from "lucide-react";

export default function Cta021(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by teams everywhere",
    subheading = "Join the growing community of businesses building with us.",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { title: "50K+", description: "Active users", icon: "users" },
      { title: "120+", description: "Countries", icon: "globe" },
      { title: "99.9%", description: "Uptime SLA", icon: "shield" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    users: <Users className="w-5 h-5" />,
    globe: <Globe className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-10 grid grid-cols-3 gap-6">
          {items.slice(0, 3).map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: (theme?.primary ?? "#6366f1") + "15", color: theme?.primary ?? "#6366f1" }}>
                {iconMap[stat.icon ?? ""] ?? <Users className="w-5 h-5" />}
              </div>
              <div className="text-2xl font-black">{stat.title}</div>
              <div className="text-xs opacity-50 mt-0.5">{stat.description}</div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-10 inline-block px-8 py-3.5 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
