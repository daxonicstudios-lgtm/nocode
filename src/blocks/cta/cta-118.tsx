import type { BlockProps } from "@/blocks/types";
import { UserPlus, Wand2, Rocket } from "lucide-react";

export default function Cta118(props: BlockProps) {
  const {
    theme,
    heading = "Ready in Minutes, Not Months",
    buttonText = "Start Building",
    buttonUrl = "#",
    items = [
      { title: "Create Account", description: "Quick signup, no credit card needed." },
      { title: "Design Your Site", description: "Drag, drop, and customize." },
      { title: "Go Live", description: "Publish to your custom domain." },
    ],
  } = props;

  const icons = [UserPlus, Wand2, Rocket];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {items.slice(0, 3).map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase opacity-50">Step {i + 1}</span>
                <h3 className="font-bold mt-1">{item.title}</h3>
                <p className="text-sm opacity-70 mt-1">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
