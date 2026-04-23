import type { BlockProps } from "@/blocks/types";
import { Upload, Cog, Send } from "lucide-react";

const iconMap = [Upload, Cog, Send];

const defaultItems = [
  { title: "Upload Your Content", description: "Import text, images, and data from any source in seconds." },
  { title: "Customize Everything", description: "Fine-tune colors, layout, and interactions to match your brand perfectly." },
  { title: "Publish Instantly", description: "Go live with one click and share your site with the world." },
];

export default function Features039(props: BlockProps) {
  const {
    theme,
    heading = "Three Steps to Launch",
    subheading = "A simple process from idea to live website",
    items = defaultItems,
  } = props;

  const accent = theme?.primary ?? "#3b82f6";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 items-start">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            const isLast = i === items.length - 1;
            return (
              <div key={i} className="relative text-center px-6">
                {!isLast && (
                  <div className="hidden sm:block absolute top-7 left-[60%] w-[80%] border-t-2 border-dashed" style={{ borderColor: `${accent}40` }} />
                )}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10"
                  style={{ backgroundColor: `${accent}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: accent }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2 block">Step {i + 1}</span>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="opacity-55 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
