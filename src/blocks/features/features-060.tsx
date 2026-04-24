import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Features060(props: BlockProps) {
  const {
    theme,
    heading = "The Complete Platform",
    subheading = "End-to-end solutions for ambitious teams",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/960x480",
    items = [
      { title: "Unified Workspace", description: "Bring your tools, team, and content into one place. No more switching between apps." },
      { title: "Global CDN", description: "Your content loads instantly from over 200 edge locations around the world." },
      { title: "Collaborative Editing", description: "Multiple team members can edit the same page simultaneously with conflict-free merging." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
      </div>
      <div className="space-y-0">
        {items.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={i} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="w-full md:w-1/2">
                <img src={imageUrl} alt={item.title || ""} className="w-full h-64 md:h-96 object-cover" />
              </div>
              <div className="w-full md:w-1/2 flex items-center px-6 sm:px-12 py-12" style={{ backgroundColor: isEven ? (theme?.accent || "#f8f9fa") : (theme?.background || "#ffffff") }}>
                <div className="max-w-md space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold">{item.title}</h3>
                  <p className="opacity-60 leading-relaxed">{item.description}</p>
                  {buttonText && (
                    <a href={buttonUrl} className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: theme?.primary || "#6366f1" }}>
                      {buttonText} <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
