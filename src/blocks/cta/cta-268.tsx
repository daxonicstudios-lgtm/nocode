import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta268(props: BlockProps) {
  const {
    theme,
    heading = "Built for Modern Teams",
    subheading = "Seamless integrations with the tools you already use.",
    buttonText = "See Integrations",
    buttonUrl = "#",
    items = [
      { title: "Slack" }, { title: "Notion" }, { title: "Figma" },
      { title: "Jira" }, { title: "Asana" }, { title: "Trello" },
      { title: "Zapier" }, { title: "HubSpot" }, { title: "Stripe" },
      { title: "Vercel" },
    ],
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-full border" style={{ borderColor: theme?.secondary ?? "#e2e8f0" }}>
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                {item.title?.[0]}
              </div>
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
