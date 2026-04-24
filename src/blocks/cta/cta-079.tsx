import type { BlockProps } from "@/blocks/types";
import { Boxes } from "lucide-react";

export default function Cta079(props: BlockProps) {
  const {
    theme,
    heading = "All your tools, one place",
    subheading = "Connect 200+ integrations and bring your entire workflow under a single roof.",
    buttonText = "Explore Integrations",
    buttonUrl = "#",
    items = [
      { title: "200+", description: "Integrations" },
      { title: "99.9%", description: "Uptime" },
      { title: "24/7", description: "Support" },
    ],
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#0f172a", color: "#ffffff" }}>
      <div
        className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 text-center"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Boxes className="w-8 h-8 mx-auto opacity-60 mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60 max-w-md mx-auto text-sm">{subheading}</p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div key={i} className="py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="text-xl font-bold" style={{ color: theme?.accent ?? "#a78bfa" }}>{item.title}</div>
              <div className="text-xs opacity-50 mt-1">{item.description}</div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-block mt-8 px-8 py-3 rounded-lg bg-white font-semibold text-sm" style={{ color: theme?.primary ?? "#4f46e5" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
