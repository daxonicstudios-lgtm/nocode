import type { BlockProps } from "@/blocks/types";
import { Flame } from "lucide-react";

export default function Cta068(props: BlockProps) {
  const {
    theme,
    heading = "Don't miss this opportunity",
    subheading = "Seats are limited. Reserve your spot in our next cohort today.",
    buttonText = "Reserve My Spot",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-24 w-full relative overflow-hidden"
      style={{ backgroundColor: theme?.primary ?? "#7c2d12", color: "#ffffff" }}
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px)" }} />
      <div className="relative max-w-2xl mx-auto text-center">
        <Flame className="w-10 h-10 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <a href={buttonUrl} className="inline-block mt-8 px-10 py-4 rounded-full bg-white font-bold text-sm" style={{ color: theme?.primary ?? "#7c2d12" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
