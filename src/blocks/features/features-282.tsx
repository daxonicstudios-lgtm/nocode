import type { BlockProps } from "@/blocks/types";
import { Home, Heart, Utensils, Camera } from "lucide-react";

const icons = [Home, Heart, Utensils, Camera];

export default function Features282(props: BlockProps) {
  const {
    theme,
    heading = "Made With Care",
    subheading = "Every detail crafted to feel warm, personal, and inviting",
    bodyText,
    buttonText = "Learn More",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Cozy Interface", description: "Warm tones and gentle animations create a welcoming experience." },
      { title: "Personal Touch", description: "Customize greetings, layouts, and color palettes to match your brand." },
      { title: "Recipe Builder", description: "Step-by-step guides for creating the perfect content every time." },
      { title: "Snapshot History", description: "Visual timeline of every version so you can revisit your best work." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fffbeb", color: theme?.foreground || "#451a03" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#fef3c7", color: theme?.primary || "#b45309" }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: theme?.primary || "#b45309" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
