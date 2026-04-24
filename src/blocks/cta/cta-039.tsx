import type { BlockProps } from "@/blocks/types";
import { MessageCircle } from "lucide-react";

export default function Cta039(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by industry leaders",
    subheading = "Here is what our customers have to say about their experience.",
    buttonText = "Join Them",
    buttonUrl = "#",
    items = [
      { title: "Emily Park", description: "This platform changed how we approach web design entirely.", label: "VP Design, CloudScale" },
      { title: "David Kim", description: "From zero to launch in under a week. Unbelievable.", label: "CTO, NovaTech" },
      { title: "Lisa Wang", description: "The AI suggestions are scarily accurate. Saves so much time.", label: "Marketing Director, BrightPath" },
    ],
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-4xl mx-auto text-center">
        <MessageCircle className="w-7 h-7 mx-auto mb-4 opacity-60" />
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="p-5 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm opacity-80 leading-relaxed">&ldquo;{item.description}&rdquo;</p>
              <p className="mt-3 text-xs font-bold">{item.title}</p>
              <p className="text-xs opacity-40">{item.label}</p>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-10 inline-block px-8 py-3.5 rounded-lg bg-white font-bold text-sm" style={{ color: theme?.primary ?? "#0f172a" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
