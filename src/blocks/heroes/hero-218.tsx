import type { BlockProps } from "@/blocks/types";
import { Heart, Droplets, BookOpen, Users, HandHeart, ArrowRight } from "lucide-react";

export default function Hero218(props: BlockProps) {
  const {
    theme,
    heading = "Creating Lasting Impact",
    subheading = "Our Mission in Numbers",
    bodyText = "Every dollar donated, every volunteer hour, every community served brings us closer to a world where everyone has access to clean water, education, and opportunity.",
    buttonText = "Donate Now",
    buttonUrl = "#",
    secondaryButtonText = "Volunteer",
    secondaryButtonUrl = "#",
    items = [
      { title: "Lives Impacted", value: "2,450,000", icon: "heart" },
      { title: "Clean Water Wells", value: "1,847", icon: "droplets" },
      { title: "Schools Built", value: "312", icon: "book" },
      { title: "Volunteers", value: "48,200", icon: "users" },
      { title: "Communities Served", value: "890", icon: "hand" },
      { title: "Countries Active", value: "37", icon: "heart" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    heart: <Heart className="w-6 h-6" />,
    droplets: <Droplets className="w-6 h-6" />,
    book: <BookOpen className="w-6 h-6" />,
    users: <Users className="w-6 h-6" />,
    hand: <HandHeart className="w-6 h-6" />,
  };

  const cardColors = ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#8b5cf6", "#ec4899"];

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-8 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#fefce8",
        color: theme?.foreground ?? "#1c1917",
      }}
    >
      <style>{`
        @keyframes hero218PopIn {
          0% { opacity: 0; transform: scale(0.4) translateY(30px); }
          70% { opacity: 1; transform: scale(1.06) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes hero218NumberReveal {
          0% { opacity: 0; transform: translateY(100%); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero218-card-0 { animation: hero218PopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both; }
        .hero218-card-1 { animation: hero218PopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s both; }
        .hero218-card-2 { animation: hero218PopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both; }
        .hero218-card-3 { animation: hero218PopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s both; }
        .hero218-card-4 { animation: hero218PopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both; }
        .hero218-card-5 { animation: hero218PopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.85s both; }
        .hero218-num {
          overflow: hidden;
        }
        .hero218-num-inner {
          display: inline-block;
          animation: hero218NumberReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{
              backgroundColor: `${theme?.primary ?? "#ef4444"}12`,
              color: theme?.primary ?? "#ef4444",
            }}
          >
            <HandHeart className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5">
            {heading}
          </h1>

          <p className="text-sm sm:text-base opacity-60 max-w-xl mx-auto leading-relaxed">
            {bodyText}
          </p>
        </div>

        {/* Counter cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {items.slice(0, 6).map((item, i) => {
            const color = cardColors[i % cardColors.length];
            return (
              <div
                key={i}
                className={`hero218-card-${i} rounded-2xl p-5 sm:p-7 text-center`}
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: `${color}15`,
                    color: color,
                  }}
                >
                  {iconMap[item.icon as string] ?? <Heart className="w-6 h-6" />}
                </div>

                <div className="hero218-num">
                  <span
                    className="hero218-num-inner text-3xl sm:text-4xl font-black"
                    style={{ color }}
                  >
                    {item.value}
                  </span>
                </div>

                <p className="text-xs sm:text-sm opacity-50 font-medium mt-2">{item.title}</p>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-full transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#ef4444",
              color: "#fff",
            }}
          >
            <Heart className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-full border-2 transition-opacity hover:opacity-80"
            style={{
              borderColor: theme?.primary ?? "#ef4444",
              color: theme?.primary ?? "#ef4444",
            }}
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
