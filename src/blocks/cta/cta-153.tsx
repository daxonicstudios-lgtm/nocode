import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

export default function Cta153(props: BlockProps) {
  const {
    theme,
    heading = "Built by teams who care about quality",
    subheading = "Our users are shipping better products every single day.",
    buttonText = "Start Free",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-purple-500"
                style={{ opacity: 1 - i * 0.15 }}
              />
            ))}
          </div>
          <span className="ml-3 text-sm font-medium opacity-70 self-center">+2,400 members</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-7 inline-flex items-center gap-1 px-6 py-3 rounded-md text-white font-semibold text-sm hover:opacity-90 transition"
          style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
        >
          {buttonText} <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
