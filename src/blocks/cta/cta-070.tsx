import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

export default function Cta070(props: BlockProps) {
  const {
    theme,
    heading = "The future of productivity is here",
    subheading = "Join 100,000+ professionals who have already made the switch.",
    buttonText = "Join Now",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-28 w-full relative overflow-hidden"
      style={{ backgroundColor: theme?.primary ?? "#0c4a6e", color: "#ffffff" }}
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{heading}</h2>
        <p className="mt-5 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-1 mt-10 px-10 py-4 rounded-full bg-white font-bold" style={{ color: theme?.primary ?? "#0c4a6e" }}>
          {buttonText}
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
