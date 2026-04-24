import type { BlockProps } from "@/blocks/types";
import { Send } from "lucide-react";

export default function Cta067(props: BlockProps) {
  const {
    theme,
    heading = "Transform how you work",
    subheading = "Trusted by leading companies worldwide to power their operations.",
    buttonText = "Request Access",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-24 w-full relative overflow-hidden"
      style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#ffffff" }}
    >
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-4 opacity-70">{subheading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-lg font-semibold text-sm" style={{ backgroundColor: theme?.accent ?? "#38bdf8", color: "#0f172a" }}>
          <Send className="w-4 h-4" />
          {buttonText}
        </a>
      </div>
    </section>
  );
}
