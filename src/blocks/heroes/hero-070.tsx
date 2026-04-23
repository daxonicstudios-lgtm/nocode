import type { BlockProps } from "@/blocks/types";
import { GraduationCap, Users, BookOpen, Play, Star, ArrowRight, Monitor } from "lucide-react";

export default function Hero070(props: BlockProps) {
  const {
    theme,
    heading = "Master New Skills at Your Own Pace",
    subheading = "Online Learning Platform",
    bodyText = "Join thousands of students worldwide learning from industry experts. Practical, project-based courses designed to advance your career and expand your knowledge.",
    buttonText = "Start Learning",
    buttonUrl = "#",
    secondaryButtonText = "Browse Courses",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { icon: "users", label: "Active Students", value: "45,000+" },
      { icon: "book", label: "Expert Courses", value: "320+" },
      { icon: "star", label: "Average Rating", value: "4.8/5" },
    ],
  } = props;

  const brandColor = theme?.primary ?? "#6366f1";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafafe", color: theme?.foreground ?? "#1e1b4b" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center px-6 py-12 md:px-10 gap-8">
        {/* Text Right */}
        <div className="w-full md:w-1/2 md:pl-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ backgroundColor: `${brandColor}12`, color: brandColor }}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {heading}
          </h1>

          <p className="mt-5 text-base opacity-60 leading-relaxed max-w-lg">
            {bodyText}
          </p>

          {/* Stats row */}
          <div className="mt-8 flex gap-6">
            {items.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${brandColor}10` }}
                >
                  {i === 0 && <Users className="w-5 h-5" style={{ color: brandColor }} />}
                  {i === 1 && <BookOpen className="w-5 h-5" style={{ color: brandColor }} />}
                  {i === 2 && <Star className="w-5 h-5" style={{ color: brandColor }} />}
                </div>
                <div>
                  <p className="text-lg font-bold leading-none">{item.value}</p>
                  <p className="text-xs opacity-50 mt-0.5">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: brandColor }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold border hover:opacity-80 transition-opacity"
              style={{ borderColor: `${brandColor}30`, color: brandColor }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Laptop Mockup Left */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            {/* Laptop frame */}
            <div
              className="rounded-xl overflow-hidden shadow-2xl border"
              style={{ borderColor: `${theme?.foreground ?? "#1e1b4b"}15` }}
            >
              {/* Browser bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ backgroundColor: `${theme?.foreground ?? "#1e1b4b"}08` }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-60" />
                </div>
                <div
                  className="flex-1 mx-2 py-1 px-3 rounded text-xs opacity-40 text-center"
                  style={{ backgroundColor: `${theme?.foreground ?? "#1e1b4b"}06` }}
                >
                  learn.academy.com
                </div>
              </div>
              {/* Screen content */}
              {imageUrl ? (
                <img src={imageUrl} alt="Course platform" className="w-full aspect-[16/10] object-cover" />
              ) : (
                <div
                  className="w-full aspect-[16/10] flex items-center justify-center relative"
                  style={{ backgroundColor: `${brandColor}08` }}
                >
                  <Monitor className="w-16 h-16 opacity-10" style={{ color: brandColor }} />
                  {/* Play button overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: brandColor }}
                    >
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Laptop base */}
            <div
              className="mx-auto w-1/3 h-1.5 rounded-b-lg"
              style={{ backgroundColor: `${theme?.foreground ?? "#1e1b4b"}10` }}
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-3 -right-3 px-3 py-2 rounded-lg shadow-lg text-xs font-semibold flex items-center gap-1.5"
              style={{ backgroundColor: theme?.background ?? "#fafafe", border: `1px solid ${brandColor}25`, color: brandColor }}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Certificate Included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
