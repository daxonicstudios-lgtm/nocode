import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta252(props: BlockProps) {
  const {
    theme,
    heading = "Supercharge Your Workflow",
    subheading = "Powerful tools that feel effortless to use.",
    buttonText = "Try It Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.background ?? "#e8edf2", color: theme?.foreground ?? "#1e293b" }}>
      <div className="max-w-xl mx-auto text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{
            background: theme?.background ?? "#e8edf2",
            boxShadow: "6px 6px 12px #c5cad0, -6px -6px 12px #ffffff",
          }}
        >
          <Zap className="w-7 h-7" style={{ color: theme?.primary ?? "#6366f1" }} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 text-base opacity-60">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-sm"
          style={{
            backgroundColor: theme?.primary ?? "#6366f1",
            boxShadow: "4px 4px 10px #c5cad0, -4px -4px 10px #ffffff",
          }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
