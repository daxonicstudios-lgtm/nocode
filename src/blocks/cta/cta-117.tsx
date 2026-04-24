import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta117(props: BlockProps) {
  const {
    theme,
    heading = "Your Journey Starts Here",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { title: "Choose a plan" },
      { title: "Set up your workspace" },
      { title: "Invite your team" },
    ],
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.accent || "#eff6ff", color: theme?.foreground }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{heading}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold" style={{ borderColor: theme?.primary || "#2563eb", color: theme?.primary || "#2563eb" }}>
                {i + 1}
              </span>
              <span className="font-medium text-sm">{item.title}</span>
              {i < 2 && <ArrowRight className="hidden md:block w-4 h-4 opacity-40" />}
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href={buttonUrl} className="inline-block px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
