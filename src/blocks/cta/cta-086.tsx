import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta086(props: BlockProps) {
  const {
    theme,
    heading = "Unlock your full potential",
    subheading = "Join the platform that empowers creators and businesses alike.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto text-center">
        <div
          className="rounded-2xl p-8 sm:p-12 relative overflow-hidden"
          style={{
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            boxShadow: `0 0 0 2px ${theme?.primary ?? "#6366f1"}, 0 0 20px ${theme?.primary ?? "#6366f1"}40`,
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-3 text-sm opacity-60">{subheading}</p>
          <a href={buttonUrl} className="inline-flex items-center gap-2 mt-7 px-7 py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
