import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta104(props: BlockProps) {
  const {
    theme,
    heading = "Supercharge Your Workflow",
    subheading = "Trusted by 10,000+ teams worldwide.",
    buttonText = "Try It Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur rounded-3xl shadow-2xl p-8 text-center sticky top-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-70 mb-6">{subheading}</p>
        <a href={buttonUrl} className="inline-block w-full px-6 py-3 rounded-full text-white font-semibold transition hover:opacity-90" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
