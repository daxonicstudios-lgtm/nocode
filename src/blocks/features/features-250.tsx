import type { BlockProps } from "@/blocks/types";
import { Camera, Image, Film } from "lucide-react";

const icons = [Camera, Image, Film];

export default function Features250(props: BlockProps) {
  const {
    theme,
    heading = "Feature Gallery",
    subheading = "Snapshot moments of what our platform delivers",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Visual Editor", description: "Drag-and-drop interface with pixel-perfect control.", imageUrl: "" },
      { title: "Media Library", description: "Organize, edit, and serve images with automatic optimization.", imageUrl: "" },
      { title: "Video Platform", description: "Host, stream, and embed videos with adaptive bitrate.", imageUrl: "" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#fafaf9", color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-base opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const rotation = i === 0 ? "-3deg" : i === 2 ? "3deg" : "0deg";
            return (
              <div key={i} className="mx-auto" style={{ transform: `rotate(${rotation})` }}>
                <div className="bg-white p-3 pb-12 shadow-lg rounded-sm" style={{ maxWidth: "260px" }}>
                  <div className="aspect-[4/3] rounded-sm flex items-center justify-center mb-3" style={{ backgroundColor: `${primary}10` }}>
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover rounded-sm" />
                    ) : (
                      <Icon size={40} style={{ color: `${primary}40` }} />
                    )}
                  </div>
                  <div className="text-center" style={{ color: "#1c1917" }}>
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs opacity-60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
