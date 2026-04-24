import type { BlockProps } from "@/blocks/types";
import { Film, Music, ImageIcon, FileText } from "lucide-react";

const media = [
  { icon: Film, type: "Video" },
  { icon: Music, type: "Audio" },
  { icon: ImageIcon, type: "Image" },
  { icon: FileText, type: "Document" },
];

export default function Features336(props: BlockProps) {
  const {
    theme,
    heading = "Mixed Media Features",
    subheading = "Content creation tools for every format",
    items = [
      { title: "Video Editor", description: "Trim, splice, and add effects to video content right in the browser." },
      { title: "Audio Studio", description: "Record, mix, and publish podcasts with professional quality." },
      { title: "Image Toolkit", description: "Crop, filter, and optimize images for any platform or screen." },
      { title: "Document Builder", description: "Create rich documents with embedded media and interactive elements." },
    ],
  } = props;

  const primary = theme?.primary || "#8b5cf6";

  return (
    <section style={{ backgroundColor: theme?.background || "#faf5ff", color: theme?.foreground || "#1a1a1a" }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-black mb-2">{heading}</h2>
        <p className="opacity-60 mb-14">{subheading}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const m = media[i % media.length];
            const Icon = m.icon;
            return (
              <div key={i} className="rounded-2xl p-5 text-center" style={{ backgroundColor: theme?.background || "#fff", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
                <div className="w-16 h-16 rounded-xl mx-auto flex items-center justify-center mb-3" style={{ background: `linear-gradient(135deg, ${primary}20, ${primary}08)` }}>
                  <Icon size={28} style={{ color: primary }} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 block mb-2">{m.type}</span>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
