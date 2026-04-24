import type { BlockProps } from "@/blocks/types";
import { Box, Cloud, Database, Workflow } from "lucide-react";

const icons = [Box, Cloud, Database, Workflow];

export default function Features238(props: BlockProps) {
  const {
    theme,
    heading = "Depth & Dimension",
    subheading = "Features arranged with subtle parallax-inspired offsets",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Container Runtime", description: "Isolated environments for every service in your architecture." },
      { title: "Cloud Storage", description: "Unlimited object storage with intelligent tiering for cost savings." },
      { title: "Query Engine", description: "Sub-second queries across billions of rows with automatic indexing." },
      { title: "Flow Control", description: "Orchestrate complex multi-step processes with visual diagrams." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";
  const offsets = [0, 16, 4, 20];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl border p-6 text-center" style={{ borderColor: `${primary}20`, marginTop: `${offsets[i % offsets.length]}px` }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${primary}10`, color: primary }}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-xs opacity-60 leading-relaxed">{item.description}</p>
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
