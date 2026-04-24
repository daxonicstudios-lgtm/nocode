import type { BlockProps } from "@/blocks/types";
import { Megaphone, TrendingUp, Eye, Handshake } from "lucide-react";

const iconMap = [Megaphone, TrendingUp, Eye, Handshake];

const defaultItems = [
  { title: "Campaign Builder", description: "Launch multi-channel campaigns that reach your audience wherever they are." },
  { title: "Growth Engine", description: "Built-in SEO and performance tools to accelerate your organic traffic." },
  { title: "Brand Visibility", description: "Track how your brand is perceived with sentiment analysis and mentions." },
  { title: "Partner Portal", description: "Collaborate with affiliates and partners through a dedicated dashboard." },
];

export default function Features040(props: BlockProps) {
  const {
    theme,
    heading = "Amplify Your Impact",
    subheading = "Bold tools for bold brands ready to grow",
    items = defaultItems,
  } = props;

  return (
    <section
      className="py-16 px-4 sm:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"}, ${theme?.accent ?? "#ec4899"})`,
        color: theme?.foreground ?? "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">{heading}</h2>
          <p className="text-lg opacity-80 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="rounded-2xl p-6 text-center backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm opacity-75 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
