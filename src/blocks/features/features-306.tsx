import type { BlockProps } from "@/blocks/types";
import { ImageIcon, Palette, PenTool, Layout } from "lucide-react";

const icons = [ImageIcon, Palette, PenTool, Layout];

export default function Features306(props: BlockProps) {
  const {
    theme,
    heading = "Feature Highlights",
    subheading = "Visual stories that explain our strengths",
    items = [
      { title: "Visual Editor", description: "Drag, drop, and design without writing a single line of code." },
      { title: "Brand Kit", description: "Upload your logo, colors, and fonts — applied everywhere automatically." },
      { title: "Design System", description: "Consistent components that keep your brand pixel-perfect." },
      { title: "Responsive Layouts", description: "Looks great on any screen, from mobile to ultrawide." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-12 max-w-xl mx-auto">{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex flex-col md:flex-row rounded-xl overflow-hidden" style={{ border: `1px solid ${theme?.primary ? `${theme.primary}20` : "#e5e7eb"}` }}>
                <div className="md:w-1/2 h-48 md:h-auto flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#f3f4f6" }}>
                  <Icon size={48} style={{ color: theme?.primary || "#6366f1" }} className="opacity-30" />
                </div>
                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-60 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
