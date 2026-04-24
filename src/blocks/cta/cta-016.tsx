import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta016(props: BlockProps) {
  const {
    theme,
    heading = "Transform your ideas into reality",
    subheading = "Join the platform that empowers creators worldwide.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-24"
      style={{
        background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"}, ${theme?.accent ?? "#a855f7"})`,
        color: "#fff",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-80">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-bold text-sm hover:bg-gray-100 transition-colors"
          style={{ color: theme?.primary ?? "#6366f1" }}
        >
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
