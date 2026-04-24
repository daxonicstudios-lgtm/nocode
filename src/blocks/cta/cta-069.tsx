import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta069(props: BlockProps) {
  const {
    theme,
    heading = "Built for modern teams",
    subheading = "Collaborate in real-time with your team across any device.",
    buttonText = "Try It Free",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-24 w-full relative overflow-hidden"
      style={{ backgroundColor: theme?.primary ?? "#312e81", color: "#ffffff" }}
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)" }} />
      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-70 max-w-md">{subheading}</p>
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white font-bold text-sm shrink-0" style={{ color: theme?.primary ?? "#312e81" }}>
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
