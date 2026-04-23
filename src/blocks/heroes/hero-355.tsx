"use client";

import type { BlockProps } from "@/blocks/types";
import { BookOpen, Search, Calendar, ArrowRight, Clock, Users, Library, Star } from "lucide-react";

export default function Hero355(props: BlockProps) {
  const {
    theme,
    heading = "Open a Book, Open a World",
    subheading = "Westfield Public Library",
    bodyText = "Your gateway to knowledge, imagination, and community. Access over 200,000 titles, digital resources, study spaces, and programs for all ages — all with a free library card.",
    buttonText = "Get a Library Card",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Summer Reading Challenge", description: "Ages 5–17. Read 10 books, win prizes!", label: "Jun 1 – Aug 31" },
      { title: "Author Talk: Maya Chen", description: "Discussing her new novel 'The Quiet Shore'", label: "May 18, 7 PM" },
      { title: "Coding for Kids", description: "Free weekly workshop, beginner friendly", label: "Every Saturday" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf8f5", color: theme?.foreground ?? "#292524" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Subtle book spine pattern */}
      <div className="absolute left-0 top-0 w-1 h-full flex flex-col">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="flex-1"
            style={{
              backgroundColor: i % 3 === 0 ? `${theme?.primary ?? "#7c3aed"}30` : i % 3 === 1 ? `${theme?.primary ?? "#7c3aed"}15` : `${theme?.primary ?? "#7c3aed"}08`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#7c3aed"}12`, color: theme?.primary ?? "#7c3aed" }}
            >
              <Library className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-55 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Search bar */}
            <div
              className="flex items-center gap-3 p-2 rounded-xl border mb-8"
              style={{ borderColor: `${theme?.primary ?? "#7c3aed"}20`, backgroundColor: `${theme?.primary ?? "#7c3aed"}05` }}
            >
              <Search className="w-5 h-5 ml-3 opacity-30" />
              <div className="flex-1 py-2 text-sm opacity-40">Search books, authors, or topics...</div>
              <div
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white shrink-0"
                style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
              >
                Search Catalog
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
              >
                <BookOpen className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#7c3aed"}30`, color: theme?.primary ?? "#7c3aed" }}
              >
                <Calendar className="w-4 h-4" />
                Events Calendar
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Titles Available", value: "200K+" },
                { label: "Digital Resources", value: "15K+" },
                { label: "Annual Visitors", value: "85K+" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black" style={{ color: theme?.primary ?? "#7c3aed" }}>{s.value}</div>
                  <div className="text-xs opacity-40 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={imageUrl} alt="Library interior" className="w-full h-56 sm:h-64 object-cover" />
              </div>
            )}

            {/* Reading programs */}
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-4 flex items-center gap-2">
              <Star className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#7c3aed" }} />
              Programs &amp; Events
            </h3>

            <div className="space-y-3">
              {items.slice(0, 3).map((program, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border transition-all hover:scale-[1.01] cursor-pointer group"
                  style={{ borderColor: `${theme?.primary ?? "#7c3aed"}12`, backgroundColor: `${theme?.primary ?? "#7c3aed"}04` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-sm mb-0.5">{program.title}</div>
                      <div className="text-xs opacity-40">{program.description}</div>
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0"
                      style={{ backgroundColor: `${theme?.primary ?? "#7c3aed"}12`, color: theme?.primary ?? "#7c3aed" }}
                    >
                      {program.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div
              className="mt-6 p-4 rounded-xl border flex items-center gap-3"
              style={{ borderColor: `${theme?.primary ?? "#7c3aed"}12`, backgroundColor: `${theme?.primary ?? "#7c3aed"}04` }}
            >
              <Clock className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#7c3aed" }} />
              <div className="text-sm">
                <span className="font-bold">Open today: </span>
                <span className="opacity-50">9 AM – 8 PM</span>
              </div>
              <Users className="w-4 h-4 ml-auto opacity-30" />
              <span className="text-xs opacity-40">Study rooms available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
