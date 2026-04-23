import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Heart, Sun, Baby, Star } from "lucide-react";

export default function Hero096(props: BlockProps) {
  const {
    theme,
    heading = "Where Little Ones Learn, Play & Grow",
    subheading = "A nurturing environment where your child builds confidence, creativity, and friendships. Licensed caregivers, age-appropriate activities, and a safe space for every stage.",
    buttonText = "Enroll Your Child",
    buttonUrl = "#",
    secondaryButtonText = "Schedule a Tour",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Ages 6 months to 5 years" },
      { title: "Certified early childhood educators" },
      { title: "Nutritious meals included" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background || "#fffbf5",
        color: theme?.foreground || "#3d2c1e",
      }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        {/* Text Side (right on desktop) */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sun className="w-5 h-5" style={{ color: theme?.accent || "#f59e0b" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: theme?.accent || "#f59e0b" }}
            >
              Sunshine Daycare
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <ul className="mt-6 space-y-2.5 text-left max-w-md mx-auto md:mx-0">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Heart
                  className="w-4 h-4 flex-shrink-0 fill-current"
                  style={{ color: theme?.primary || "#ec4899" }}
                />
                <span className="text-sm sm:text-base opacity-75">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary || "#ec4899" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              style={{ color: theme?.primary || "#ec4899" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium hover:opacity-80 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Trust element */}
          <div className="mt-8 flex items-center gap-3 justify-center md:justify-start">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    borderColor: theme?.background || "#fffbf5",
                    backgroundColor: [
                      theme?.primary || "#ec4899",
                      theme?.accent || "#f59e0b",
                      "#8b5cf6",
                      "#06b6d4",
                    ][i],
                  }}
                >
                  <Baby className="w-4 h-4" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-current" style={{ color: theme?.accent || "#f59e0b" }} />
                ))}
              </div>
              <span className="opacity-60">Loved by 400+ parents</span>
            </div>
          </div>
        </div>

        {/* Image Side (left on desktop) */}
        <div className="flex-1 w-full">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-pink-50 to-orange-50">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="flex justify-center gap-4">
                    {["😊", "🎨", "🌟"].map((emoji, i) => (
                      <div
                        key={i}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                        style={{
                          backgroundColor: [
                            theme?.primary || "#ec4899",
                            theme?.accent || "#f59e0b",
                            "#8b5cf6",
                          ][i],
                          opacity: 0.15,
                        }}
                      >
                        <Sun className="w-7 h-7" style={{ color: theme?.primary || "#ec4899" }} />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium opacity-40">Children Playing</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
