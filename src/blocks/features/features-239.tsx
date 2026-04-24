import type { BlockProps } from "@/blocks/types";
import { Terminal, Server, Globe } from "lucide-react";

const icons = [Terminal, Server, Globe];

export default function Features239(props: BlockProps) {
  const {
    theme,
    heading = "Built by Engineers",
    subheading = "Developer-grade features with a typewriter aesthetic",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "CLI Tools", description: "Full command-line interface for power users who live in the terminal." },
      { title: "Infrastructure as Code", description: "Define your entire stack in declarative config files." },
      { title: "Global Edge Network", description: "Deploy serverless functions to every continent in seconds." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes feat239type {
          from { width: 0; }
          to { width: 100%; }
        }
        .feat239-heading {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid ${primary};
          animation: feat239type 2s steps(30) 1 forwards;
          display: inline-block;
          max-width: 100%;
        }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="feat239-heading text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 text-left font-mono" style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}20` }}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={18} style={{ color: primary }} />
                  <span className="text-xs opacity-40">feature-{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed font-sans">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium font-sans" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
