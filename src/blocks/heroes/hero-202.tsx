import type { BlockProps } from "@/blocks/types";
import { Rocket, Zap, Shield } from "lucide-react";

const multiTypewriterKeyframes = `
@keyframes typewriterLine1 {
  0%, 10% { width: 0; opacity: 1 }
  40%, 100% { width: 100%; opacity: 1 }
}
@keyframes typewriterLine2 {
  0%, 40% { width: 0; opacity: 0 }
  45% { width: 0; opacity: 1 }
  75%, 100% { width: 100%; opacity: 1 }
}
@keyframes typewriterLine3 {
  0%, 75% { width: 0; opacity: 0 }
  80% { width: 0; opacity: 1 }
  100% { width: 100%; opacity: 1 }
}
@keyframes cursorBlink202 {
  0%, 100% { border-color: #a78bfa }
  50% { border-color: transparent }
}
@keyframes fadeUp202 {
  0% { opacity: 0; transform: translateY(20px) }
  100% { opacity: 1; transform: translateY(0) }
}
`;

export default function Hero202(props: BlockProps) {
  const {
    theme,
    heading = "Launch faster.",
    subheading = "Scale smarter.",
    bodyText = "Grow without limits.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
    items = [
      { icon: "rocket", title: "Deploy in seconds", description: "Zero-config deployments" },
      { icon: "zap", title: "Lightning fast", description: "Sub-50ms response times" },
      { icon: "shield", title: "Enterprise secure", description: "SOC 2 Type II compliant" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    rocket: <Rocket className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
  };

  return (
    <section
      className="min-h-screen flex items-center px-4 py-20"
      style={{
        background: theme?.background
          ? theme.background
          : "linear-gradient(135deg, #0f0826 0%, #1a0e3e 40%, #2d1b69 100%)",
        color: theme?.foreground ?? "#f0ecff",
      }}
    >
      <style>{multiTypewriterKeyframes}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          {[
            { text: heading, anim: "typewriterLine1", delay: "0s" },
            { text: subheading, anim: "typewriterLine2", delay: "0s" },
            { text: bodyText, anim: "typewriterLine3", delay: "0s" },
          ].map((line, i) => (
            <div key={i} className="overflow-hidden mb-2">
              <h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap overflow-hidden"
                style={{
                  width: "0",
                  borderRight: i === 2 ? "3px solid #a78bfa" : "none",
                  animation: `${line.anim} 3s steps(25) forwards${i === 2 ? ", cursorBlink202 0.75s step-end infinite 3s" : ""}`,
                }}
              >
                {line.text}
              </h1>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          style={{ animation: "fadeUp202 0.8s ease-out 3.5s both" }}
        >
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-bold transition-transform hover:scale-105"
            style={{
              background: theme?.primary ?? "linear-gradient(135deg, #7c3aed, #a78bfa)",
              color: "#ffffff",
            }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold border transition-opacity hover:opacity-100 opacity-70"
            style={{ borderColor: theme?.accent ?? "#7c3aed" }}
          >
            {secondaryButtonText}
          </a>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          style={{ animation: "fadeUp202 0.8s ease-out 4s both" }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: theme?.primary ?? "#7c3aed", color: "#fff" }}
              >
                {iconMap[item.icon ?? ""] ?? <Rocket className="w-5 h-5" />}
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm opacity-60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
