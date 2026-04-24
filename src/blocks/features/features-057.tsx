import type { BlockProps } from "@/blocks/types";
import { Circle } from "lucide-react";

export default function Features057(props: BlockProps) {
  const {
    theme,
    heading = "Your Journey With Us",
    subheading = "From idea to launch, we guide you every step",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/480x320",
    items = [
      { title: "Consultation", description: "Share your vision and goals. We listen, ask the right questions, and map out a plan." },
      { title: "Prototype", description: "See a working preview of your project within days, not months. Iterate in real time." },
      { title: "Build & Test", description: "Our team develops your solution with rigorous quality checks at every milestone." },
      { title: "Launch & Scale", description: "Go live with confidence and scale as your audience grows with zero downtime." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px" style={{ backgroundColor: theme?.primary || "#6366f1", opacity: 0.3 }} />
          <div className="space-y-16">
            {items.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center relative`}>
                  <div className="w-full md:w-[45%]">
                    <img src={imageUrl} alt={item.title || ""} className="w-full rounded-xl object-cover" />
                  </div>
                  <div className="hidden md:flex w-[10%] justify-center relative z-10">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                      <Circle size={12} fill="#fff" color="#fff" />
                    </div>
                  </div>
                  <div className="w-full md:w-[45%] space-y-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="opacity-60 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
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
