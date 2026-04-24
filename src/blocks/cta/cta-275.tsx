import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta275(props: BlockProps) {
  const {
    theme,
    heading = "The Future is Here",
    subheading = "Cutting-edge features, delivered continuously.",
    buttonText = "Join Waitlist",
    buttonUrl = "#",
    items = [
      { title: "AI Copilot" }, { title: "Smart Search" }, { title: "Voice Commands" },
      { title: "Predictive UI" }, { title: "Auto Layout" }, { title: "Magic Fill" },
      { title: "Neural Themes" }, { title: "Instant Preview" },
    ],
  } = props;

  return (
    <section className="py-20" style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: "#ffffff" }}>
      <div className="max-w-2xl mx-auto text-center px-4">
        <Sparkles className="w-7 h-7 mx-auto mb-3" style={{ color: theme?.primary ?? "#a855f7" }} />
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-3 opacity-50">{subheading}</p>
      </div>
      <div className="mt-10 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 w-max">
          {items.map((item, i) => (
            <span key={i} className="shrink-0 px-5 py-2.5 rounded-full text-sm font-medium" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#a855f7"}33, ${theme?.accent ?? "#ec4899"}33)`, border: `1px solid ${theme?.primary ?? "#a855f7"}44` }}>
              {item.title}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href={buttonUrl} className="inline-block px-8 py-4 rounded-full text-white font-bold text-sm" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#a855f7"}, ${theme?.accent ?? "#ec4899"})` }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
