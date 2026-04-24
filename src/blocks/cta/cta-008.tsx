import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta008(props: BlockProps) {
  const {
    theme,
    heading = "Power up your workflow",
    subheading = "Automate repetitive tasks and focus on what matters most to your team.",
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ backgroundColor: (theme?.primary ?? "#f59e0b") + "1a", color: theme?.primary ?? "#f59e0b" }}>
            <Zap className="w-3.5 h-3.5" /> New Feature
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <a href={buttonUrl} className="mt-7 inline-block px-7 py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
            {buttonText}
          </a>
        </div>
        <div className="flex-1 w-full rounded-2xl aspect-square max-w-sm" style={{ backgroundColor: theme?.accent ?? "#fef3c7" }}>
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full h-full object-cover rounded-2xl" />
          ) : (
            <div className="w-full h-full flex items-center justify-center opacity-20 text-sm">Illustration</div>
          )}
        </div>
      </div>
    </section>
  );
}
