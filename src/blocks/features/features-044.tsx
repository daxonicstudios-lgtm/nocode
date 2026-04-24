import type { BlockProps } from "@/blocks/types";
import { BookOpen, Pen, Coffee, Map } from "lucide-react";

const icons = [BookOpen, Pen, Coffee, Map];

export default function Features044(props: BlockProps) {
  const {
    theme,
    heading = "Crafted with Intention",
    subheading = "Timeless tools for thoughtful creators",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Story Editor", description: "Write with a beautiful distraction-free editor that feels like pen on paper." },
      { title: "Hand-Picked Fonts", description: "A curated library of serif and display typefaces for elegant layouts." },
      { title: "Warm Palettes", description: "Pre-built color schemes inspired by vintage prints and aged paper." },
      { title: "Journey Maps", description: "Guide your readers through visual narratives with interactive maps." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#faf5ee", color: theme?.foreground ?? "#3d2b1f" }} className="py-16 px-4 sm:px-8 lg:py-24">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <p className="text-sm italic tracking-wide mb-2 opacity-70">{subheading}</p>
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{heading}</h2>
        {bodyText && <p className="mt-4 text-base opacity-70 max-w-xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>{bodyText}</p>}
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="flex gap-5 items-start p-5 rounded-lg" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "rgba(139,90,43,0.06)" }}>
              <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border-2" style={{ borderColor: theme?.primary ?? "#8b5a2b" }}>
                <Icon className="w-5 h-5" style={{ color: theme?.primary ?? "#8b5a2b" }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-70">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="text-center mt-10">
          <a href={buttonUrl} className="inline-block px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: theme?.primary ?? "#8b5a2b" }}>{buttonText}</a>
        </div>
      )}
    </section>
  );
}
