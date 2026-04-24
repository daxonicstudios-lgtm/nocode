import type { BlockProps } from "@/blocks/types";
import { Zap, Star, Shield, Rocket } from "lucide-react";

const icons = [Zap, Star, Shield, Rocket];
const panelColors = ["#fef08a", "#bfdbfe", "#bbf7d0", "#fecaca"];

export default function Features247(props: BlockProps) {
  const {
    theme,
    heading = "Feature Comics",
    subheading = "Each panel tells a story of what you can build",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "POW!", description: "Instant page generation that hits hard and loads fast." },
      { title: "ZOOM!", description: "Blisteringly quick search across every file and record." },
      { title: "SHIELD!", description: "Impenetrable defense against attacks and data breaches." },
      { title: "LAUNCH!", description: "From zero to production in a single, satisfying click." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#fafafa", color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-3 uppercase tracking-tight">{heading}</h2>
          <p className="text-base opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 border-4 border-black relative overflow-hidden" style={{ backgroundColor: panelColors[i % panelColors.length], color: "#1c1917" }}>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-xs font-black">{i + 1}</div>
                <Icon size={36} className="mb-3" style={{ color: "#1c1917" }} />
                <h3 className="text-2xl font-black mb-2 uppercase italic">{item.title}</h3>
                <p className="text-sm leading-relaxed font-medium">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-bold uppercase" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
