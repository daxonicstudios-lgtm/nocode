import type { BlockProps } from "@/blocks/types";
import { Layers, Cpu, Workflow, Lock, Sparkles } from "lucide-react";

const icons = [Layers, Cpu, Workflow, Lock, Sparkles];

export default function Features062(props: BlockProps) {
  const {
    theme,
    heading = "Smart Architecture",
    subheading = "Built on a foundation of modern engineering",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Modular Design", description: "Compose your stack from independent modules. Swap, extend, or remove without breaking anything." },
      { title: "AI Processing", description: "On-device machine learning handles predictions and suggestions instantly." },
      { title: "Automated Pipelines", description: "Deploy with confidence using CI/CD pipelines that test, build, and ship automatically." },
      { title: "Zero Trust Security", description: "Every request is verified. Every connection is encrypted. No exceptions." },
      { title: "Magic Suggestions", description: "Smart recommendations learn from your usage patterns to save time." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isTall = i === 0;
            return (
              <div
                key={i}
                className={`rounded-2xl border p-6 ${isTall ? "lg:row-span-2" : ""}`}
                style={{ borderColor: `${theme?.primary || "#6366f1"}22` }}
              >
                <Icon size={24} className="mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
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
