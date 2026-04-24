import type { BlockProps } from "@/blocks/types";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Cta239(props: BlockProps) {
  const {
    theme,
    heading = "Transform your workflow in 30 days",
    subheading = "See measurable results or get a full refund. Zero risk.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
  } = props;

  const steps = [
    { label: "Day 1", text: "Set up your account" },
    { label: "Day 7", text: "First automation live" },
    { label: "Day 30", text: "Full transformation" },
  ];

  return (
    <section style={{ backgroundColor: theme?.background ?? "#faf5ff", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary ?? "#a855f7" }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 flex items-center justify-center gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="text-center px-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto text-white text-sm font-bold" style={{ backgroundColor: theme?.primary ?? "#a855f7" }}>
                  {i + 1}
                </div>
                <p className="text-xs font-semibold mt-2" style={{ color: theme?.primary ?? "#a855f7" }}>{step.label}</p>
                <p className="text-xs opacity-60 mt-0.5">{step.text}</p>
              </div>
              {i < steps.length - 1 && <div className="w-8 sm:w-16 h-0.5" style={{ backgroundColor: `${theme?.primary ?? "#a855f7"}30` }} />}
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#a855f7" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
