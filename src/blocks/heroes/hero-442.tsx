"use client";

import type { BlockProps } from "@/blocks/types";
import { Scissors, Clock, Star, Phone, ChevronRight } from "lucide-react";

export default function Hero442(props: BlockProps) {
  const {
    theme,
    heading = "Sharp Cuts Barbershop",
    subheading = "Where Real Men Get Their Edge",
    bodyText = "Premium grooming experience in the heart of Johannesburg. Walk-ins welcome, appointments preferred. Master barbers with 10+ years of experience.",
    buttonText = "Book Appointment",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Classic Cut", description: "Precision haircut with hot towel finish", value: "R150" },
      { title: "Beard Sculpt", description: "Shape, trim & oil treatment", value: "R120" },
      { title: "The Full Works", description: "Cut, beard, facial & head massage", value: "R350" },
      { title: "Line Up", description: "Clean edges & hairline detail", value: "R80" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1a1a", color: theme?.foreground ?? "#f5f0e8" }}
      className="relative overflow-hidden"
    >
      {/* Gold line accents */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: theme?.primary ?? "#c9a96e" }} />
      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: theme?.primary ?? "#c9a96e" }} />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left content - 3 cols */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <Scissors className="w-8 h-8" style={{ color: theme?.primary ?? "#c9a96e" }} />
              <div className="h-px flex-1" style={{ backgroundColor: theme?.primary ?? "#c9a96e", opacity: 0.3 }} />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-4">
              {heading}
            </h1>
            <p
              className="text-xl sm:text-2xl font-light italic mb-6 tracking-wide"
              style={{ color: theme?.primary ?? "#c9a96e" }}
            >
              {subheading}
            </p>
            <p className="text-base opacity-70 mb-8 max-w-xl leading-relaxed">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#c9a96e", color: "#1a1a1a" }}
              >
                {buttonText}
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+27123456789"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider text-sm border transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#c9a96e", color: theme?.primary ?? "#c9a96e" }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3 opacity-60">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Mon-Sat: 8AM - 8PM | Sun: 9AM - 4PM</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-current" style={{ color: theme?.primary ?? "#c9a96e" }} />
              ))}
              <span className="text-sm opacity-60 ml-2">4.9 (320+ reviews)</span>
            </div>
          </div>

          {/* Right - Service Menu - 2 cols */}
          <div className="lg:col-span-2">
            <div
              className="rounded-none border p-6"
              style={{ borderColor: `${theme?.primary ?? "#c9a96e"}40`, backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <h3
                className="text-lg font-bold uppercase tracking-widest mb-6 pb-4 border-b"
                style={{ color: theme?.primary ?? "#c9a96e", borderColor: `${theme?.primary ?? "#c9a96e"}30` }}
              >
                Service Menu
              </h3>

              <div className="space-y-0">
                {items.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between py-4 border-b last:border-b-0"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <div className="flex-1 pr-4">
                      <p className="font-bold text-sm uppercase tracking-wide">{service.title}</p>
                      <p className="text-xs opacity-50 mt-1">{service.description}</p>
                    </div>
                    <span className="text-lg font-black whitespace-nowrap" style={{ color: theme?.primary ?? "#c9a96e" }}>
                      {service.value}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={buttonUrl}
                className="mt-6 block w-full text-center py-3 font-bold uppercase tracking-wider text-sm transition-colors hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#c9a96e", color: "#1a1a1a" }}
              >
                Book Your Chair
              </a>
            </div>

            {imageUrl && (
              <img src={imageUrl} alt={heading} className="w-full mt-6 object-cover h-48 grayscale hover:grayscale-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
