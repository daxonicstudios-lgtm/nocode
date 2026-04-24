import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Check } from "lucide-react";

export default function Cta181(props: BlockProps) {
  const {
    theme,
    heading = "Your journey starts here",
    subheading = "Follow our proven roadmap to success.",
    buttonText = "Begin Now",
    buttonUrl = "#",
  } = props;

  const steps = ["Sign up for free", "Set up your workspace", "Launch your first project"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-start justify-center gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center flex-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
                {i < 2 ? <Check className="w-5 h-5" /> : i + 1}
              </div>
              {i < steps.length - 1 && <div className="hidden sm:block w-full h-0.5 bg-gray-200 absolute" />}
              <p className="mt-3 text-sm font-medium">{step}</p>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-10 inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
