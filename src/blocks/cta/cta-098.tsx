import type { BlockProps } from "@/blocks/types";
import { MoveRight } from "lucide-react";

export default function Cta098(props: BlockProps) {
  const {
    theme,
    heading = "Ready when you are.",
    subheading = "No rush. Explore at your own pace.",
    buttonText = "Get started",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-32">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-end sm:items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl sm:text-5xl font-light">{heading}</h2>
          <p className="mt-3 text-sm opacity-40">{subheading}</p>
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-3 text-sm font-medium shrink-0" style={{ color: theme?.primary ?? "#000" }}>
          {buttonText}
          <MoveRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
