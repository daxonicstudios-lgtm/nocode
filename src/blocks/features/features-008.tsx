import type { BlockProps } from "@/blocks/types";
import { Sparkles, Heart, Puzzle } from "lucide-react";

const icons = [Sparkles, Heart, Puzzle];
const cardBgs = ["#eef2ff", "#fef9c3", "#ecfdf5"];

export default function Features008(props: BlockProps) {
  const {
    theme,
    heading = "Made With Care",
    subheading = "Every detail crafted to delight your users",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Pixel-Perfect Design", description: "Every component is hand-tuned to look crisp on every screen size." },
      { title: "Built With Love", description: "We obsess over the small things so your visitors feel the difference." },
      { title: "Endlessly Flexible", description: "Mix and match blocks to create something that is uniquely yours." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-md mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const bg = cardBgs[i % cardBgs.length];
            return (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: bg, color: "#1e293b" }}>
                <Icon size={24} className="mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
