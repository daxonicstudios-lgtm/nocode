import type { BlockProps } from "@/blocks/types";
import { Play, CheckCircle2, ArrowRight, BarChart3, Users, Bell } from "lucide-react";

export default function Hero056(props: BlockProps) {
  const {
    theme,
    heading = "Manage Everything in One Powerful Dashboard",
    subheading = "Streamline your workflow with intelligent automation, real-time analytics, and seamless team collaboration.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
    items = [
      { title: "No credit card required" },
      { title: "14-day free trial" },
      { title: "Cancel anytime" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: theme?.primary ? `${theme.primary}18` : "#eff6ff", color: theme?.primary || "#2563eb" }}
          >
            Trusted by 10,000+ teams
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-medium bg-blue-600 hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium border border-current opacity-70 hover:opacity-100 transition-opacity"
            >
              <Play className="w-4 h-4" />
              {secondaryButtonText}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            {items.slice(0, 3).map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-sm opacity-60">
                <CheckCircle2 className="w-4 h-4" style={{ color: theme?.primary }} />
                {item.title}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard Mockup Side */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div
            className="w-full rounded-2xl border shadow-2xl overflow-hidden"
            style={{ borderColor: theme?.accent ? `${theme.accent}33` : "#e5e7eb", backgroundColor: theme?.background || "#fff" }}
          >
            {/* Fake top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: theme?.accent ? `${theme.accent}22` : "#f3f4f6" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="w-48 h-5 rounded-md" style={{ backgroundColor: theme?.accent ? `${theme.accent}15` : "#f3f4f6" }} />
              </div>
              <Bell className="w-4 h-4 opacity-30" />
            </div>
            {/* Fake dashboard content */}
            <div className="p-5 space-y-4">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Revenue", val: "$24.5K", icon: BarChart3 },
                  { label: "Users", val: "1,284", icon: Users },
                  { label: "Growth", val: "+12.3%", icon: BarChart3 },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: theme?.accent ? `${theme.accent}11` : "#f9fafb" }}
                  >
                    <s.icon className="w-4 h-4 opacity-40 mb-2" />
                    <div className="text-xs opacity-50">{s.label}</div>
                    <div className="text-sm font-bold">{s.val}</div>
                  </div>
                ))}
              </div>
              {/* Fake chart area */}
              <div
                className="w-full h-28 rounded-lg flex items-end gap-1.5 px-3 pb-3"
                style={{ backgroundColor: theme?.accent ? `${theme.accent}11` : "#f9fafb" }}
              >
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      backgroundColor: theme?.primary ? `${theme.primary}${i === 11 ? "cc" : "44"}` : i === 11 ? "#2563eb" : "#93c5fd",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
