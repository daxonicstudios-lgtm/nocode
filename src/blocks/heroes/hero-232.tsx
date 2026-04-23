import type { BlockProps } from "@/blocks/types";
import { Code, Palette, Megaphone, Lightbulb, ArrowUpRight } from "lucide-react";

const flipStyles = `
.flip-card-232 {
  perspective: 1000px;
  height: 280px;
}
.flip-card-inner-232 {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}
.flip-card-232:hover .flip-card-inner-232 {
  transform: rotateY(180deg);
}
.flip-card-front-232,
.flip-card-back-232 {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
}
.flip-card-back-232 {
  transform: rotateY(180deg);
}
`;

const iconMap = [Code, Palette, Megaphone, Lightbulb];

export default function Hero232(props: BlockProps) {
  const {
    theme,
    heading = "We Build Brands That Move People",
    subheading = "Full-service creative agency",
    bodyText = "Strategy, design, and technology working together to create experiences your audience will remember.",
    buttonText = "Start a Project",
    buttonUrl = "#",
    items = [
      { title: "Web Development", description: "Custom platforms built for performance", label: "From concept to launch in 6 weeks" },
      { title: "Brand Identity", description: "Visual systems that capture your essence", label: "Logo, type, color, motion — all unified" },
      { title: "Digital Marketing", description: "Campaigns that convert and scale", label: "Data-driven strategies for real growth" },
      { title: "Product Strategy", description: "User-centered thinking from day one", label: "Research, prototype, test, iterate" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#111827",
        color: theme?.foreground ?? "#f9fafb",
      }}
      className="min-h-screen flex items-center px-4 py-20"
    >
      <style>{flipStyles}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: theme?.primary ?? "#6366f1" }}
          >
            {subheading}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto mb-8">
            {bodyText}
          </p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: theme?.primary ?? "#6366f1",
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 4).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="flip-card-232">
                <div className="flip-card-inner-232">
                  <div
                    className="flip-card-front-232 items-center text-center"
                    style={{
                      backgroundColor: `${theme?.foreground ?? "#f9fafb"}0a`,
                      border: `1px solid ${theme?.foreground ?? "#f9fafb"}15`,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: theme?.primary ?? "#6366f1" }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-50">{item.description}</p>
                  </div>
                  <div
                    className="flip-card-back-232 items-center text-center"
                    style={{
                      backgroundColor: theme?.primary ?? "#6366f1",
                      color: "#ffffff",
                    }}
                  >
                    <Icon className="w-8 h-8 mb-4 opacity-80" />
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{item.label}</p>
                    <a
                      href={item.url ?? "#"}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider opacity-80 hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
