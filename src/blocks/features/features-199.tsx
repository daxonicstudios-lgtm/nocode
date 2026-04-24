import type { BlockProps } from "@/blocks/types";
import { Sofa, Paintbrush, FileSpreadsheet } from "lucide-react";

const icons = [Sofa, Paintbrush, FileSpreadsheet];

export default function Features199(props: BlockProps) {
  const {
    theme,
    heading = "Design Your Dream Space",
    subheading = "Interior design tools for professionals and homeowners",
    bodyText,
    buttonText = "Start Designing",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Room Visualization", description: "See furniture and colors in your actual space with augmented reality previews." },
      { title: "Material Library", description: "Browse thousands of fabrics, paints, tiles, and finishes with supplier pricing." },
      { title: "Instant Quotes", description: "Generate detailed cost breakdowns for clients with materials, labor, and timeline." },
    ],
  } = props;

  const primary = theme?.primary || "#b45309";

  return (
    <section style={{ backgroundColor: theme?.background || "#fefce8", color: theme?.foreground || "#1c1917" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-8 bg-white shadow-sm" style={{ borderBottom: `3px solid ${primary}` }}>
                <Icon size={26} className="mb-5" style={{ color: primary }} />
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
