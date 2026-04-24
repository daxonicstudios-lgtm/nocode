import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Cta100(props: BlockProps) {
  const {
    theme,
    heading = "Let's talk.",
    subheading = "Have a project in mind? We'd love to hear about it.",
    buttonText = "Get in touch",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-32 sm:py-44">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-5xl sm:text-7xl font-extralight">{heading}</h2>
        <p className="mt-6 text-sm opacity-40">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 mt-10 text-base font-medium"
          style={{ color: theme?.primary ?? "#000" }}
        >
          {buttonText}
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
