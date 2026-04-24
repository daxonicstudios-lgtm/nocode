import type { BlockProps } from "@/blocks/types";
import { Flag, Code2, TestTube, Rocket, PartyPopper } from "lucide-react";

const icons = [Flag, Code2, TestTube, Rocket, PartyPopper];

export default function Features305(props: BlockProps) {
  const {
    theme,
    heading = "Our Development Journey",
    subheading = "Scroll through the milestones that shaped our product",
    items = [
      { title: "Ideation", description: "Research, user interviews, and concept validation." },
      { title: "Development", description: "Building the core engine with a focus on performance." },
      { title: "Beta Testing", description: "1,000 early adopters helped us refine every detail." },
      { title: "Launch", description: "Public release with full feature set and documentation." },
      { title: "Growth", description: "Scaling to 50,000+ users across 40 countries." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="overflow-x-auto pb-4">
          <div className="flex items-start gap-0 min-w-max px-4">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex flex-col items-center w-56">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center z-10" style={{ backgroundColor: theme?.primary || "#6366f1", color: "#fff" }}>
                    <Icon size={20} />
                  </div>
                  <div className="w-full h-0.5 -mt-6 mb-6" style={{ backgroundColor: theme?.primary ? `${theme.primary}30` : "#d1d5db" }} />
                  <h3 className="font-semibold text-base mb-1 mt-2">{item.title}</h3>
                  <p className="text-xs opacity-60 text-center px-2 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
