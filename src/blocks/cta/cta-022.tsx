import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Cta022(props: BlockProps) {
  const {
    theme,
    heading = "Why 10,000+ teams choose us",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = [
      { title: "4.9/5", description: "Average rating" },
      { title: "2M+", description: "Sites published" },
      { title: "150+", description: "Integrations" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-1 justify-center md:justify-start mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: theme?.primary ?? "#f59e0b" }} />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
            <a href={buttonUrl} className="mt-6 inline-block px-7 py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
              {buttonText}
            </a>
          </div>
          <div className="flex gap-8">
            {items.slice(0, 3).map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black" style={{ color: theme?.primary ?? "#f59e0b" }}>{stat.title}</div>
                <div className="text-xs opacity-50 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
