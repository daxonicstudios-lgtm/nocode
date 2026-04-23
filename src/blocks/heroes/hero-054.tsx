import type { BlockProps } from "@/blocks/types";
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from "lucide-react";

export default function Hero054(props: BlockProps) {
  const {
    theme,
    heading = "Learn New Skills From Industry Experts",
    subheading = "Join thousands of learners worldwide. Flexible online courses designed to fit your schedule and accelerate your career.",
    buttonText = "Enroll Now",
    buttonUrl = "#",
    secondaryButtonText = "Explore Courses",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { icon: "book", title: "200+", description: "Expert-led courses" },
      { icon: "users", title: "50K+", description: "Active students" },
      { icon: "award", title: "95%", description: "Completion rate" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: theme?.accent ? `${theme.accent}22` : "#ede9fe", color: theme?.accent || "#7c3aed" }}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Online Learning Platform
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Stats row */}
          <div className="mt-8 flex items-center gap-8 justify-center md:justify-start">
            {items.slice(0, 3).map((item, i) => {
              const icons = [BookOpen, Users, Award];
              const Icon = icons[i] || BookOpen;
              return (
                <div key={i} className="text-center md:text-left">
                  <div className="flex items-center gap-1.5 justify-center md:justify-start">
                    <Icon className="w-4 h-4" style={{ color: theme?.primary }} />
                    <span className="text-2xl font-bold">{item.title}</span>
                  </div>
                  <span className="text-xs opacity-60">{item.description}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-medium bg-violet-600 hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium border border-current opacity-70 hover:opacity-100 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image / Illustration Side */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Online learning"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
          ) : (
            <div
              className="w-full aspect-[4/3] rounded-2xl p-8 flex flex-col gap-4"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}11` : "#f5f3ff" }}
            >
              {/* Fake course cards */}
              {["Web Development Bootcamp", "Data Science Fundamentals", "UI/UX Design Mastery"].map(
                (title, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ backgroundColor: theme?.background || "#fff" }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: theme?.primary ? `${theme.primary}22` : "#ede9fe" }}
                    >
                      <GraduationCap className="w-6 h-6" style={{ color: theme?.primary || "#7c3aed" }} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate">{title}</div>
                      <div className="text-xs opacity-50 mt-0.5">{12 + i * 4} modules</div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
