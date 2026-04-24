"use client";

import type { BlockProps } from "@/blocks/types";
import { Mail, ArrowRight, GitBranch, Link, Code2, Palette, Database, Smartphone, CircleDot } from "lucide-react";

export default function Hero300(props: BlockProps) {
  const {
    theme,
    heading = "Hi, I'm Alex Rivera",
    subheading = "Full-Stack Developer & Designer",
    bodyText = "I build polished, performant web applications from concept to deployment. Currently available for freelance projects starting June 2025.",
    buttonText = "Hire Me",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Frontend", description: "React, Next.js, TypeScript, Tailwind", icon: "code" },
      { title: "Design", description: "Figma, UI/UX, Design Systems", icon: "palette" },
      { title: "Backend", description: "Node.js, PostgreSQL, REST & GraphQL", icon: "database" },
      { title: "Mobile", description: "React Native, iOS & Android", icon: "mobile" },
    ],
  } = props;

  const iconMap: Record<string, typeof Code2> = {
    code: Code2,
    palette: Palette,
    database: Database,
    mobile: Smartphone,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f0f0f", color: theme?.foreground ?? "#e5e5e5" }}
      className="min-h-screen px-5 py-20 lg:py-28"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — profile */}
          <div className="lg:col-span-2">
            {/* Avatar */}
            <div
              className="w-28 h-28 rounded-2xl overflow-hidden mb-6 border-2"
              style={{
                borderColor: `${theme?.primary ?? "#3b82f6"}40`,
                backgroundColor: `${theme?.primary ?? "#3b82f6"}10`,
              }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold opacity-30">
                  AR
                </div>
              )}
            </div>

            {/* Availability status */}
            <div className="flex items-center gap-2 mb-6">
              <CircleDot className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">Available for work</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 tracking-tight">
              {heading}
            </h1>

            <p
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: theme?.primary ?? "#3b82f6" }}
            >
              {subheading}
            </p>

            <p className="text-sm opacity-50 leading-relaxed mb-8 max-w-sm">
              {bodyText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#3b82f6",
                  color: "#ffffff",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`mailto:hello@example.com`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: `${theme?.foreground ?? "#e5e5e5"}20` }}
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {[GitBranch, Link].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:opacity-70"
                  style={{ backgroundColor: `${theme?.foreground ?? "#e5e5e5"}10` }}
                >
                  <Icon className="w-4 h-4 opacity-60" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — skills & projects */}
          <div className="lg:col-span-3 space-y-6">
            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-4">
              {items.slice(0, 4).map((item, i) => {
                const IconComp = iconMap[item.icon ?? "code"] ?? Code2;
                return (
                  <div
                    key={i}
                    className="rounded-xl p-5 border transition-colors hover:border-opacity-30"
                    style={{
                      borderColor: `${theme?.foreground ?? "#e5e5e5"}10`,
                      backgroundColor: `${theme?.foreground ?? "#e5e5e5"}03`,
                    }}
                  >
                    <IconComp
                      className="w-5 h-5 mb-3"
                      style={{ color: theme?.primary ?? "#3b82f6" }}
                    />
                    <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                    <p className="text-xs opacity-40 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick stats */}
            <div
              className="rounded-xl p-6 border"
              style={{
                borderColor: `${theme?.primary ?? "#3b82f6"}15`,
                backgroundColor: `${theme?.primary ?? "#3b82f6"}05`,
              }}
            >
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1" style={{ color: theme?.primary ?? "#3b82f6" }}>7+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1" style={{ color: theme?.primary ?? "#3b82f6" }}>60+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Projects Shipped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1" style={{ color: theme?.primary ?? "#3b82f6" }}>100%</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Recent project teaser */}
            <div
              className="rounded-xl p-6 border cursor-pointer group"
              style={{
                borderColor: `${theme?.foreground ?? "#e5e5e5"}10`,
                backgroundColor: `${theme?.foreground ?? "#e5e5e5"}03`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-widest opacity-30">Latest Project</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
              <h3 className="text-base font-bold mb-1">Flowboard — Project Management SaaS</h3>
              <p className="text-sm opacity-40">
                Full-stack application built with Next.js, Supabase, and Stripe. Serving 2,000+ teams.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Next.js", "TypeScript", "Supabase", "Tailwind"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 rounded font-medium"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#3b82f6"}15`,
                      color: theme?.primary ?? "#3b82f6",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
