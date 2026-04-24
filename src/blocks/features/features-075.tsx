import type { BlockProps } from "@/blocks/types";
import { Sparkles, Palette, MousePointer, Layers } from "lucide-react";

const icons = [Sparkles, Palette, MousePointer, Layers];

export default function Features075(props: BlockProps) {
  const {
    theme,
    heading = "Beautiful by Default",
    subheading = "UI components that look polished from day one",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/320x200",
    items = [
      { title: "Smart Components", description: "Pre-built elements that adapt to your brand colors and typography automatically." },
      { title: "Theme Engine", description: "Switch between light, dark, and custom themes with a single toggle." },
      { title: "Drag & Drop", description: "Rearrange any element on the page with intuitive drag and drop controls." },
      { title: "Layer Management", description: "Organize complex layouts with a visual layer panel inspired by design tools." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="relative">
                  <div className="rounded-xl overflow-hidden shadow-md mb-4 transform rotate-1 hover:rotate-0 transition-transform">
                    <img src={imageUrl} alt={item.title || ""} className="w-full h-40 object-cover" />
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon size={20} className="mt-1 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="opacity-60 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
