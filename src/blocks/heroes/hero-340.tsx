"use client";

import type { BlockProps } from "@/blocks/types";
import { GraduationCap, TrendingUp, BookOpen, Calculator, Globe, Beaker, ArrowRight, Star, CheckCircle } from "lucide-react";

export default function Hero340(props: BlockProps) {
  const {
    theme,
    heading = "Better Grades Start Here",
    subheading = "Expert Tutoring for Every Subject",
    bodyText = "Personalized one-on-one and small group tutoring that meets students where they are. Our certified tutors have helped thousands of students boost their confidence and academic performance.",
    buttonText = "Book Free Assessment",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Mathematics", icon: "calculator", description: "Algebra to Calculus" },
      { title: "Sciences", icon: "beaker", description: "Physics, Chemistry, Biology" },
      { title: "English & Writing", icon: "book", description: "Grammar to Essays" },
      { title: "Languages", icon: "globe", description: "Spanish, French, Mandarin" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    calculator: <Calculator className="w-5 h-5" />,
    beaker: <Beaker className="w-5 h-5" />,
    book: <BookOpen className="w-5 h-5" />,
    globe: <Globe className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#F0F4FF", color: theme?.foreground ?? "#1E293B" }}
      className="relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(${theme?.primary ?? "#3B82F6"} 1px, transparent 1px), linear-gradient(90deg, ${theme?.primary ?? "#3B82F6"} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#3B82F615", color: theme?.primary ?? "#3B82F6" }}
            >
              <GraduationCap className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base md:text-lg opacity-60 mb-8 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: theme?.primary ?? "#3B82F6" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Success stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-white/70 shadow-sm">
                <div className="text-2xl md:text-3xl font-black" style={{ color: theme?.primary ?? "#3B82F6" }}>95%</div>
                <div className="text-xs opacity-50 mt-1">Improved Grades</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/70 shadow-sm">
                <div className="text-2xl md:text-3xl font-black" style={{ color: theme?.primary ?? "#3B82F6" }}>3,200+</div>
                <div className="text-xs opacity-50 mt-1">Students Tutored</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/70 shadow-sm">
                <div className="flex justify-center gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map(n => (
                    <Star key={n} className="w-3.5 h-3.5 fill-current" style={{ color: theme?.primary ?? "#3B82F6" }} />
                  ))}
                </div>
                <div className="text-xs opacity-50">Parent Rating</div>
              </div>
            </div>
          </div>

          {/* Subject grid */}
          <div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-blue-100"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-3 text-white"
                    style={{ backgroundColor: theme?.primary ?? "#3B82F6" }}
                  >
                    {iconMap[item.icon ?? "book"] ?? <BookOpen className="w-5 h-5" />}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs opacity-50">{item.description}</p>
                  <div className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#3B82F6" }}>Learn more</span>
                    <ArrowRight className="w-3 h-3" style={{ color: theme?.primary ?? "#3B82F6" }} />
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-5 rounded-xl border-2 border-dashed"
              style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#3B82F630" }}
            >
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 mt-0.5 shrink-0" style={{ color: theme?.primary ?? "#3B82F6" }} />
                <div>
                  <h4 className="font-bold text-sm mb-2">Free Academic Assessment</h4>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2 text-xs opacity-60">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: theme?.primary ?? "#3B82F6" }} />
                      30-minute diagnostic evaluation
                    </li>
                    <li className="flex items-center gap-2 text-xs opacity-60">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: theme?.primary ?? "#3B82F6" }} />
                      Personalized learning plan
                    </li>
                    <li className="flex items-center gap-2 text-xs opacity-60">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: theme?.primary ?? "#3B82F6" }} />
                      No commitment required
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
