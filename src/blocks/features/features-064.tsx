import type { BlockProps } from "@/blocks/types";
import { Camera, Paintbrush, Wand2, Type } from "lucide-react";

const icons = [Camera, Paintbrush, Wand2, Type];

export default function Features064(props: BlockProps) {
  const {
    theme,
    heading = "Creative Tools",
    subheading = "Design beautiful content without a design team",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/600x400",
    items = [
      { title: "Photo Editor", description: "Crop, filter, and enhance images directly in your browser.", imageUrl: "https://placehold.co/600x400/4f46e5/ffffff?text=Photo+Editor" },
      { title: "Brand Kit", description: "Store your colors, fonts, and logos in one organized brand kit.", imageUrl: "https://placehold.co/600x300/8b5cf6/ffffff?text=Brand+Kit" },
      { title: "Magic Resize", description: "Automatically adapt designs for every screen size and platform.", imageUrl: "https://placehold.co/600x300/06b6d4/ffffff?text=Magic+Resize" },
      { title: "Typography", description: "Choose from 1,000+ fonts and fine-tune spacing, weight, and style.", imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Typography" },
    ],
  } = props;

  const gridClasses = ["md:col-span-2 md:row-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className={`relative rounded-2xl overflow-hidden group ${gridClasses[i] || ""}`}>
                <img src={item.imageUrl || imageUrl} alt={item.title || ""} className="w-full h-48 md:h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={18} color="#fff" />
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
