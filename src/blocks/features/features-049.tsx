import type { BlockProps } from "@/blocks/types";
import { Workflow, Database, Mail, FileText, PieChart, Boxes } from "lucide-react";

const icons = [Workflow, Database, Mail, FileText, PieChart, Boxes];

export default function Features049(props: BlockProps) {
  const {
    theme,
    heading = "Core Platform Features",
    subheading = "Reliable tools your team can depend on",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Workflow Automation", description: "Build custom pipelines that run while you sleep." },
      { title: "Managed Database", description: "Fully hosted with automatic scaling and backups." },
      { title: "Transactional Email", description: "Send templated emails with 99.8% deliverability." },
    ],
  } = props;

  const accent = theme?.primary ?? "#ec4899";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-8 lg:py-24">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 text-base opacity-70 max-w-xl mx-auto">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="relative rounded-xl p-[2px] overflow-hidden" style={{ background: `linear-gradient(135deg, ${accent}, ${theme?.accent ?? "#8b5cf6"}, ${accent})` }}>
              <div className="rounded-xl p-6 h-full" style={{ backgroundColor: theme?.background ?? "#fff" }}>
                <Icon className="w-7 h-7 mb-4" style={{ color: accent }} />
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="text-center mt-10">
          <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ background: `linear-gradient(135deg, ${accent}, ${theme?.accent ?? "#8b5cf6"})` }}>{buttonText}</a>
        </div>
      )}
    </section>
  );
}
