import type { BlockProps } from "@/blocks/types";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";

export default function Hero042(props: BlockProps) {
  const {
    theme,
    heading = "Unlock Your Potential",
    subheading = "Join thousands of learners mastering new skills with expert-led courses. From beginner to advanced, we have something for everyone.",
    buttonText = "Enroll Now",
    buttonUrl = "#",
    secondaryButtonText = "Browse Courses",
    secondaryButtonUrl = "#",
    items = [],
  } = props;

  const courseCount = items.length > 0 ? items[0].value ?? "500+" : "500+";
  const studentCount = items.length > 1 ? items[1].value ?? "25,000+" : "25,000+";
  const instructorCount = items.length > 2 ? items[2].value ?? "120+" : "120+";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf5ff", color: theme?.foreground ?? "#1e1b4b" }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <GraduationCap
              className="w-12 h-12"
              style={{ color: theme?.primary ?? "#7c3aed" }}
            />
            <BookOpen
              className="w-6 h-6 absolute -bottom-1 -right-2"
              style={{ color: theme?.accent ?? "#a78bfa" }}
            />
          </div>
        </div>

        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: theme?.primary ?? "#7c3aed" }}
        >
          Online Learning Platform
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>

        <p className="mt-6 text-lg sm:text-xl opacity-70 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: theme?.primary ?? "#7c3aed" }}
            >
              {courseCount}
            </div>
            <div className="text-xs sm:text-sm opacity-60 mt-1">Courses</div>
          </div>
          <div className="text-center">
            <div
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: theme?.primary ?? "#7c3aed" }}
            >
              {studentCount}
            </div>
            <div className="text-xs sm:text-sm opacity-60 mt-1">Students</div>
          </div>
          <div className="text-center">
            <div
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: theme?.primary ?? "#7c3aed" }}
            >
              {instructorCount}
            </div>
            <div className="text-xs sm:text-sm opacity-60 mt-1">Instructors</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-medium text-base hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-base underline underline-offset-4 hover:opacity-80 transition-opacity"
            style={{ color: theme?.primary ?? "#7c3aed" }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
