import type { BlockProps } from "@/blocks/types";
import { Target, Heart, Zap } from "lucide-react";

const icons = [Target, Heart, Zap];

const DEFAULT_ITEMS = [
  { title: "Our Mission", description: "To democratize web design and make it accessible to everyone, everywhere." },
  { title: "Our Values", description: "Simplicity, accessibility, and empowerment guide everything we build." },
  { title: "Our Vision", description: "A world where anyone can bring their ideas to life online, regardless of technical skill." },
];

export default function About057(props: BlockProps) {
  const { theme, heading = "Our Journey", subheading = "The story behind our platform.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8" style={{ backgroundColor: theme?.background ?? "#fff" }}>
                <Icon className="w-8 h-8 mb-4" style={{ color: theme?.primary }} />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
