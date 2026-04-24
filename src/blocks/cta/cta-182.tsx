import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta182(props: BlockProps) {
  const {
    theme,
    heading = "See what is coming next",
    subheading = "Our product roadmap is packed with features you will love.",
    buttonText = "View Roadmap",
    buttonUrl = "#",
  } = props;

  const milestones = [
    { q: "Q1", label: "AI-powered builder", done: true },
    { q: "Q2", label: "Team collaboration", done: true },
    { q: "Q3", label: "Custom domains", done: false },
    { q: "Q4", label: "App marketplace", done: false },
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-3 text-center opacity-70">{subheading}</p>
        <div className="mt-10 relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.q} className="flex items-start gap-4 pl-2">
                <div className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-bold z-10" style={{ borderColor: theme?.primary ?? "#2563eb", backgroundColor: m.done ? (theme?.primary ?? "#2563eb") : (theme?.background ?? "#fff"), color: m.done ? "#fff" : (theme?.primary ?? "#2563eb") }}>
                  {m.q}
                </div>
                <p className={`text-sm font-medium pt-1 ${m.done ? "opacity-100" : "opacity-50"}`}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
