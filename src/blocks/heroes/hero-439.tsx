"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

export default function Hero439(props: BlockProps) {
  const {
    theme,
    heading = "Secure Payments Made Simple",
    subheading = "Trusted by thousands of businesses worldwide",
    bodyText = "Process transactions with confidence. Our payment infrastructure handles millions of payments daily with 99.99% uptime and instant settlements.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Bank-Grade Security", description: "256-bit encryption", icon: "shield" },
      { title: "Instant Settlement", description: "Funds in minutes", icon: "clock" },
      { title: "24/7 Support", description: "Always available", icon: "users" },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#10b981";

  const iconComponents: Record<string, React.ReactNode> = {
    shield: <Shield className="w-5 h-5" />,
    clock: <Clock className="w-5 h-5" />,
    users: <Users className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#111827" }}
      className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden"
    >
      <style>{`
        @keyframes hero439-pulse {
          0% { box-shadow: 0 0 0 0 var(--pulse-color); }
          50% { box-shadow: 0 0 0 12px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }
        @keyframes hero439-glow {
          0%, 100% { box-shadow: 0 4px 20px var(--glow-sm), 0 0 40px var(--glow-lg); }
          50% { box-shadow: 0 4px 30px var(--glow-md), 0 0 80px var(--glow-lg); }
        }
        .hero439-pulse-btn {
          animation: hero439-pulse 2s ease-in-out infinite;
          --pulse-color: var(--btn-color);
        }
        .hero439-glow-btn {
          animation: hero439-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Subtle background gradient */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${primaryColor}, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto w-full space-y-16">
        {/* Main content */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-sm font-medium opacity-50">{subheading}</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {heading}
          </h1>

          <p className="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
            {bodyText}
          </p>

          {/* Pulsing CTA button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={buttonUrl}
              className="hero439-pulse-btn hero439-glow-btn inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl text-white font-bold text-lg transition-transform hover:scale-105 relative"
              style={{
                backgroundColor: primaryColor,
                "--btn-color": `${primaryColor}60`,
                "--glow-sm": `${primaryColor}30`,
                "--glow-md": `${primaryColor}50`,
                "--glow-lg": `${primaryColor}15`,
              } as React.CSSProperties}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-semibold border-2 hover:bg-black/5 transition-colors"
              style={{ borderColor: `${primaryColor}40`, color: primaryColor }}
            >
              Talk to Sales
            </a>
          </div>

          <p className="text-xs opacity-40">No credit card required. Cancel anytime.</p>
        </div>

        {/* Bottom feature cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl border transition-shadow hover:shadow-lg"
              style={{ borderColor: `${primaryColor}20` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                {iconComponents[item.icon ?? "shield"] ?? <Shield className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-sm opacity-50 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
