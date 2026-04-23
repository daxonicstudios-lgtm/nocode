import type { BlockProps } from "@/blocks/types";
import { Clock, ArrowRight } from "lucide-react";

export default function Hero015(props: BlockProps) {
  const {
    theme,
    heading = "Something Big Is Coming",
    subheading = "We're launching a brand-new experience. Be the first to know when we go live.",
    buttonText = "Notify Me at Launch",
    buttonUrl = "#notify",
    items = [
      { label: "Days", value: "12" },
      { label: "Hours", value: "08" },
      { label: "Minutes", value: "45" },
      { label: "Seconds", value: "30" },
    ],
  } = props;

  const timerItems = items.slice(0, 4);
  const defaultLabels = ["Days", "Hours", "Minutes", "Seconds"];
  const defaultValues = ["12", "08", "45", "30"];

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#0c0a1d",
        color: theme?.foreground ?? "#f1f0f7",
      }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Clock className="w-8 h-8" style={{ color: theme?.primary ?? "#a78bfa" }} />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg opacity-50 max-w-lg mx-auto mb-12 leading-relaxed">
          {subheading}
        </p>

        {/* Countdown boxes */}
        <div className="grid grid-cols-4 gap-3 sm:gap-5 max-w-md mx-auto mb-12">
          {[0, 1, 2, 3].map((i) => {
            const item = timerItems[i];
            const val = item?.value ?? defaultValues[i];
            const lbl = item?.label ?? defaultLabels[i];
            return (
              <div
                key={i}
                className="rounded-xl sm:rounded-2xl py-5 sm:py-7 px-2"
                style={{
                  backgroundColor: (theme?.primary ?? "#a78bfa") + "12",
                  borderWidth: "1px",
                  borderColor: (theme?.primary ?? "#a78bfa") + "25",
                }}
              >
                <p
                  className="text-3xl sm:text-5xl font-bold tabular-nums"
                  style={{ color: theme?.primary ?? "#a78bfa" }}
                >
                  {val}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider mt-2 opacity-50">
                  {lbl}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm sm:text-base transition-transform hover:scale-105 shadow-lg"
          style={{ backgroundColor: theme?.primary ?? "#a78bfa" }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
