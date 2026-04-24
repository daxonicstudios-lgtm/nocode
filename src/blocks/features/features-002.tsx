import type { BlockProps } from "@/blocks/types";
import { Globe, Lock, Cpu, Headphones } from "lucide-react";

const icons = [Globe, Lock, Cpu, Headphones];
const bgColors = ["#eef2ff", "#fef3c7", "#ecfdf5", "#fce7f3"];

export default function Features002(props: BlockProps) {
  const {
    theme,
    heading = "Powerful Features",
    subheading = "Built for teams that move fast and ship with confidence",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Global CDN", description: "Content delivered from 200+ edge locations worldwide." },
      { title: "Access Control", description: "Fine-grained permissions for every team member." },
      { title: "Smart Automation", description: "Automate repetitive tasks with no-code workflows." },
      { title: "24/7 Support", description: "Real humans ready to help whenever you need it." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-xl mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="border rounded-xl p-6 text-center" style={{ borderColor: theme?.accent ? `${theme.accent}33` : "#e5e7eb" }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ backgroundColor: bgColors[i % bgColors.length] }}>
                  <Icon size={24} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
