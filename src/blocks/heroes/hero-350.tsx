"use client";

import type { BlockProps } from "@/blocks/types";
import { MapPin, Clock, ArrowRight, UtensilsCrossed, Flame, Star, Navigation, ChefHat } from "lucide-react";

export default function Hero350(props: BlockProps) {
  const {
    theme,
    heading = "Street Food, Elevated",
    subheading = "Rolling Kitchen Food Truck",
    bodyText = "Bold flavors, fresh ingredients, and a menu that changes with the seasons. Track our truck in real-time and never miss your favorite meal on wheels.",
    buttonText = "Find Us Today",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smash Burger", description: "Double patty, American cheese, special sauce", value: "$12" },
      { title: "Korean Tacos", description: "Bulgogi beef, kimchi slaw, sriracha mayo", value: "$10" },
      { title: "Loaded Fries", description: "Truffle oil, parmesan, herb aioli", value: "$8" },
      { title: "Churro Bites", description: "Cinnamon sugar, chocolate dip", value: "$6" },
    ],
  } = props;

  const schedule = [
    { day: "Mon–Wed", location: "Downtown Plaza", time: "11 AM – 3 PM" },
    { day: "Thu–Fri", location: "Tech Park", time: "11 AM – 8 PM" },
    { day: "Sat–Sun", location: "Farmers Market", time: "9 AM – 4 PM" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1c1917", color: theme?.foreground ?? "#fafaf9" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Warm glow */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full blur-[160px] opacity-15"
        style={{ backgroundColor: theme?.primary ?? "#f97316" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#f97316"}15`, color: theme?.primary ?? "#f97316" }}
            >
              <ChefHat className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Live location tracker hint */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl mb-8 border"
              style={{
                borderColor: `${theme?.primary ?? "#f97316"}20`,
                backgroundColor: `${theme?.primary ?? "#f97316"}08`,
              }}
            >
              <div className="relative">
                <Navigation className="w-6 h-6" style={{ color: theme?.primary ?? "#f97316" }} />
                <div
                  className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ backgroundColor: theme?.primary ?? "#f97316" }}
                />
              </div>
              <div>
                <div className="text-sm font-bold">Currently Serving</div>
                <div className="text-xs opacity-50">Downtown Plaza — Open until 3 PM</div>
              </div>
              <a
                href={buttonUrl}
                className="ml-auto text-xs font-bold shrink-0"
                style={{ color: theme?.primary ?? "#f97316" }}
              >
                Get Directions →
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#f97316", color: "#ffffff" }}
              >
                <MapPin className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#f97316"}40`, color: theme?.primary ?? "#f97316" }}
              >
                <UtensilsCrossed className="w-4 h-4" />
                Full Menu
              </a>
            </div>

            {/* Weekly schedule */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-3">This Week</h3>
              <div className="space-y-2">
                {schedule.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="font-bold w-20 shrink-0" style={{ color: theme?.primary ?? "#f97316" }}>{s.day}</span>
                    <MapPin className="w-3 h-3 opacity-30" />
                    <span className="opacity-60">{s.location}</span>
                    <span className="opacity-30">·</span>
                    <Clock className="w-3 h-3 opacity-30" />
                    <span className="opacity-60">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Today's menu preview */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6 shadow-xl">
                <img src={imageUrl} alt="Food truck cuisine" className="w-full h-56 object-cover" />
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <Flame className="w-4 h-4" style={{ color: theme?.primary ?? "#f97316" }} />
                Today&apos;s Menu
              </h3>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" style={{ color: theme?.primary ?? "#f97316" }} />
                ))}
                <span className="text-xs opacity-40 ml-1">4.8</span>
              </div>
            </div>

            <div className="space-y-3">
              {items.slice(0, 4).map((dish, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer"
                  style={{
                    borderColor: `${theme?.primary ?? "#f97316"}12`,
                    backgroundColor: `${theme?.primary ?? "#f97316"}05`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg"
                      style={{ backgroundColor: `${theme?.primary ?? "#f97316"}12` }}
                    >
                      {i === 0 ? "🍔" : i === 1 ? "🌮" : i === 2 ? "🍟" : "🍩"}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{dish.title}</div>
                      <div className="text-xs opacity-40">{dish.description}</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold whitespace-nowrap" style={{ color: theme?.primary ?? "#f97316" }}>
                    {dish.value}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-4 rounded-xl text-center text-sm border"
              style={{
                borderColor: `${theme?.primary ?? "#f97316"}15`,
                backgroundColor: `${theme?.primary ?? "#f97316"}06`,
              }}
            >
              <span className="font-bold">Catering available!</span>
              <span className="opacity-50"> Book us for your next event.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
