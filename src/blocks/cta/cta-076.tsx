import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta076(props: BlockProps) {
  const {
    theme,
    heading = "Experience the next generation",
    subheading = "A platform designed for speed, simplicity, and scale.",
    buttonText = "Get Early Access",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#0f172a", color: "#ffffff" }}>
      <div
        className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 text-center"
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-70">{subheading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full font-bold text-sm bg-white" style={{ color: theme?.primary ?? "#2563eb" }}>
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
