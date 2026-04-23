import type { BlockProps } from "@/blocks/types";
import { BookOpen, Users, Clock, MapPin, ArrowRight } from "lucide-react";

export default function Hero197(props: BlockProps) {
  const {
    theme,
    heading = "Grow Together in Faith",
    subheading = "Small Groups & Bible Study",
    bodyText = "Faith was never meant to be lived alone. Join a small group and experience deeper community, meaningful conversations, and spiritual growth alongside others.",
    buttonText = "Find a Group",
    buttonUrl = "#",
    items = [
      { title: "Women's Bible Study", description: "Tuesdays, 10 AM", label: "Fellowship Hall", value: "Exploring the Book of James" },
      { title: "Men's Breakfast Group", description: "Saturdays, 7:30 AM", label: "Community Room", value: "Iron sharpening iron — faith in daily life" },
      { title: "Young Adults", description: "Thursdays, 7 PM", label: "Various Homes", value: "Navigating faith, career & relationships" },
      { title: "Family Devotional", description: "Wednesdays, 6:30 PM", label: "Main Campus", value: "Growing as a family in God's Word" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#f7f3ee",
        color: theme?.foreground ?? "#3b3228",
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left content — 2 cols */}
          <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-16">
            <div className="flex items-center gap-2 text-sm tracking-wider uppercase opacity-60">
              <BookOpen className="w-4 h-4" />
              <span>{subheading}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {heading}
            </h1>

            <div
              className="w-16 h-1 rounded"
              style={{ backgroundColor: theme?.primary ?? "#8b6f47" }}
            />

            <p className="text-base leading-relaxed opacity-70">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wider rounded-lg transition-opacity hover:opacity-90"
              style={{
                backgroundColor: theme?.primary ?? "#8b6f47",
                color: "#ffffff",
              }}
            >
              <Users className="w-4 h-4" />
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — group schedule cards — 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6 sm:p-8 space-y-3 transition-shadow hover:shadow-lg"
                style={{
                  backgroundColor: theme?.accent ?? "#ffffff",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <div className="flex items-center gap-3 text-sm opacity-60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.description}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.label}
                    </span>
                  </div>
                </div>
                <p className="text-sm opacity-50 leading-relaxed">{item.value}</p>
                <div
                  className="h-0.5 w-full rounded opacity-20"
                  style={{ backgroundColor: theme?.primary ?? "#8b6f47" }}
                />
              </div>
            ))}

            <div className="text-center pt-4">
              <p className="text-sm opacity-40 flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4" />
                New groups starting every season
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
