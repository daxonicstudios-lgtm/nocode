import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta102(props: BlockProps) {
  const {
    theme,
    heading = "Start Building Today",
    subheading = "No credit card required. Free forever for small teams.",
    buttonText = "Create Your Account",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-xl mx-auto rounded-3xl shadow-xl border p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: theme?.primary || "#2563eb" }} />
        <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary || "#2563eb" }} />
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
        <p className="opacity-70 mb-8">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-block px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition hover:shadow-xl hover:-translate-y-0.5"
          style={{ backgroundColor: theme?.primary || "#2563eb" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
