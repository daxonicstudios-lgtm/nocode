import type { BlockProps } from "@/blocks/types";
import { Lightbulb, Wrench, TestTube, PartyPopper } from "lucide-react";

const icons = [Lightbulb, Wrench, TestTube, PartyPopper];

export default function Features109(props: BlockProps) {
  const {
    theme,
    heading = "Our Process",
    subheading = "From concept to delivery in four phases",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Ideation", description: "We brainstorm solutions tailored to your specific goals." },
      { title: "Build", description: "Our team develops a robust, scalable solution fast." },
      { title: "Test", description: "Rigorous QA ensures everything works flawlessly." },
      { title: "Deliver", description: "We launch on time and provide ongoing support." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="flex flex-col sm:flex-row items-stretch">
                <div className={`sm:w-1/2 p-6 ${isEven ? "" : "sm:order-2"}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="hidden sm:flex sm:w-8 justify-center">
                  <div className="w-0.5 h-full" style={{ backgroundColor: theme?.accent || "#e5e7eb" }} />
                </div>
                <div className={`sm:w-1/2 ${isEven ? "sm:order-2" : ""}`} />
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
