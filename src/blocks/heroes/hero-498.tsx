"use client";

import type { BlockProps } from "@/blocks/types";
import {
  Heart,
  Shield,
  Clock,
  MessageCircle,
  Video,
  Calendar,
  ArrowRight,
  Leaf,
} from "lucide-react";

export default function Hero498(props: BlockProps) {
  const {
    theme,
    heading = "Your Mental Health Journey Starts Here",
    subheading = "MindBridge",
    bodyText = "Connect with licensed therapists who understand you. Flexible online sessions, evidence-based approaches, and a safe space to grow.",
    buttonText = "Match with a Therapist",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Licensed Therapists", description: "500+ vetted professionals", icon: "shield" },
      { title: "Flexible Scheduling", description: "Evenings and weekends available", icon: "clock" },
      { title: "Secure Messaging", description: "Chat between sessions", icon: "message" },
      { title: "Video Sessions", description: "Face-to-face from anywhere", icon: "video" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield className="w-5 h-5" />,
    clock: <Clock className="w-5 h-5" />,
    message: <MessageCircle className="w-5 h-5" />,
    video: <Video className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f5f0eb", color: theme?.foreground ?? "#2d2a26" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Soft organic shapes */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
        style={{ backgroundColor: theme?.primary ?? "#7c9a72" }}
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-15"
        style={{ backgroundColor: theme?.accent ?? "#b8a990" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — calming content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-4 h-4" style={{ color: theme?.primary ?? "#7c9a72" }} />
              <span
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: theme?.primary ?? "#7c9a72" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Matching criteria */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/40">
              <p className="text-sm font-semibold mb-4">What brings you here today?</p>
              <div className="flex flex-wrap gap-2">
                {["Anxiety", "Depression", "Relationships", "Stress", "Self-Esteem", "Grief", "Trauma", "Work-Life Balance"].map(
                  (topic) => (
                    <button
                      key={topic}
                      className="px-4 py-2 rounded-full text-xs border transition-colors hover:text-white"
                      style={{
                        borderColor: `${theme?.primary ?? "#7c9a72"}50`,
                        color: theme?.foreground ?? "#2d2a26",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = theme?.primary ?? "#7c9a72";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = theme?.foreground ?? "#2d2a26";
                      }}
                    >
                      {topic}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#7c9a72" }}
              >
                <Heart className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border text-sm font-medium hover:bg-white/50 transition-colors"
                style={{ borderColor: `${theme?.primary ?? "#7c9a72"}40` }}
              >
                <Calendar className="w-4 h-4" />
                Book Free Consultation
              </a>
            </div>
          </div>

          {/* Right — features + trust */}
          <div className="space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white/50 backdrop-blur-sm border border-white/40 rounded-xl p-5 flex items-start gap-4 hover:bg-white/70 transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#7c9a72"}15`,
                    color: theme?.primary ?? "#7c9a72",
                  }}
                >
                  {iconMap[item.icon ?? "shield"]}
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs opacity-50">{item.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 opacity-20 shrink-0 mt-1 ml-auto" />
              </div>
            ))}

            {/* Trust bar */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-white/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold" style={{ color: theme?.primary ?? "#7c9a72" }}>
                    50,000+
                  </p>
                  <p className="text-xs opacity-40">Sessions completed this month</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold" style={{ color: theme?.primary ?? "#7c9a72" }}>
                    4.9/5
                  </p>
                  <p className="text-xs opacity-40">Average client rating</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-black/5">
                <p className="text-xs opacity-40 text-center">
                  HIPAA compliant. Your privacy is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
