import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Layers } from "lucide-react";

export default function Cta180(props: BlockProps) {
  const {
    theme,
    heading = "Stack the tools you need",
    subheading = "Mix and match features to create your perfect workflow.",
    buttonText = "Explore Features",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="relative shrink-0">
          <div className="w-48 h-32 rounded-xl shadow-lg absolute top-6 left-6 rotate-3" style={{ backgroundColor: theme?.primary ?? "#2563eb", opacity: 0.15 }} />
          <div className="w-48 h-32 rounded-xl shadow-lg absolute top-3 left-3 -rotate-2" style={{ backgroundColor: theme?.primary ?? "#2563eb", opacity: 0.3 }} />
          <div className="w-48 h-32 rounded-xl shadow-lg relative flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            <Layers className="w-10 h-10 text-white" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-70">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
