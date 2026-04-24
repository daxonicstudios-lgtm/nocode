import type { BlockProps } from "@/blocks/types";
import { PenTool, Camera, Music, Video, FileText, Mic } from "lucide-react";

const icons = [PenTool, Camera, Music, Video, FileText, Mic];
const groupLabels = ["Creative Tools", "Media Suite"];

export default function Features360(props: BlockProps) {
  const {
    theme,
    heading = "Complete Creative Suite",
    subheading = "Everything you need to create, edit, and publish",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Design Editor", description: "Vector and raster editing in one tool." },
      { title: "Photo Studio", description: "Professional retouching and filters." },
      { title: "Audio Mixer", description: "Multi-track editing with effects." },
      { title: "Video Editor", description: "Timeline-based editing with transitions." },
      { title: "Doc Writer", description: "Rich text with collaboration features." },
      { title: "Voice Recorder", description: "High-fidelity recording and transcription." },
    ],
  } = props;

  const groups = [items.slice(0, 3), items.slice(3, 6)];

  return (
    <section style={{ backgroundColor: theme?.background || "#e3e3e3", color: theme?.foreground || "#374151" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="space-y-10">
          {groups.map((group, gi) => (
            <div key={gi}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-50">{groupLabels[gi] || `Group ${gi + 1}`}</h3>
              <div className="rounded-3xl p-6" style={{ background: theme?.background || "#e3e3e3", boxShadow: "10px 10px 20px #bfbfbf, -10px -10px 20px #ffffff" }}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {group.map((item, i) => {
                    const Icon = icons[(gi * 3 + i) % icons.length];
                    return (
                      <div key={i} className="rounded-xl p-4 text-center" style={{ background: theme?.background || "#e3e3e3", boxShadow: "inset 4px 4px 8px #bfbfbf, inset -4px -4px 8px #ffffff" }}>
                        <Icon size={22} className="mx-auto mb-2" style={{ color: theme?.primary || "#8b5cf6" }} />
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs opacity-50">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
