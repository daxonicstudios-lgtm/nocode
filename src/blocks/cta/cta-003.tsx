import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta003(props: BlockProps) {
  const {
    theme,
    heading = "Launch your website in minutes",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-28">
      <div className="max-w-lg mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-6" style={{ color: theme?.primary ?? "#f59e0b" }} />
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">{heading}</h2>
        <a
          href={buttonUrl}
          className="mt-10 inline-block px-10 py-4 rounded-full text-white font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
          style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
