import type { BlockProps } from "@/blocks/types";
import { Mail, Calendar, FileText, Settings, Search, Star } from "lucide-react";

const iconMap = [Mail, Calendar, FileText, Settings, Search, Star];

const defaults = [
  { title: "Email Campaigns" },
  { title: "Event Scheduling" },
  { title: "Document Editor" },
  { title: "Custom Settings" },
  { title: "Smart Search" },
  { title: "Reviews & Ratings" },
];

export default function Features020(props: BlockProps) {
  const {
    theme,
    heading = "Everything in One Place",
    subheading = "Six core tools to run your business",
    items = defaults,
  } = props;

  const primary = theme?.primary || "#ec4899";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl px-4 py-4 transition-colors duration-200"
                style={{ backgroundColor: `${primary}08`, border: `1px solid ${theme?.accent || "#e5e7eb"}` }}
              >
                <Icon size={20} className="shrink-0" style={{ color: primary }} />
                <span className="text-sm font-medium truncate">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
