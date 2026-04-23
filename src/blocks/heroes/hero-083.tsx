import type { BlockProps } from "@/blocks/types";
import { CreditCard, Shield, Zap, ArrowRight, Wifi } from "lucide-react";

export default function Hero083(props: BlockProps) {
  const {
    theme,
    heading = "Banking Made Simple, Secure, and Instant",
    subheading = "Open your account in minutes. Send money, pay bills, and manage your finances — all from one powerful app.",
    buttonText = "Open Account",
    buttonUrl = "#",
    secondaryButtonText = "See Features",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#f1f5f9" }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text side */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: "rgba(99,102,241,0.15)", color: theme?.primary ?? "#818cf8" }}
          >
            <Shield className="w-4 h-4" />
            <span>Bank-grade security</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="mt-6 flex flex-wrap gap-5 text-sm opacity-60">
            <span className="inline-flex items-center gap-1.5"><Zap className="w-4 h-4" style={{ color: theme?.primary ?? "#818cf8" }} /> Instant transfers</span>
            <span className="inline-flex items-center gap-1.5"><Shield className="w-4 h-4" style={{ color: theme?.primary ?? "#818cf8" }} /> 256-bit encryption</span>
            <span className="inline-flex items-center gap-1.5"><Wifi className="w-4 h-4" style={{ color: theme?.primary ?? "#818cf8" }} /> Works offline</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 font-medium hover:border-white/40 transition-colors"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Card mockup side */}
        <div className="flex-1 w-full flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Banking app"
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover rounded-3xl"
            />
          ) : (
            <div className="w-full max-w-sm">
              {/* Card mockup */}
              <div
                className="w-full aspect-[1.6/1] rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"}, ${theme?.accent ?? "#a78bfa"})` }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center justify-between">
                  <Wifi className="w-8 h-8 text-white/80" />
                  <CreditCard className="w-8 h-8 text-white/80" />
                </div>
                <div>
                  <p className="text-white/70 text-sm tracking-[0.25em] font-mono">4821 •••• •••• 7634</p>
                  <div className="flex justify-between items-end mt-3">
                    <div>
                      <p className="text-white/50 text-[10px] uppercase">Card Holder</p>
                      <p className="text-white text-sm font-medium">Alex Johnson</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-[10px] uppercase">Expires</p>
                      <p className="text-white text-sm font-medium">09/28</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Balance preview */}
              <div className="mt-6 p-5 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-sm opacity-50">Available Balance</p>
                <p className="text-3xl font-bold mt-1" style={{ color: theme?.primary ?? "#818cf8" }}>$12,450.00</p>
                <div className="mt-3 flex gap-3">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">+2.4% this month</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
