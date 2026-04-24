import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];
const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];
const bgColors = ["#fef3c7", "#dbeafe", "#fce7f3", "#d1fae5", "#ede9fe", "#fff7ed"];

export default function Features145(props: BlockProps) {
  const {
    theme,
    heading = "Feature Board",
    subheading = "Pinned notes from our product team",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Auto Save", description: "Every change is saved in real time. Never lose work again." },
      { title: "Role Access", description: "Assign admin, editor, or viewer roles to team members." },
      { title: "Live Preview", description: "See changes reflected instantly across all device sizes." },
      { title: "SEO Scanner", description: "Automated checks for meta tags, headings, and page speed." },
      { title: "Theme Engine", description: "Switch between light, dark, and custom color schemes." },
      { title: "Webhooks", description: "Connect form submissions to Slack, email, or any API." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className={`rounded-lg p-6 shadow-md ${rotations[i % rotations.length]} hover:rotate-0 transition-transform`} style={{ backgroundColor: bgColors[i % bgColors.length], color: "#1f2937" }}>
                <Icon size={20} className="mb-3 opacity-70" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
