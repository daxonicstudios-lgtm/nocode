import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta271(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need",
    subheading = "One platform. Infinite possibilities.",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { title: "Analytics" }, { title: "Automation" }, { title: "Collaboration" },
      { title: "Security" }, { title: "API Access" }, { title: "Integrations" },
      { title: "Custom Domains" }, { title: "SSO" }, { title: "Webhooks" },
      { title: "Templates" }, { title: "White Label" }, { title: "Support" },
    ],
  } = props;

  return (
    <section className="py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
      </div>
      <div className="mt-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 w-max">
          {items.map((item, i) => (
            <span key={i} className="shrink-0 px-5 py-2.5 rounded-full text-sm font-medium border" style={{ borderColor: theme?.primary ?? "#6366f1", color: theme?.primary ?? "#6366f1" }}>
              {item.title}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
