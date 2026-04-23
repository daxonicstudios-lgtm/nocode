"use client";

import type { BlockProps } from "@/blocks/types";
import { MapPin, Calendar, Sun, Users, Tent, Carrot, ArrowRight, Clock } from "lucide-react";

export default function Hero480(props: BlockProps) {
  const {
    theme,
    heading = "Where Community Meets Fresh",
    subheading = "Maplewood Farmers Market",
    bodyText = "Every Saturday morning, our market comes alive with local farmers, artisan bakers, crafters, and food makers. Over 60 vendors offering the best of the season, rain or shine.",
    buttonText = "View Vendor Map",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Sunrise Farm", description: "Organic vegetables, seasonal greens, heirloom tomatoes", label: "Produce", icon: "carrot" },
      { title: "Golden Grain Bakery", description: "Sourdough loaves, pastries, fresh-baked pies", label: "Bakery", icon: "tent" },
      { title: "Meadow Creek Dairy", description: "Artisan cheeses, fresh milk, cultured butter", label: "Dairy", icon: "sun" },
      { title: "Wildflower Honey Co.", description: "Raw local honey, beeswax candles, pollen", label: "Specialty", icon: "sun" },
    ],
  } = props;

  const seasonalCalendar = [
    { month: "Spring", items: "Asparagus, Strawberries, Peas" },
    { month: "Summer", items: "Tomatoes, Corn, Peaches" },
    { month: "Fall", items: "Pumpkins, Apples, Squash" },
    { month: "Winter", items: "Root Veg, Citrus, Preserves" },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    carrot: <Carrot className="w-5 h-5" />,
    tent: <Tent className="w-5 h-5" />,
    sun: <Sun className="w-5 h-5" />,
    users: <Users className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f9f6f0", color: theme?.foreground ?? "#2d2d2d" }}
      className="min-h-screen"
    >
      {/* Rustic top banner */}
      <div
        className="py-3 px-4 text-center text-sm font-medium"
        style={{ backgroundColor: theme?.primary ?? "#5b7c3d", color: "#fff" }}
      >
        <Calendar className="w-4 h-4 inline mr-1.5 -mt-0.5" />
        Open Every Saturday &middot; 8:00 AM to 1:00 PM &middot; Rain or Shine
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sun className="w-5 h-5" style={{ color: theme?.primary ?? "#5b7c3d" }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#5b7c3d" }}>
              {subheading}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{heading}</h1>
          <p className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto mb-8">{bodyText}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#5b7c3d" }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <MapPin className="w-5 h-5 mr-2" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border"
              style={{ borderColor: `${theme?.primary ?? "#5b7c3d"}40`, color: theme?.primary ?? "#5b7c3d" }}
            >
              <Users className="w-5 h-5 mr-2" />
              Become a Vendor
            </a>
          </div>

          {/* Quick info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-50">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Maplewood Town Green</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 8am — 1pm Saturdays</span>
            <span className="flex items-center gap-1.5"><Tent className="w-4 h-4" /> 60+ Vendors Weekly</span>
          </div>
        </div>

        {/* Two-column: vendors + seasonal calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured vendors */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Tent className="w-5 h-5" style={{ color: theme?.primary ?? "#5b7c3d" }} />
              Featured Vendors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border hover:shadow-md transition-shadow cursor-pointer"
                  style={{ borderColor: `${theme?.primary ?? "#5b7c3d"}15`, backgroundColor: theme?.background ?? "#fff" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${theme?.primary ?? "#5b7c3d"}15`, color: theme?.primary ?? "#5b7c3d" }}
                    >
                      {iconMap[item.icon ?? "carrot"] ?? <Carrot className="w-5 h-5" />}
                    </div>
                    <div>
                      <span
                        className="text-[10px] uppercase font-bold tracking-wider"
                        style={{ color: theme?.primary ?? "#5b7c3d" }}
                      >
                        {item.label}
                      </span>
                      <h3 className="font-bold mt-0.5">{item.title}</h3>
                      <p className="text-sm opacity-50 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-semibold"
                style={{ color: theme?.primary ?? "#5b7c3d" }}
              >
                See All 60+ Vendors <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Seasonal calendar */}
          <div>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: theme?.primary ?? "#5b7c3d" }} />
              Seasonal Calendar
            </h2>
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: `${theme?.primary ?? "#5b7c3d"}15` }}
            >
              {seasonalCalendar.map((season, i) => (
                <div
                  key={i}
                  className="p-4 border-b last:border-0 flex gap-3"
                  style={{ borderColor: `${theme?.primary ?? "#5b7c3d"}10` }}
                >
                  <div
                    className="w-16 text-center flex-shrink-0 py-2 rounded-lg text-xs font-bold uppercase"
                    style={{ backgroundColor: `${theme?.primary ?? "#5b7c3d"}${10 + i * 5}`, color: theme?.primary ?? "#5b7c3d" }}
                  >
                    {season.month}
                  </div>
                  <p className="text-sm opacity-60 leading-relaxed pt-1.5">{season.items}</p>
                </div>
              ))}
            </div>

            {imageUrl && (
              <img src={imageUrl} alt="Market scene" className="w-full rounded-2xl mt-4 object-cover h-48" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
