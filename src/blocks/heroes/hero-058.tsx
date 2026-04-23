import type { BlockProps } from "@/blocks/types";
import { Download, Star, ArrowRight, Wifi, Battery, Signal } from "lucide-react";

export default function Hero058(props: BlockProps) {
  const {
    theme,
    heading = "Your Finances, Always in Your Pocket",
    subheading = "Send money, track expenses, and save smarter — all from one beautifully simple app. Available on iOS and Android.",
    buttonText = "Download App",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" style={{ color: theme?.accent || "#eab308" }} />
            ))}
            <span className="ml-2 text-sm opacity-60">4.9 on App Store</span>
          </div>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-medium bg-black hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium border border-current opacity-70 hover:opacity-100 transition-opacity"
            >
              {secondaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-6 text-sm opacity-50">
            500K+ downloads worldwide
          </div>
        </div>

        {/* Phone Mockup Side */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-[280px] h-[560px] rounded-[3rem] border-[6px] p-3 relative shadow-2xl"
            style={{
              borderColor: theme?.foreground ? `${theme.foreground}33` : "#333",
              backgroundColor: theme?.background || "#fff",
            }}
          >
            {/* Notch */}
            <div
              className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full"
              style={{ backgroundColor: theme?.foreground ? `${theme.foreground}22` : "#e5e7eb" }}
            />
            {/* Status bar */}
            <div className="flex items-center justify-between px-4 pt-2 text-[10px] opacity-40">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-3 h-3" />
              </div>
            </div>
            {/* App content */}
            {imageUrl ? (
              <img src={imageUrl} alt="App screenshot" className="w-full h-full object-cover rounded-[2.2rem] mt-2" />
            ) : (
              <div className="mt-6 px-4 space-y-4">
                <div className="text-center">
                  <div className="text-xs opacity-50">Total Balance</div>
                  <div className="text-2xl font-bold mt-1" style={{ color: theme?.primary }}>$12,450.00</div>
                </div>
                <div className="flex gap-3">
                  {["Send", "Receive", "Save"].map((label) => (
                    <div
                      key={label}
                      className="flex-1 py-3 rounded-xl text-center text-xs font-medium"
                      style={{ backgroundColor: theme?.primary ? `${theme.primary}18` : "#f3f4f6" }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
                <div className="space-y-3 mt-4">
                  <div className="text-xs font-semibold opacity-50">Recent</div>
                  {["Netflix", "Uber Eats", "Spotify"].map((name, i) => (
                    <div key={i} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: ["#e11d48", "#16a34a", "#22c55e"][i] }}
                        >
                          {name[0]}
                        </div>
                        <span className="text-sm">{name}</span>
                      </div>
                      <span className="text-sm font-medium">-${(9.99 + i * 5).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
