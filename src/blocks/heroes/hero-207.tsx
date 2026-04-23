import type { BlockProps } from "@/blocks/types";
import { Server, Cloud, Shield } from "lucide-react";

const terminalKeyframes = `
@keyframes termType207_1 {
  0%, 5% { width: 0; opacity: 1 }
  30%, 100% { width: 100%; opacity: 1 }
}
@keyframes termType207_2 {
  0%, 30% { width: 0; opacity: 0 }
  32% { width: 0; opacity: 1 }
  55%, 100% { width: 100%; opacity: 1 }
}
@keyframes termType207_3 {
  0%, 55% { width: 0; opacity: 0 }
  57% { width: 0; opacity: 1 }
  80%, 100% { width: 100%; opacity: 1 }
}
@keyframes termType207_4 {
  0%, 80% { width: 0; opacity: 0 }
  82% { width: 0; opacity: 1 }
  100% { width: 100%; opacity: 1 }
}
@keyframes termCursor207 {
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
}
@keyframes termFadeIn207 {
  from { opacity: 0; transform: translateY(20px) }
  to { opacity: 1; transform: translateY(0) }
}
`;

export default function Hero207(props: BlockProps) {
  const {
    theme,
    heading = "Infrastructure that scales with you",
    subheading = "Deploy, monitor, and manage your entire stack from one terminal. Built for teams who ship fast.",
    buttonText = "Start Deploying",
    buttonUrl = "#",
    secondaryButtonText = "View Pricing",
    secondaryButtonUrl = "#",
    items = [
      { icon: "server", title: "99.99% Uptime", description: "SLA-backed guarantee" },
      { icon: "cloud", title: "Global CDN", description: "40+ edge locations" },
      { icon: "shield", title: "Zero Trust", description: "Security by default" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    server: <Server className="w-5 h-5" />,
    cloud: <Cloud className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
  };

  const termLines = [
    { prompt: "$ ", cmd: "infra deploy --env production", anim: "termType207_1 5s steps(35) forwards" },
    { prompt: "  ", cmd: "Provisioning 3 containers... done", anim: "termType207_2 5s steps(35) forwards", color: "#4ade80" },
    { prompt: "  ", cmd: "Running health checks... all passing", anim: "termType207_3 5s steps(40) forwards", color: "#4ade80" },
    { prompt: "  ", cmd: "Live at https://app.example.com", anim: "termType207_4 5s steps(35) forwards", color: "#38bdf8" },
  ];

  return (
    <section
      className="min-h-screen flex items-center px-4 py-20"
      style={{
        backgroundColor: theme?.background ?? "#0f172a",
        color: theme?.foreground ?? "#e2e8f0",
      }}
    >
      <style>{terminalKeyframes}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Terminal window */}
          <div
            className="order-2 lg:order-1 rounded-xl overflow-hidden border shadow-2xl"
            style={{
              backgroundColor: "#1e293b",
              borderColor: "rgba(255,255,255,0.1)",
              animation: "termFadeIn207 0.7s ease-out 0.3s both",
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "#0f172a" }}
            >
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono opacity-40 ml-2">terminal — bash</span>
            </div>

            {/* Terminal body */}
            <div className="p-5 font-mono text-sm leading-relaxed space-y-1">
              {termLines.map((line, i) => (
                <div key={i} className="flex">
                  <span style={{ color: theme?.accent ?? "#22d3ee" }}>{line.prompt}</span>
                  <span
                    className="overflow-hidden whitespace-nowrap"
                    style={{
                      width: "0",
                      opacity: i === 0 ? 1 : 0,
                      animation: line.anim,
                      color: line.color ?? (theme?.foreground ?? "#e2e8f0"),
                    }}
                  >
                    {line.cmd}
                  </span>
                </div>
              ))}
              {/* Cursor */}
              <div className="flex items-center mt-2">
                <span style={{ color: theme?.accent ?? "#22d3ee" }}>$ </span>
                <span
                  className="inline-block w-2.5 h-5"
                  style={{
                    backgroundColor: theme?.accent ?? "#22d3ee",
                    animation: "termCursor207 1s step-end infinite",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2" style={{ animation: "termFadeIn207 0.7s ease-out both" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {heading}
            </h1>
            <p className="text-base sm:text-lg opacity-60 mb-8 max-w-lg leading-relaxed">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#22d3ee",
                  color: "#0f172a",
                }}
              >
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold border transition-opacity hover:opacity-100 opacity-60"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                {secondaryButtonText}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5" style={{ color: theme?.accent ?? "#22d3ee" }}>
                    {iconMap[item.icon ?? ""] ?? <Server className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs opacity-50">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
