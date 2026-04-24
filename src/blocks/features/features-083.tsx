import type { BlockProps } from "@/blocks/types";
import { Settings, RefreshCw, Workflow, Cog, Wrench, SlidersHorizontal } from "lucide-react";

const icons = [Settings, RefreshCw, Workflow, Cog, Wrench, SlidersHorizontal];

export default function Features083(props: BlockProps) {
  const {
    theme,
    heading = "Fine-Tuned Control",
    subheading = "Every setting at your fingertips",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Custom Workflows", description: "Define step-by-step processes that match your exact business logic." },
      { title: "Auto-Refresh", description: "Data updates in real time without manual page reloads." },
      { title: "Pipeline Builder", description: "Visual pipeline editor for complex multi-stage operations." },
      { title: "Configurations", description: "Environment-specific settings managed through a clean interface." },
      { title: "Maintenance Mode", description: "Toggle maintenance pages without touching any code." },
      { title: "Advanced Filters", description: "Drill down into any dataset with composable filter rules." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        .rotate-icon-083:hover .icon-inner-083 {
          transform: rotate(180deg);
        }
        .icon-inner-083 { transition: transform 0.5s ease; }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rotate-icon-083 rounded-xl border p-6 cursor-pointer hover:shadow-md transition-shadow" style={{ borderColor: `${theme?.foreground || "#000"}10` }}>
                <div className="icon-inner-083 w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }}>
                  <Icon size={24} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
