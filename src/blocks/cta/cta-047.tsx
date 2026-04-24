import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta047(props: BlockProps) {
  const {
    theme,
    heading = "The smarter way to create",
    subheading = "AI-powered tools that understand your vision and bring it to life.",
    buttonText = "Try It Now",
    buttonUrl = "#",
    secondaryButtonText = "See Examples",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: "#18181b", color: "#fafafa" }}>
      <div className="max-w-xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-5" style={{ color: theme?.primary ?? "#a78bfa" }} />
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-4 opacity-40">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="px-7 py-3.5 rounded-lg font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#a78bfa", color: "#18181b" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-7 py-3.5 rounded-lg font-medium text-sm border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
