import type { BlockProps } from "@/blocks/types";
import { Rocket, Puzzle, Eye, Wand2 } from "lucide-react";

const icons = [Puzzle, Eye, Wand2];

export default function Features208(props: BlockProps) {
  const {
    theme,
    heading = "One Platform, Infinite Possibilities",
    subheading = "Start with a powerful core and extend with supporting features",
    bodyText = "Our flagship feature gives you a complete workspace from day one — no setup required, no compromises made.",
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Plug-In Modules", description: "Add capabilities as your needs evolve." },
      { title: "Live Preview", description: "See changes instantly before publishing." },
      { title: "Magic Actions", description: "One-click automations for common tasks." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="rounded-2xl p-8 sm:p-12 mb-10 border-2" style={{ borderColor: theme?.primary || "#6366f1" }}>
          <Rocket size={40} className="mx-auto mb-4" style={{ color: theme?.primary || "#6366f1" }} />
          <h3 className="text-2xl font-bold mb-3">Flagship Workspace</h3>
          <p className="opacity-60 max-w-lg mx-auto">{bodyText}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 text-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "#f9fafb" }}>
                <Icon size={24} className="mx-auto mb-3" style={{ color: theme?.accent || "#f59e0b" }} />
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
