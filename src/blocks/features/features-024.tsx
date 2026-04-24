import type { BlockProps } from "@/blocks/types";
import { BookOpen, Wrench, Users, TrendingUp } from "lucide-react";

const iconMap = [BookOpen, Wrench, Users, TrendingUp];

const defaults = [
  {
    title: "Comprehensive Documentation",
    description: "Every endpoint, method, and parameter is documented with live examples. Our interactive playground lets you test API calls before writing a single line of code.",
  },
  {
    title: "Developer Tooling",
    description: "CLI tools, SDKs for every major language, and IDE extensions that bring autocomplete and linting right into your workflow. Ship features faster with less boilerplate.",
  },
  {
    title: "Team Collaboration",
    description: "Shared workspaces with granular permissions, real-time editing, and version history. Keep your entire team aligned without meetings or email chains.",
  },
  {
    title: "Growth Analytics",
    description: "Track adoption, engagement, and retention with built-in dashboards. Set custom goals and get automated reports delivered weekly to your inbox.",
  },
];

export default function Features024(props: BlockProps) {
  const {
    theme,
    heading = "Built for Builders",
    subheading = "Detailed tools designed to support every stage of your product lifecycle.",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.slice(0, 4).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i}>
                <Icon size={32} className="mb-4" style={{ color: theme?.primary ?? "#2563eb" }} />
                <h3 className="text-xl font-bold mb-3">{item.title ?? defaults[i]?.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description ?? defaults[i]?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
