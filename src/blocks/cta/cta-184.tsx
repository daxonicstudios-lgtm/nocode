import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta184(props: BlockProps) {
  const {
    theme,
    heading = "Here is how it works",
    subheading = "From idea to live website in under 10 minutes.",
    buttonText = "Try It Now",
    buttonUrl = "#",
  } = props;

  const timeline = [
    { time: "0 min", label: "Sign up free" },
    { time: "2 min", label: "Describe your site" },
    { time: "5 min", label: "AI builds it" },
    { time: "10 min", label: "You are live" },
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-3 text-center opacity-70">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-start justify-between gap-2">
          {timeline.map((t, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
                {t.time}
              </div>
              <div className="mt-2 text-sm font-medium">{t.label}</div>
              {i < timeline.length - 1 && <div className="hidden sm:block w-full h-0.5 bg-gray-200 mt-4" />}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
