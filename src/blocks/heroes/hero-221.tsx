import type { BlockProps } from "@/blocks/types";
import { BookOpen, Feather, Clock } from "lucide-react";

export default function Hero221(props: BlockProps) {
  const {
    theme,
    heading = "Stories That Shape Tomorrow",
    subheading = "A Publication for the Curious Mind",
    bodyText = "Explore long-form essays, investigative journalism, and thought-provoking narratives from writers around the globe.",
    buttonText = "Start Reading",
    buttonUrl = "#",
    secondaryButtonText = "Subscribe",
    secondaryButtonUrl = "#",
    items = [
      { title: "Featured Essays", description: "Deep dives into culture, science, and society", icon: "BookOpen" },
      { title: "Weekly Column", description: "Fresh perspectives every Wednesday", icon: "Feather" },
      { title: "5 Min Reads", description: "Quick insights for your morning commute", icon: "Clock" },
    ],
  } = props;

  const icons: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-5 h-5" />,
    Feather: <Feather className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf9f6", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24 overflow-hidden"
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero221-anim-1 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .hero221-anim-2 { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .hero221-anim-3 { animation: fadeInUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .hero221-anim-4 { animation: fadeInUp 0.8s ease-out 0.6s forwards; opacity: 0; }
        .hero221-anim-5 { animation: fadeInUp 0.8s ease-out 0.8s forwards; opacity: 0; }
      `}</style>

      <div className="max-w-3xl mx-auto w-full">
        <div className="hero221-anim-1 mb-4">
          <span
            className="inline-block text-xs tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full border"
            style={{ borderColor: theme?.primary ?? "#b8860b", color: theme?.primary ?? "#b8860b" }}
          >
            {subheading}
          </span>
        </div>

        <h1 className="hero221-anim-2 text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
          {heading}
        </h1>

        <p className="hero221-anim-3 text-lg md:text-xl leading-relaxed opacity-70 mb-10 max-w-xl">
          {bodyText}
        </p>

        <div className="hero221-anim-4 flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-colors"
            style={{ backgroundColor: theme?.primary ?? "#b8860b", color: "#fff" }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium border transition-colors"
            style={{ borderColor: theme?.foreground ?? "#1a1a1a" }}
          >
            {secondaryButtonText}
          </a>
        </div>

        <div className="hero221-anim-5 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: theme?.border ?? "#e5e2db" }}>
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: (theme?.primary ?? "#b8860b") + "15", color: theme?.primary ?? "#b8860b" }}
              >
                {icons[item.icon ?? "BookOpen"] ?? <BookOpen className="w-5 h-5" />}
              </div>
              <div>
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-xs opacity-60 mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
