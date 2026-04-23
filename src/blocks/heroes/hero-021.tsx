import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, Globe, Layers, BarChart3, Users } from "lucide-react";

const defaultItems = [
  { title: "Lightning Fast", icon: "zap" },
  { title: "Secure by Default", icon: "shield" },
  { title: "Global Reach", icon: "globe" },
  { title: "Modular Design", icon: "layers" },
  { title: "Real-Time Analytics", icon: "bar-chart" },
  { title: "Team Collaboration", icon: "users" },
];

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  shield: Shield,
  globe: Globe,
  layers: Layers,
  "bar-chart": BarChart3,
  users: Users,
};

export default function Hero021(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need to Build Faster",
    subheading = "A complete toolkit designed to help you launch your next project with confidence.",
    items = defaultItems,
  } = props;

  return (
    <section
      className="px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {heading}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base opacity-70 sm:text-lg">
          {subheading}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
          {items.slice(0, 6).map((item, i) => {
            const IconComponent = iconMap[item.icon ?? ""] ?? Zap;
            return (
              <div key={i} className="flex flex-col items-center gap-3">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: theme?.primary
                      ? `${theme.primary}18`
                      : "#6366f118",
                    color: theme?.primary ?? "#6366f1",
                  }}
                >
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium sm:text-base">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
