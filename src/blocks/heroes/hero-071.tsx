import type { BlockProps } from "@/blocks/types";
import { Dumbbell, Users, Award, ArrowRight } from "lucide-react";

export default function Hero071(props: BlockProps) {
  const {
    theme,
    heading = "Transform Your Body, Transform Your Life",
    subheading = "Join the strongest fitness community in the city",
    bodyText = "Expert trainers, world-class equipment, and a community that pushes you to be your best every single day.",
    buttonText = "Join Today",
    buttonUrl = "#",
    secondaryButtonText = "View Plans",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "5,000+", description: "Active Members" },
      { title: "80+", description: "Expert Trainers" },
      { title: "24/7", description: "Open Hours" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#111", color: theme?.foreground ?? "#fff" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text Side */}
          <div className="flex-1 text-center md:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: theme?.primary ?? "#e11d48", color: "#fff" }}
            >
              <Dumbbell className="w-4 h-4" />
              Premium Fitness
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
              {subheading}
            </p>
            <p className="mt-3 text-sm opacity-50 max-w-md mx-auto md:mx-0">
              {bodyText}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
              {items.map((item, i) => (
                <div key={i} className="text-center md:text-left">
                  <div
                    className="text-2xl sm:text-3xl font-extrabold"
                    style={{ color: theme?.primary ?? "#e11d48" }}
                  >
                    {item.title}
                  </div>
                  <div className="text-xs uppercase tracking-wider opacity-60 mt-1">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#e11d48" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold text-base border border-current opacity-70 hover:opacity-100 transition-opacity"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Fitness"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
            ) : (
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl flex flex-col items-center justify-center gap-4"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}22` : "#e11d4822" }}
              >
                <Dumbbell className="w-20 h-20 opacity-40" style={{ color: theme?.primary ?? "#e11d48" }} />
                <div className="flex gap-6 opacity-30">
                  <Users className="w-10 h-10" />
                  <Award className="w-10 h-10" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
