import type { BlockProps } from "@/blocks/types";
import { FileText, Image, Video, Music, Database, Code } from "lucide-react";

export default function Cta108(props: BlockProps) {
  const {
    theme,
    heading = "All Your Content, One Platform",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { title: "Documents" },
      { title: "Images" },
      { title: "Videos" },
      { title: "Audio" },
      { title: "Data" },
      { title: "Code" },
    ],
  } = props;

  const icons = [FileText, Image, Video, Music, Database, Code];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.accent || "#f0f9ff", color: theme?.foreground }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="grid grid-cols-3 gap-3 flex-shrink-0">
          {items.slice(0, 6).map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="w-20 h-20 rounded-xl bg-white shadow flex flex-col items-center justify-center gap-1">
                <Icon className="w-5 h-5" style={{ color: theme?.primary || "#2563eb" }} />
                <span className="text-[10px] font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
          <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
