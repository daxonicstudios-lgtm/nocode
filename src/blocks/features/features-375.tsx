import type { BlockProps } from "@/blocks/types";
import { Zap, Radio, Volume2, Disc3 } from "lucide-react";

const icons = [Zap, Radio, Volume2, Disc3];
const neonColors = ["#ff00ff", "#00ffff", "#ff6600", "#00ff66"];

export default function Features375(props: BlockProps) {
  const {
    theme,
    heading = "NEON NIGHTS",
    subheading = "Features that glow in the dark",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "ELECTRIC", description: "Instant responses powered by edge computing." },
      { title: "BROADCAST", description: "Real-time updates pushed to all connected clients." },
      { title: "AMPLIFY", description: "Scale your message across every channel simultaneously." },
      { title: "REMIX", description: "Mix and match components to create unique layouts." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground || "#fff" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wider" style={{ textShadow: `0 0 20px ${theme?.primary || "#ff00ff"}, 0 0 40px ${theme?.primary || "#ff00ff"}44` }}>{heading}</h2>
          <p className="text-sm mt-3 uppercase tracking-widest opacity-50">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const neon = neonColors[i % neonColors.length];
            return (
              <div key={i} className="rounded-lg p-6 border" style={{ borderColor: theme?.primary || neon, boxShadow: `0 0 15px ${theme?.primary || neon}44, inset 0 0 15px ${theme?.primary || neon}11`, backgroundColor: "rgba(255,255,255,0.03)" }}>
                <Icon size={28} className="mb-3" style={{ color: theme?.primary || neon, filter: `drop-shadow(0 0 8px ${theme?.primary || neon})` }} />
                <h3 className="font-bold text-lg uppercase mb-2" style={{ color: theme?.primary || neon }}>{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
