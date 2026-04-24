import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Cta257(props: BlockProps) {
  const {
    theme,
    heading = "Create Without Limits",
    subheading = "Design, build, and launch — all from one platform.",
    buttonText = "Start Creating",
    buttonUrl = "#",
    secondaryButtonText = "Watch Video",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}>
      <div className="absolute bottom-0 left-0 w-full h-40" style={{ backgroundColor: theme?.primary ?? "#3b82f6", clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)" }} />
      <div className="relative px-4 py-20 sm:py-28 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold">{heading}</h2>
        <p className="mt-4 text-lg opacity-60 max-w-lg mx-auto">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <a href={buttonUrl} className="px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm border-2" style={{ borderColor: theme?.primary ?? "#3b82f6", color: theme?.primary ?? "#3b82f6" }}>
            <Play className="w-4 h-4" /> {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
