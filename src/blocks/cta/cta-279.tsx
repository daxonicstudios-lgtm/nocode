import type { BlockProps } from "@/blocks/types";
import { Code, Palette } from "lucide-react";

export default function Cta279(props: BlockProps) {
  const {
    theme,
    heading = "For Designers & Developers",
    buttonText = "Start Designing",
    buttonUrl = "#",
    secondaryButtonText = "Start Coding",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="grid sm:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-8 py-16 text-center" style={{ backgroundColor: theme?.primary ?? "#ec4899", color: "#ffffff" }}>
        <Palette className="w-10 h-10 mb-4 opacity-80" />
        <h2 className="text-2xl sm:text-3xl font-extrabold">Designers</h2>
        <p className="mt-2 opacity-70 text-sm max-w-xs">Pixel-perfect tools that bring your vision to life.</p>
        <a href={buttonUrl} className="mt-6 px-7 py-3.5 bg-white rounded-full font-bold text-sm" style={{ color: theme?.primary ?? "#ec4899" }}>
          {buttonText}
        </a>
      </div>
      <div className="flex flex-col items-center justify-center px-8 py-16 text-center" style={{ backgroundColor: theme?.foreground ?? "#0f172a", color: "#ffffff" }}>
        <Code className="w-10 h-10 mb-4 opacity-80" />
        <h2 className="text-2xl sm:text-3xl font-extrabold">Developers</h2>
        <p className="mt-2 opacity-70 text-sm max-w-xs">Clean APIs and powerful SDKs for every stack.</p>
        <a href={secondaryButtonUrl} className="mt-6 px-7 py-3.5 bg-white rounded-full font-bold text-sm" style={{ color: theme?.foreground ?? "#0f172a" }}>
          {secondaryButtonText}
        </a>
      </div>
    </section>
  );
}
