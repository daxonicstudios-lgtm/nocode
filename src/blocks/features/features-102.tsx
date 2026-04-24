import type { BlockProps } from "@/blocks/types";
import { Flag, Code2, Rocket, Star } from "lucide-react";

const icons = [Flag, Code2, Rocket, Star];

export default function Features102(props: BlockProps) {
  const {
    theme,
    heading = "Product Roadmap",
    subheading = "Follow our progress from idea to launch",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Concept", description: "Validated the idea with 500+ potential users." },
      { title: "Development", description: "Built the core platform with cutting-edge tech." },
      { title: "Launch", description: "Released to the public with full feature set." },
      { title: "Scale", description: "Grew to serve 10,000 customers worldwide." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative overflow-x-auto pb-4">
          <div className="flex items-start min-w-max gap-0">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex flex-col items-center text-center w-56 relative">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                    <Icon size={20} />
                  </div>
                  {i < items.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5" style={{ backgroundColor: theme?.accent || "#e5e7eb" }} />
                  )}
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed px-2">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
