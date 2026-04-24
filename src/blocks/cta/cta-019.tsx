import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta019(props: BlockProps) {
  const {
    theme,
    heading = "Unlock premium features",
    subheading = "Get access to advanced tools, priority support, and unlimited projects.",
    buttonText = "Upgrade Now",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"} 0%, ${theme?.accent ?? "#ec4899"} 50%, ${theme?.primary ?? "#7c3aed"} 100%)`,
        color: "#fff",
      }}
    >
      <div className="max-w-lg mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl font-black">{heading}</h2>
        <p className="mt-3 text-sm opacity-80">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-8 inline-block px-8 py-3.5 rounded-lg bg-white/20 backdrop-blur font-bold text-sm border border-white/30 hover:bg-white/30 transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
