import type { BlockProps } from "@/blocks/types";
import { Smartphone, Tablet, Monitor } from "lucide-react";

const icons = [Smartphone, Tablet, Monitor];

export default function Features189(props: BlockProps) {
  const {
    theme,
    heading = "Multi-Device Ready",
    subheading = "Perfect on every screen size",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Mobile First", description: "Designed for phones with touch-friendly interactions." },
      { title: "Tablet Optimized", description: "Layouts adapt beautifully for tablet viewports." },
      { title: "Desktop Power", description: "Full-featured experience with keyboard shortcuts." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative rounded-xl p-8 pt-10 shadow-sm overflow-hidden" style={{ backgroundColor: theme?.foreground ? `${theme.foreground}05` : "#f9fafb" }}>
                <div className="absolute top-0 left-0 right-0 h-2 flex justify-center">
                  <div className="w-12 h-full rounded-b-lg" style={{ backgroundColor: primary }} />
                </div>
                <Icon size={24} className="mb-4" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
