import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Check, Zap } from "lucide-react";

const gradientStyles = `
.gradient-btn-234 {
  background-size: 200% 100%;
  background-position: 0% center;
  transition: background-position 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
.gradient-btn-234:hover {
  background-position: 100% center;
  transform: translateY(-2px);
}
.gradient-btn-secondary-234 {
  position: relative;
  overflow: hidden;
}
.gradient-btn-secondary-234::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--grad-start), var(--grad-end));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}
.gradient-btn-secondary-234:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
.float-badge-234 {
  animation: floatBadge234 3s ease-in-out infinite;
}
@keyframes floatBadge234 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
`;

export default function Hero234(props: BlockProps) {
  const {
    theme,
    heading = "Ship faster with AI-powered workflows",
    subheading = "The modern platform for engineering teams",
    bodyText = "Automate your CI/CD pipelines, monitor deployments in real-time, and scale your infrastructure without the complexity.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
    items = [
      { title: "99.99% uptime SLA" },
      { title: "SOC 2 compliant" },
      { title: "Deploy in seconds" },
      { title: "No credit card required" },
    ],
  } = props;

  const gradStart = theme?.primary ?? "#6366f1";
  const gradEnd = theme?.accent ?? "#ec4899";

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#020617",
        color: theme?.foreground ?? "#e2e8f0",
      }}
      className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden"
    >
      <style>{gradientStyles}</style>

      {/* Background gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: gradStart }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: gradEnd }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8 float-badge-234"
            style={{
              backgroundColor: `${gradStart}15`,
              color: gradStart,
              border: `1px solid ${gradStart}30`,
            }}
          >
            <Zap className="w-3 h-3" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            {heading.split(" ").slice(0, 3).join(" ")}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${gradStart}, ${gradEnd})`,
              }}
            >
              {heading.split(" ").slice(3).join(" ")}
            </span>
          </h1>

          <p className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {bodyText}
          </p>

          {/* Gradient-shift buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={buttonUrl}
              className="gradient-btn-234 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white"
              style={{
                backgroundImage: `linear-gradient(90deg, ${gradStart}, ${gradEnd}, ${gradStart})`,
                boxShadow: `0 4px 20px ${gradStart}33`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 30px ${gradStart}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 20px ${gradStart}33`;
              }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="gradient-btn-secondary-234 inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity"
              style={{
                "--grad-start": gradStart,
                "--grad-end": gradEnd,
              } as React.CSSProperties}
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm opacity-50">
                <Check className="w-4 h-4" style={{ color: gradStart }} />
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
