import type { BlockProps } from "@/blocks/types";
import { TrendingUp, DollarSign, Users, ArrowRight, ShieldCheck } from "lucide-react";

const fintechKeyframes = `
@keyframes fintechType210 {
  from { width: 0 }
  to { width: 100% }
}
@keyframes fintechCursor210 {
  0%, 100% { border-color: #10b981 }
  50% { border-color: transparent }
}
@keyframes countUp210 {
  from { opacity: 0; transform: translateY(20px) }
  to { opacity: 1; transform: translateY(0) }
}
@keyframes barGrow210_1 {
  from { height: 0 }
  to { height: 40% }
}
@keyframes barGrow210_2 {
  from { height: 0 }
  to { height: 65% }
}
@keyframes barGrow210_3 {
  from { height: 0 }
  to { height: 45% }
}
@keyframes barGrow210_4 {
  from { height: 0 }
  to { height: 80% }
}
@keyframes barGrow210_5 {
  from { height: 0 }
  to { height: 55% }
}
@keyframes barGrow210_6 {
  from { height: 0 }
  to { height: 90% }
}
@keyframes barGrow210_7 {
  from { height: 0 }
  to { height: 70% }
}
@keyframes pulseDot210 {
  0%, 100% { opacity: 1; transform: scale(1) }
  50% { opacity: 0.5; transform: scale(1.3) }
}
@keyframes slideIn210 {
  from { opacity: 0; transform: translateX(-20px) }
  to { opacity: 1; transform: translateX(0) }
}
`;

export default function Hero210(props: BlockProps) {
  const {
    theme,
    heading = "Smarter banking for the next generation",
    subheading = "Send, save, invest — all from one app. Zero hidden fees, real-time insights, and security you can trust.",
    buttonText = "Open Free Account",
    buttonUrl = "#",
    secondaryButtonText = "See How It Works",
    secondaryButtonUrl = "#",
    items = [
      { icon: "dollar", title: "$4.2B+", description: "Transactions processed" },
      { icon: "users", title: "2.8M", description: "Active users" },
      { icon: "trending", title: "99.9%", description: "Uptime guaranteed" },
    ],
  } = props;

  const accentGreen = theme?.primary ?? "#10b981";

  const iconMap: Record<string, React.ReactNode> = {
    dollar: <DollarSign className="w-5 h-5" />,
    users: <Users className="w-5 h-5" />,
    trending: <TrendingUp className="w-5 h-5" />,
  };

  const barHeights = [
    "barGrow210_1",
    "barGrow210_2",
    "barGrow210_3",
    "barGrow210_4",
    "barGrow210_5",
    "barGrow210_6",
    "barGrow210_7",
  ];
  const barLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <section
      className="min-h-screen flex items-center px-4 py-20"
      style={{
        backgroundColor: theme?.background ?? "#050d0a",
        color: theme?.foreground ?? "#e8f5f0",
      }}
    >
      <style>{fintechKeyframes}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — typewriter + CTA */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8 border"
              style={{
                borderColor: accentGreen + "40",
                color: accentGreen,
                animation: "slideIn210 0.6s ease-out both",
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Bank-grade security
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accentGreen, animation: "pulseDot210 2s ease-in-out infinite" }}
              />
            </div>

            {/* Typewriter heading */}
            <div className="overflow-hidden mb-6">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight overflow-hidden whitespace-nowrap"
                style={{
                  borderRight: `3px solid ${accentGreen}`,
                  width: "0",
                  animation: `fintechType210 2.5s steps(40) 0.5s forwards, fintechCursor210 0.7s step-end infinite`,
                }}
              >
                {heading}
              </h1>
            </div>

            <p
              className="text-base sm:text-lg opacity-50 mb-8 max-w-lg leading-relaxed"
              style={{ animation: "countUp210 0.7s ease-out 3.2s both" }}
            >
              {subheading}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              style={{ animation: "countUp210 0.7s ease-out 3.5s both" }}
            >
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                style={{
                  backgroundColor: accentGreen,
                  color: "#050d0a",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-opacity hover:opacity-100 opacity-50"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                {secondaryButtonText}
              </a>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-4"
              style={{ animation: "countUp210 0.7s ease-out 3.8s both" }}
            >
              {items.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ color: accentGreen }}>
                      {iconMap[item.icon ?? ""] ?? <TrendingUp className="w-5 h-5" />}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold">{item.title}</span>
                  </div>
                  <p className="text-xs opacity-40">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated chart card */}
          <div
            className="rounded-2xl border p-6 sm:p-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.08)",
              animation: "countUp210 0.8s ease-out 0.5s both",
            }}
          >
            {/* Chart header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold opacity-60">Weekly Revenue</p>
                <p className="text-2xl sm:text-3xl font-bold">$48,293</p>
              </div>
              <div
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: accentGreen + "20", color: accentGreen }}
              >
                <TrendingUp className="w-3 h-3" />
                +24.5%
              </div>
            </div>

            {/* Bar chart */}
            <div className="flex items-end justify-between gap-2 h-40 sm:h-48 mb-4">
              {barHeights.map((anim, i) => (
                <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
                  <div
                    className="w-full rounded-t-md"
                    style={{
                      backgroundColor: i === 5 ? accentGreen : accentGreen + "40",
                      height: "0",
                      animation: `${anim} 0.8s ease-out ${1.5 + i * 0.15}s forwards`,
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-2">
              {barLabels.map((label, i) => (
                <span key={i} className="flex-1 text-center text-xs opacity-30">{label}</span>
              ))}
            </div>

            {/* Mini transaction list */}
            <div
              className="mt-6 pt-6 border-t space-y-3"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {[
                { name: "Payment received", amount: "+$2,450.00", time: "2m ago" },
                { name: "Subscription renewal", amount: "-$49.99", time: "1h ago" },
                { name: "Investment return", amount: "+$384.22", time: "3h ago" },
              ].map((tx, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between"
                  style={{ animation: `slideIn210 0.5s ease-out ${3 + i * 0.2}s both` }}
                >
                  <div>
                    <p className="text-sm font-medium">{tx.name}</p>
                    <p className="text-xs opacity-30">{tx.time}</p>
                  </div>
                  <span
                    className="text-sm font-bold"
                    style={{ color: tx.amount.startsWith("+") ? accentGreen : "#f87171" }}
                  >
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
