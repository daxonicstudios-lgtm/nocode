import type { BlockProps } from "@/blocks/types";
import { Play, Pause, SkipForward, Rewind } from "lucide-react";

const icons = [Play, Pause, SkipForward, Rewind];

export default function Features377(props: BlockProps) {
  const {
    theme,
    heading = "REWIND TO THE FUTURE",
    subheading = "Retro vibes, modern capabilities",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "PLAY", description: "One-click deploy gets your project running instantly." },
      { title: "PAUSE", description: "Freeze environments to debug without losing state." },
      { title: "FAST FORWARD", description: "Skip ahead with AI-powered code generation." },
      { title: "REWIND", description: "Roll back any change to any point in time." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#1a1a2e", color: theme?.foreground || "#e0d5c1" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 rounded-sm mb-4 border-2" style={{ borderColor: theme?.primary || "#e94560" }}>
            <p className="text-xs uppercase tracking-widest font-mono">VHS Collection</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider font-mono">{heading}</h2>
          <p className="text-sm mt-2 opacity-50 font-mono">{subheading}</p>
        </div>
        <div className="rounded-lg p-6 border-2" style={{ borderColor: theme?.foreground || "#e0d5c1", backgroundColor: "rgba(255,255,255,0.03)" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="flex items-start gap-4 p-3">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme?.primary || "#e94560" }}>
                    <Icon size={18} color="#fff" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-sm font-mono mb-1">{item.title}</h3>
                    <p className="text-xs opacity-50 font-mono leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t flex items-center gap-2" style={{ borderColor: `${theme?.foreground || "#e0d5c1"}33` }}>
            <div className="w-full h-1 rounded-full" style={{ backgroundColor: `${theme?.foreground || "#e0d5c1"}22` }}>
              <div className="w-2/3 h-full rounded-full" style={{ backgroundColor: theme?.primary || "#e94560" }} />
            </div>
            <span className="text-xs font-mono opacity-40">02:34</span>
          </div>
        </div>
      </div>
    </section>
  );
}
