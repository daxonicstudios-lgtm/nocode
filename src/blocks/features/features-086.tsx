import type { BlockProps } from "@/blocks/types";
import { Palette, Brush, Droplets, Shapes, CircleDot, Pentagon } from "lucide-react";

const icons = [Palette, Brush, Droplets, Shapes, CircleDot, Pentagon];

export default function Features086(props: BlockProps) {
  const {
    theme,
    heading = "Design System",
    subheading = "Consistent, beautiful, and effortless design at every scale",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Color System", description: "Harmonious palettes generated from your brand colors with accessibility in mind." },
      { title: "Icon Library", description: "2,000+ pixel-perfect icons in multiple styles and weights." },
      { title: "Spacing Scale", description: "Consistent spacing tokens that keep layouts clean and aligned." },
      { title: "Shape System", description: "Unified border radii, shadows, and elevation for a cohesive feel." },
      { title: "Focus States", description: "Clear focus indicators for keyboard navigation and accessibility." },
      { title: "Components", description: "50+ base components that compose into any layout you need." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";
  const accent = theme?.accent || "#8b5cf6";

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <style>{`
        @keyframes gradientShift086 {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-bg-086 {
          background: linear-gradient(135deg, ${primary}11, ${accent}11, ${primary}11);
          background-size: 400% 400%;
          animation: gradientShift086 8s ease infinite;
        }
      `}</style>
      <div className="gradient-bg-086 absolute inset-0" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 backdrop-blur-sm" style={{ backgroundColor: `${theme?.background || "#fff"}cc` }}>
                <Icon size={28} className="mb-4" style={{ color: primary }} />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
