import type { BlockProps } from "@/blocks/types";
import { Wand2, Eye, Repeat, Workflow } from "lucide-react";

const icons = [Wand2, Eye, Repeat, Workflow];

export default function Features225(props: BlockProps) {
  const {
    theme,
    heading = "Layered Intelligence",
    subheading = "Features that build on each other for compounding value",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Auto-Generate", description: "Create content, layouts, and code with a single prompt." },
      { title: "Preview", description: "See exactly how changes look before they go live." },
      { title: "Iterate", description: "Refine with version history and one-click rollback." },
      { title: "Automate", description: "Set rules that trigger actions on your behalf." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center sm:text-left">{heading}</h2>
        <p className="text-base opacity-70 mb-12 max-w-lg text-center sm:text-left">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const offset = i % 2 === 1 ? "sm:translate-y-6" : "";
            return (
              <div key={i} className={`p-6 rounded-2xl border-2 ${offset}`} style={{ borderColor: `${primary}20` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${primary}12`, color: primary }}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold opacity-30">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
