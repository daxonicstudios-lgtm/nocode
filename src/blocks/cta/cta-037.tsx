import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Cta037(props: BlockProps) {
  const {
    theme,
    heading = "See what our users are saying",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { title: "Alex Rivera", description: "The best investment we made for our business this year.", label: "CEO, TechFlow" },
      { title: "Maria Santos", description: "Intuitive, powerful, and the support team is incredible.", label: "Designer, Studio M" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">{heading}</h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {items.slice(0, 2).map((item, i) => (
            <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: theme?.primary ?? "#f59e0b" }} />
                ))}
              </div>
              <p className="text-sm opacity-70 leading-relaxed">&ldquo;{item.description}&rdquo;</p>
              <div className="mt-4">
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-xs opacity-40">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={buttonUrl} className="inline-block px-8 py-3.5 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
