import type { BlockProps } from "@/blocks/types";
import { Eye, Code, Rocket, Puzzle, Lightbulb, Boxes } from "lucide-react";

const icons = [Eye, Code, Rocket, Puzzle, Lightbulb, Boxes];

export default function Features087(props: BlockProps) {
  const {
    theme,
    heading = "Explore Our Toolkit",
    subheading = "Flip any card to reveal the details",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Live Preview", description: "See exactly how your site looks on every device before publishing." },
      { title: "Code Export", description: "Download clean React, HTML, or Vue code at any time." },
      { title: "One-Click Deploy", description: "Push to production with a single button and zero downtime." },
      { title: "Plugin System", description: "Extend with community plugins or build your own with our SDK." },
      { title: "Smart Tips", description: "AI-powered suggestions help you improve content and design." },
      { title: "Component Store", description: "Browse and install premium components from our marketplace." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        .flip-087 { perspective: 800px; }
        .flip-087-inner { transition: transform 0.6s; transform-style: preserve-3d; }
        .flip-087:hover .flip-087-inner { transform: rotateY(180deg); }
        .flip-087-front, .flip-087-back { backface-visibility: hidden; }
        .flip-087-back { transform: rotateY(180deg); position: absolute; inset: 0; }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flip-087 h-48 cursor-pointer">
                <div className="flip-087-inner relative w-full h-full">
                  <div className="flip-087-front rounded-xl p-6 flex flex-col items-center justify-center h-full" style={{ backgroundColor: theme?.accent || "#f1f5f9" }}>
                    <Icon size={32} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <div className="flip-087-back rounded-xl p-6 flex items-center justify-center text-white text-center" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
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
