import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Users } from "lucide-react";

export default function Cta151(props: BlockProps) {
  const {
    theme,
    heading = "Join 10,000+ teams already growing",
    subheading = "Start building with a community that supports your success.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  const avatars = ["A", "B", "C", "D", "E"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center -space-x-3 mb-6">
          {avatars.map((letter, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: theme?.primary ?? "#2563eb", opacity: 1 - i * 0.12 }}
            >
              {letter}
            </div>
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-gray-200 text-gray-600 text-xs font-bold">
            <Users className="w-4 h-4" />
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-3 text-base opacity-70">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition"
          style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
        >
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
