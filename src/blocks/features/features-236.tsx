import type { BlockProps } from "@/blocks/types";
import { FileText, Workflow, Users, Clock } from "lucide-react";

const icons = [FileText, Workflow, Users, Clock];

export default function Features236(props: BlockProps) {
  const {
    theme,
    heading = "Thoughtful Details",
    subheading = "Subtle animations that make every interaction feel intentional",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Document Hub", description: "Central repository for all your team's files and knowledge." },
      { title: "Process Builder", description: "Visual workflow designer with conditional branching." },
      { title: "Team Directory", description: "Find the right person for every task instantly." },
      { title: "Time Tracker", description: "Automatic logging that never interrupts your flow." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        .feat236-title { position: relative; display: inline-block; }
        .feat236-title::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: ${primary};
          transition: width 0.3s ease;
        }
        .feat236-card:hover .feat236-title::after { width: 100%; }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="feat236-card p-6 rounded-xl text-left cursor-pointer" style={{ backgroundColor: `${primary}04` }}>
                <div className="flex items-start gap-4">
                  <Icon size={22} className="mt-1 shrink-0" style={{ color: primary }} />
                  <div>
                    <h3 className="feat236-title text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
