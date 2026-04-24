import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta057(props: BlockProps) {
  const {
    theme,
    heading = "Supercharge your workflow",
    subheading = "Automate repetitive tasks and focus on what matters most.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-lg mx-auto rounded-3xl border-2 p-10 text-center shadow-lg" style={{ borderColor: theme?.primary ?? "#7c3aed" }}>
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}>
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h2 className="mt-5 text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 text-sm opacity-60">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-block mt-7 px-8 py-3 rounded-full text-white font-semibold text-sm"
          style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
