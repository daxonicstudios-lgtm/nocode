import type { BlockProps } from "@/blocks/types";
import { Database, Workflow, FileCode } from "lucide-react";

const icons = [Database, Workflow, FileCode];

export default function Features164(props: BlockProps) {
  const {
    theme,
    heading = "Developer Tools",
    subheading = "Everything you need in one platform",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Managed Database", description: "Postgres with automatic backups, scaling, and branching." },
      { title: "Workflow Engine", description: "Automate complex pipelines with visual orchestration." },
      { title: "Code Generation", description: "AI writes boilerplate so you focus on business logic." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center p-6">
                <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#eef2ff" }}>
                  <Icon size={40} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
