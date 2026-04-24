import type { BlockProps } from "@/blocks/types";
import { Eye, Headphones, FileText, Megaphone } from "lucide-react";

const icons = [Eye, Headphones, FileText, Megaphone];

export default function Features307(props: BlockProps) {
  const {
    theme,
    heading = "Panoramic Features",
    subheading = "A wider perspective on what we offer",
    items = [
      { title: "360° Visibility", description: "See every aspect of your business from a single unified dashboard." },
      { title: "Audio Transcription", description: "Convert meetings and calls into searchable, shareable notes." },
      { title: "Document Hub", description: "Centralized storage with smart search and version control." },
      { title: "Campaign Manager", description: "Plan, launch, and measure marketing campaigns end to end." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="space-y-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden flex items-end p-6"
                style={{ background: `linear-gradient(135deg, ${theme?.primary || "#6366f1"}20, ${theme?.accent || "#8b5cf6"}30)` }}
              >
                <div className="absolute top-4 right-4 opacity-20">
                  <Icon size={64} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-70 max-w-lg">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
