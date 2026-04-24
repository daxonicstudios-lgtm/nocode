import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta087(props: BlockProps) {
  const {
    theme,
    heading = "Power up your workflow",
    subheading = "Automate tasks, save time, and boost team productivity by 40%.",
    buttonText = "Start Automating",
    buttonUrl = "#",
  } = props;

  const glowColor = theme?.primary ?? "#ec4899";

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: "#ffffff" }} className="px-5 py-20">
      <div
        className="max-w-lg mx-auto rounded-3xl p-8 sm:p-10 text-center relative"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          boxShadow: `0 0 30px ${glowColor}30, inset 0 0 30px ${glowColor}10`,
          border: `1px solid ${glowColor}40`,
        }}
      >
        <Zap className="w-8 h-8 mx-auto mb-4" style={{ color: glowColor }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 text-sm opacity-60">{subheading}</p>
        <a href={buttonUrl} className="inline-block mt-7 px-8 py-3 rounded-lg font-bold text-sm text-white" style={{ backgroundColor: glowColor }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
