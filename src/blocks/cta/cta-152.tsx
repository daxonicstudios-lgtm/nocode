import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta152(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by creative professionals worldwide",
    subheading = "See why designers and developers choose us every day.",
    buttonText = "Join the Community",
    buttonUrl = "#",
  } = props;

  const names = ["Sarah", "Mike", "Aisha", "Chen", "Liam", "Zara"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 text-base opacity-70">{subheading}</p>
          <a
            href={buttonUrl}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition"
            style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="flex -space-x-4">
          {names.map((name, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full border-3 border-white flex items-center justify-center text-white text-sm font-bold shadow-md"
              style={{ backgroundColor: `hsl(${i * 55 + 200}, 60%, 50%)` }}
            >
              {name[0]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
