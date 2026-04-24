import type { BlockProps } from "@/blocks/types";
import { Camera, Pen, Monitor, Layers } from "lucide-react";

const icons = [Camera, Pen, Monitor, Layers];

export default function Features331(props: BlockProps) {
  const {
    theme,
    heading = "Our Services",
    subheading = "Creative solutions for bold brands",
    items = [
      { title: "Brand Photography", description: "Cinematic visuals that tell your brand story and stop the scroll." },
      { title: "Identity Design", description: "Logos, typography, and visual systems that feel unmistakably you." },
      { title: "Web Development", description: "Fast, beautiful websites built with modern frameworks and clean code." },
      { title: "Motion Design", description: "Animations and video content that bring your message to life." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#0f0f0f", color: theme?.foreground || "#fafafa" }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-2">{heading}</h2>
        <p className="opacity-50 mb-12 text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" style={{ backgroundColor: `${primary}15` }}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity">
                  <Icon size={120} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: primary }}>0{i + 1}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
