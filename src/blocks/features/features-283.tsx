import type { BlockProps } from "@/blocks/types";
import { Sparkles, Palette, Wand2, Brush } from "lucide-react";

const icons = [Sparkles, Palette, Wand2, Brush];

export default function Features283(props: BlockProps) {
  const {
    theme,
    heading = "Creative Freedom Awaits",
    subheading = "Express your vision with tools that inspire and empower",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Template Gallery", description: "Hundreds of professionally designed templates ready to customize." },
      { title: "Color Harmony", description: "AI-generated color schemes that always look balanced and beautiful." },
      { title: "One-Click Polish", description: "Instantly refine layouts, spacing, and typography with smart formatting." },
      { title: "Style Transfer", description: "Apply the visual style of any design to your own content instantly." },
    ],
  } = props;

  const gradients = ["#fdf2f8,#fce7f3", "#eff6ff,#dbeafe", "#f0fdf4,#dcfce7", "#fefce8,#fef9c3"];

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#1f2937" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const [from, to] = gradients[i % gradients.length].split(",");
            return (
              <div key={i} className="rounded-2xl p-6" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-white" style={{ color: theme?.primary || "#6366f1" }}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
