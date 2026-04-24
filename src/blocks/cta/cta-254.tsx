import type { BlockProps } from "@/blocks/types";
import { CheckCircle } from "lucide-react";

export default function Cta254(props: BlockProps) {
  const {
    theme,
    heading = "Level Up Your Business",
    bodyText = "Everything you need to grow, all in one place.",
    buttonText = "Get Started",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.background ?? "#dfe6ed", color: theme?.foreground ?? "#1e293b" }}>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
          <p className="mt-3 opacity-60">{bodyText}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={buttonUrl} className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1", boxShadow: "4px 4px 8px #bcc3ca, -4px -4px 8px #ffffff" }}>
              {buttonText}
            </a>
            <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl font-bold text-sm" style={{ boxShadow: "inset 3px 3px 6px #bcc3ca, inset -3px -3px 6px #ffffff" }}>
              {secondaryButtonText}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {["Unlimited projects", "Priority support", "Advanced analytics"].map((f, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-4 rounded-2xl" style={{ boxShadow: "5px 5px 10px #bcc3ca, -5px -5px 10px #ffffff" }}>
              <CheckCircle className="w-5 h-5 shrink-0" style={{ color: theme?.primary ?? "#6366f1" }} />
              <span className="font-semibold text-sm">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
