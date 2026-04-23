import type { BlockProps } from "@/blocks/types";
import { Star, Rocket, BookOpenCheck, Palette, Trophy } from "lucide-react";

export default function Hero227(props: BlockProps) {
  const {
    theme,
    heading = "Learning Should Be Fun!",
    subheading = "For Ages 5-12",
    bodyText = "Interactive games, creative challenges, and hands-on projects that make every kid fall in love with learning.",
    buttonText = "Start Exploring",
    buttonUrl = "#",
    secondaryButtonText = "For Parents",
    secondaryButtonUrl = "#",
    items = [
      { title: "Reading Adventures", icon: "BookOpenCheck", description: "Stories that spark imagination" },
      { title: "Art Studio", icon: "Palette", description: "Draw, paint, and create" },
      { title: "Science Lab", icon: "Rocket", description: "Fun experiments at home" },
      { title: "Achievements", icon: "Trophy", description: "Earn badges and rewards" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    BookOpenCheck: <BookOpenCheck className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Rocket: <Rocket className="w-6 h-6" />,
    Trophy: <Trophy className="w-6 h-6" />,
  };

  const cardColors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#a78bfa"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fffbeb", color: theme?.foreground ?? "#2d2d2d" }}
      className="min-h-screen flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 overflow-hidden"
    >
      <style>{`
        @keyframes bounceIn {
          0% { opacity: 0; transform: translateY(80px) scale(0.3); }
          50% { transform: translateY(-15px) scale(1.05); }
          70% { transform: translateY(8px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounceInStar {
          0% { opacity: 0; transform: scale(0) rotate(-180deg); }
          60% { transform: scale(1.3) rotate(15deg); }
          80% { transform: scale(0.9) rotate(-5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        .hero227-title { animation: bounceIn 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards; opacity: 0; }
        .hero227-sub { animation: bounceIn 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) 0.15s forwards; opacity: 0; }
        .hero227-body { animation: bounceIn 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) 0.3s forwards; opacity: 0; }
        .hero227-btns { animation: bounceIn 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) 0.45s forwards; opacity: 0; }
        .hero227-card-0 { animation: bounceIn 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) 0.6s forwards; opacity: 0; }
        .hero227-card-1 { animation: bounceIn 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) 0.75s forwards; opacity: 0; }
        .hero227-card-2 { animation: bounceIn 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) 0.9s forwards; opacity: 0; }
        .hero227-card-3 { animation: bounceIn 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) 1.05s forwards; opacity: 0; }
        .hero227-star { animation: bounceInStar 0.8s ease-out 1.2s forwards; opacity: 0; }
        .hero227-card:hover { animation: wiggle 0.4s ease-in-out; }
      `}</style>

      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Star decorations */}
        <div className="hero227-star inline-block mb-4">
          <Star className="w-10 h-10" style={{ color: theme?.accent ?? "#fbbf24", fill: theme?.accent ?? "#fbbf24" }} />
        </div>

        <div className="hero227-sub mb-3">
          <span
            className="inline-block text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full"
            style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}
          >
            {subheading}
          </span>
        </div>

        <h1 className="hero227-title text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5">
          {heading}
        </h1>

        <p className="hero227-body text-base md:text-lg opacity-65 max-w-xl mx-auto mb-10 leading-relaxed">
          {bodyText}
        </p>

        <div className="hero227-btns flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-transform hover:scale-110"
            style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}
          >
            <Rocket className="w-5 h-5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold border-2 transition-transform hover:scale-105"
            style={{ borderColor: theme?.primary ?? "#6366f1", color: theme?.primary ?? "#6366f1" }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className={`hero227-card-${i} hero227-card p-5 rounded-3xl text-white cursor-pointer transition-transform hover:scale-105`}
              style={{ backgroundColor: cardColors[i % cardColors.length] }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                {iconMap[item.icon ?? "Rocket"] ?? <Rocket className="w-6 h-6" />}
              </div>
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-xs opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
