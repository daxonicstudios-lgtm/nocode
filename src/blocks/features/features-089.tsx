import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Heart, Rocket, Star, Send } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Heart, Rocket, Star, Send];

export default function Features089(props: BlockProps) {
  const {
    theme,
    heading = "Feature Highlights",
    subheading = "Everything you need in one powerful platform",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Fast", description: "Optimized performance that keeps visitors engaged." },
      { title: "Secure", description: "Enterprise-grade security out of the box." },
      { title: "Insightful", description: "Actionable analytics for smarter decisions." },
      { title: "Global", description: "Multi-region deployment for worldwide reach." },
      { title: "Caring", description: "Customer-first support with real humans." },
      { title: "Ambitious", description: "Tools designed for teams that think big." },
      { title: "Rated", description: "Consistently top-rated by industry experts." },
      { title: "Connected", description: "Seamless integrations with your favorite tools." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes waveIn089 {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wave-089 { animation: waveIn089 0.5s ease-out both; }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="wave-089 rounded-xl p-5 text-center hover:shadow-md transition-shadow" style={{ animationDelay: `${i * 80}ms`, backgroundColor: theme?.accent || "#f1f5f9" }}>
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }}>
                  <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="opacity-60 text-xs">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
