"use client";

import type { BlockProps } from "@/blocks/types";
import { Scissors, ArrowRight, Ruler, Clock, Star, CheckCircle, Shirt, Sparkles } from "lucide-react";

export default function Hero367(props: BlockProps) {
  const {
    theme,
    heading = "Perfectly Fitted, Personally Crafted",
    subheading = "The Bespoke Tailor",
    bodyText = "Master tailoring for the modern individual. From custom suits to expert alterations, every stitch is placed with precision to ensure a flawless fit that moves with you.",
    buttonText = "Book a Fitting",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Custom Suits", description: "Hand-cut from 200+ premium fabrics", value: "From $650" },
      { title: "Alterations", description: "Hems, tapering, resizing & repairs", value: "From $25" },
      { title: "Wedding Attire", description: "Bespoke suits & dress alterations for the big day", value: "From $800" },
      { title: "Shirt Tailoring", description: "Made-to-measure dress & casual shirts", value: "From $120" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1a2e", color: theme?.foreground ?? "#eee" }}
      className="min-h-screen px-5 py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Measurement tape motif — diagonal lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${i * 8.5}%`,
              backgroundColor: theme?.primary ?? "#c9a96e",
              transform: "rotate(-5deg)",
            }}
          />
        ))}
      </div>

      {/* Accent glow */}
      <div
        className="absolute top-1/3 right-[-100px] w-[400px] h-[400px] rounded-full blur-[180px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#c9a96e" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] mb-6 border-b-2"
              style={{ borderColor: theme?.primary ?? "#c9a96e", color: theme?.primary ?? "#c9a96e" }}
            >
              <Scissors className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 tracking-tight">
              <span className="block font-bold">{heading.split(",")[0]},</span>
              <span className="italic" style={{ color: theme?.primary ?? "#c9a96e" }}>
                {heading.split(",")[1] || "Personally Crafted"}
              </span>
            </h1>

            <p className="text-base sm:text-lg opacity-40 leading-relaxed mb-8 max-w-lg font-light">
              {bodyText}
            </p>

            {/* Before/After hint */}
            <div
              className="flex items-stretch gap-0 mb-8 rounded-xl overflow-hidden border"
              style={{ borderColor: `${theme?.primary ?? "#c9a96e"}20` }}
            >
              <div className="flex-1 p-4 text-center" style={{ backgroundColor: `${theme?.primary ?? "#c9a96e"}06` }}>
                <div className="text-xs uppercase tracking-wider opacity-40 mb-1">Before</div>
                <Shirt className="w-8 h-8 mx-auto opacity-30" />
                <div className="text-xs opacity-40 mt-1">Off-the-rack fit</div>
              </div>
              <div className="w-px" style={{ backgroundColor: `${theme?.primary ?? "#c9a96e"}20` }} />
              <div className="flex-1 p-4 text-center" style={{ backgroundColor: `${theme?.primary ?? "#c9a96e"}12` }}>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: theme?.primary ?? "#c9a96e" }}>After</div>
                <Sparkles className="w-8 h-8 mx-auto" style={{ color: theme?.primary ?? "#c9a96e" }} />
                <div className="text-xs mt-1 font-semibold" style={{ color: theme?.primary ?? "#c9a96e" }}>Perfect silhouette</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#c9a96e", color: "#1a1a2e" }}
              >
                <Ruler className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase border"
                style={{ borderColor: `${theme?.primary ?? "#c9a96e"}50`, color: theme?.primary ?? "#c9a96e" }}
              >
                View Portfolio
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-xs opacity-40">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Same-day alterations available</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 30+ years of mastery</span>
            </div>
          </div>

          {/* Right — Services */}
          <div>
            {imageUrl && (
              <div className="relative mb-8 rounded-lg overflow-hidden">
                <img src={imageUrl} alt="Tailoring craftsmanship" className="w-full h-72 object-cover" />
                <div
                  className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm text-xs font-semibold"
                  style={{ backgroundColor: `${theme?.background ?? "#1a1a2e"}cc`, color: theme?.primary ?? "#c9a96e" }}
                >
                  <Scissors className="w-3.5 h-3.5" />
                  Hand-finished details
                </div>
              </div>
            )}

            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] opacity-30 mb-4">Our Services</h3>

            <div className="space-y-3">
              {items.slice(0, 4).map((service, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg border transition-all hover:scale-[1.01]"
                  style={{
                    borderColor: `${theme?.primary ?? "#c9a96e"}12`,
                    backgroundColor: `${theme?.primary ?? "#c9a96e"}04`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${theme?.primary ?? "#c9a96e"}12` }}
                    >
                      <CheckCircle className="w-4 h-4" style={{ color: theme?.primary ?? "#c9a96e" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{service.title}</div>
                      <div className="text-xs opacity-40">{service.description}</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold shrink-0 ml-4" style={{ color: theme?.primary ?? "#c9a96e" }}>
                    {service.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { step: "1", label: "Consult", detail: "Discuss your vision" },
                { step: "2", label: "Measure", detail: "20+ body points" },
                { step: "3", label: "Deliver", detail: "Fitted to perfection" },
              ].map((s, i) => (
                <div key={i}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold"
                    style={{ backgroundColor: theme?.primary ?? "#c9a96e", color: "#1a1a2e" }}
                  >
                    {s.step}
                  </div>
                  <div className="text-sm font-semibold">{s.label}</div>
                  <div className="text-xs opacity-40">{s.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
