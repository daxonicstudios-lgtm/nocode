"use client";

import type { BlockProps } from "@/blocks/types";
import { Briefcase, UserPlus, Building2, Heart, MapPin, ArrowRight, Star } from "lucide-react";

export default function Hero386(props: BlockProps) {
  const {
    theme,
    heading = "Hire Exceptional Talent, Build a Winning Team",
    subheading = "People-First HR Platform",
    bodyText = "Streamline recruiting, onboarding, and employee engagement in one platform. From posting jobs to building culture, we make HR effortless.",
    buttonText = "Start Hiring",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Senior Frontend Developer", description: "Engineering", label: "Remote", value: "42 applicants" },
      { title: "Product Designer", description: "Design", label: "New York, NY", value: "28 applicants" },
      { title: "Marketing Manager", description: "Marketing", label: "London, UK", value: "35 applicants" },
    ],
  } = props;

  const pipelineStages = [
    { stage: "Applied", count: 142 },
    { stage: "Screened", count: 68 },
    { stage: "Interview", count: 24 },
    { stage: "Offer", count: 8 },
    { stage: "Hired", count: 5 },
  ];

  const Users = UserPlus;

  const cultureValues = [
    { icon: Heart, label: "Wellbeing First" },
    { icon: Users, label: "Diverse & Inclusive" },
    { icon: Star, label: "Growth-Oriented" },
    { icon: Building2, label: "Remote-Friendly" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="pt-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${theme?.primary || "#14b8a6"}12`, color: theme?.primary || "#14b8a6" }}
            >
              <Briefcase className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-lg opacity-60 mb-8 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            {/* Candidate pipeline mini */}
            <div
              className="rounded-xl border p-5 mb-8"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div className="text-sm font-semibold mb-4">Candidate Pipeline</div>
              <div className="flex items-end gap-2">
                {pipelineStages.map((s, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div
                      className="mx-auto rounded-t-md mb-2 transition-all"
                      style={{
                        height: `${(s.count / 142) * 80 + 16}px`,
                        backgroundColor: `${theme?.primary || "#14b8a6"}${20 + i * 18}`,
                      }}
                    />
                    <div className="text-[10px] opacity-50">{s.stage}</div>
                    <div className="text-xs font-bold">{s.count}</div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary || "#14b8a6" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right side */}
          <div className="space-y-4">
            {/* Job postings */}
            <div
              className="rounded-2xl border p-5 shadow-lg"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-sm">Open Positions</span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium text-white"
                  style={{ backgroundColor: theme?.primary || "#14b8a6" }}
                >
                  {items.length} active
                </span>
              </div>

              <div className="space-y-3">
                {items.map((job, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border transition-shadow hover:shadow-md"
                    style={{ borderColor: `${theme?.foreground || "#000"}06` }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{job.title}</h3>
                        <div className="flex items-center gap-3 text-xs opacity-50">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            {job.description}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.label}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs" style={{ color: theme?.primary || "#14b8a6" }}>
                          <UserPlus className="w-3 h-3" />
                          <span className="font-medium">{job.value}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Culture strip */}
            <div
              className="rounded-xl p-5 border"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div className="text-sm font-semibold mb-3">Our Culture</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {cultureValues.map((cv, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg text-center"
                    style={{ backgroundColor: `${theme?.primary || "#14b8a6"}06` }}
                  >
                    <cv.icon className="w-5 h-5" style={{ color: theme?.primary || "#14b8a6" }} />
                    <span className="text-xs font-medium">{cv.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
