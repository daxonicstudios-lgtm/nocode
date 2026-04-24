import type { BlockProps } from "@/blocks/types";
import { Layers, Cpu, Globe, Sparkles } from "lucide-react";

const icons = [Layers, Cpu, Globe, Sparkles];

export default function Features051(props: BlockProps) {
  const {
    theme,
    heading = "How It Works",
    subheading = "A seamless experience from start to finish",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/560x380",
    items = [
      { title: "Design Visually", description: "Drag and drop elements to build layouts that match your vision without writing code." },
      { title: "Connect Your Data", description: "Integrate with your favorite tools and import content in just a few clicks." },
      { title: "Publish Instantly", description: "Go live with a single tap. Your site is fast, secure, and optimized for search." },
      { title: "Grow Your Audience", description: "Built-in analytics and SEO tools help you reach more people every day." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-16">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <img src={imageUrl} alt={item.title || ""} className="w-full rounded-xl object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.primary || "#6366f1", color: "#fff" }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
