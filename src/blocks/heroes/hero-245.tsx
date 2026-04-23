"use client";

import type { BlockProps } from "@/blocks/types";
import { Shield, Lock, Eye, Terminal } from "lucide-react";

export default function Hero245(props: BlockProps) {
  const {
    theme,
    heading = "Defend Your Digital Fortress",
    subheading = "Enterprise Cybersecurity",
    bodyText = "Advanced threat detection, real-time monitoring, and zero-trust architecture to protect your organization from evolving cyber threats. Stay secure, stay ahead.",
    buttonText = "Get Protected",
    buttonUrl = "#",
    secondaryButtonText = "Security Audit",
    secondaryButtonUrl = "#",
    items = [
      { title: "24/7", description: "Threat monitoring" },
      { title: "0.01s", description: "Detection speed" },
      { title: "99.99%", description: "Uptime guarantee" },
      { title: "150+", description: "Threat vectors covered" },
    ],
  } = props;

  const bgColor = theme?.background ?? "#0a0a0a";
  const fgColor = theme?.foreground ?? "#e0ffe0";
  const primaryColor = theme?.primary ?? "#22c55e";
  const accentColor = theme?.accent ?? "#10b981";

  // Generate matrix rain columns
  const columns = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: i * 5 + Math.random() * 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    chars: Array.from({ length: 15 }, () =>
      String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
    ).join("\n"),
  }));

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      <style>{`
        @keyframes hero245rain {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes hero245gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.08; }
        }
        @keyframes hero245scanline {
          0% { top: -5%; }
          100% { top: 105%; }
        }
      `}</style>

      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${primaryColor}15 1px, transparent 1px),
            linear-gradient(90deg, ${primaryColor}15 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "hero245gridPulse 4s ease-in-out infinite",
        }}
      />

      {/* Matrix rain columns */}
      <div className="absolute inset-0 overflow-hidden">
        {columns.map((col) => (
          <div
            key={col.id}
            className="absolute text-xs font-mono whitespace-pre leading-5 select-none"
            style={{
              left: `${col.left}%`,
              color: primaryColor,
              opacity: 0.15,
              animation: `hero245rain ${col.duration}s linear ${col.delay}s infinite`,
              textShadow: `0 0 8px ${primaryColor}`,
            }}
          >
            {col.chars}
          </div>
        ))}
      </div>

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${primaryColor}40, transparent)`,
          animation: "hero245scanline 4s linear infinite",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm mb-8 border"
            style={{
              borderColor: `${primaryColor}40`,
              backgroundColor: `${primaryColor}10`,
              color: primaryColor,
            }}
          >
            <Terminal className="w-4 h-4" />
            <span>$ {subheading.toLowerCase().replace(/\s/g, "_")} --status active</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span style={{ color: primaryColor }}>{heading.split(" ")[0]}</span>{" "}
            {heading.split(" ").slice(1).join(" ")}
          </h1>

          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 opacity-60 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={buttonUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{
                backgroundColor: primaryColor,
                color: bgColor,
                boxShadow: `0 0 30px ${primaryColor}30`,
              }}
            >
              <Shield className="w-5 h-5" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-base border transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{ borderColor: `${primaryColor}50`, color: primaryColor }}
            >
              <Eye className="w-5 h-5" />
              {secondaryButtonText}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border"
                style={{
                  borderColor: `${primaryColor}20`,
                  backgroundColor: `${primaryColor}05`,
                }}
              >
                <Lock className="w-4 h-4 mx-auto mb-2" style={{ color: primaryColor }} />
                <div className="text-xl font-bold font-mono" style={{ color: primaryColor }}>
                  {item.title}
                </div>
                <div className="text-xs opacity-50 mt-1">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
